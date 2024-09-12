import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import axios from 'axios'
import { FileIcon, UploadCloudIcon, XIcon } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
export default function ProductImageUpload({ imageFile, setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
  imageLoadingState,
  isEditMode
}) {
  const inputREf = useRef(null)
  console.log(uploadedImageUrl, "uploadedImageUrl")
  const handleImageFileChange = (event) => {
    console.log(event.target.files, "even.target.files")
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setImageFile(selectedFile)
    }
  }
  console.log(imageFile, "image file")
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0]
    if (droppedFile) {
      setImageFile(droppedFile)
    }
  }
  const handleDragOver = (event) => {
    event.preventDefault();
  }
  const handleRemoveImage = () => {
    setImageFile(null)
    if (inputREf.current) {
      inputREf.current.value = ''
    }
  }
  const uploadImage = async () => {
    setImageLoadingState(true)
    const data = new FormData()
    data.append("file", imageFile)
    await axios.post('http://localhost:5000/api/v1/upload', data).then(res => {
      console.log(res, "response");
      if (res?.data?.status) {
        console.log(res?.data?.data?.filename, "Uploaded Image URL"); // Log this to see what you get
        let path = res?.data?.data?.filename
        console.log(path, "path")
        setUploadedImageUrl(path)
        setImageLoadingState(false)

      }
    })


  }
  useEffect(() => {
    if (imageFile !== null) { uploadImage() };
  }, [imageFile]);
  return (
    <div className={"w-full  mt-4  max-w-md mx-auto"}>
      <Label className="text-lg font-semibold mb-2 block">Upload image </Label>
      <div className={`${isEditMode ? "opacity-60" : ""
        } border-2 border-dashed rounded-lg p-4`} onDrop={handleDrop} onDragOver={handleDragOver}>
        <Input id="image-upload" type="file"
          onChange={handleImageFileChange}
          ref={inputREf} className="hidden"
          disabled={isEditMode} />
        {
          !imageFile ? <Label htmlFor='image-upload' className={`${isEditMode ? "cursor-not-allowed" : ""
            } flex flex-col items-center justify-center h-32 cursor-pointer`}>
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
            <span>Drag & drop or click to upload image</span>
          </Label>
            : imageLoadingState ?
              <Skeleton className={"h-10 bg-gray-100"} />
              :
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileIcon className="w-8 text-primary mr-2 h-8" />
                </div>
                <p className="text-sm font-medium">{imageFile.name}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={handleRemoveImage}
                >
                  <XIcon className="w-4 h-4" />
                  <span className="sr-only">Remove File</span>
                </Button>
              </div>



        }
      </div>
    </div>
  )
}

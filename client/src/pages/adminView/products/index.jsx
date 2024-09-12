
// import { SheetContent, SheetHeader, SheetTitle, Sheet } from '@/components/ui/sheet';

// import React, { Fragment, useEffect, useState } from 'react'
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Button } from '@/components/ui/button';
// import { Textarea } from "@/components/ui/textarea"
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import useFormFields from '@/Utils/useFormFields';
// import ProductImageUpload from '@/components/adminView/imageUpload';
// import { useDispatch, useSelector } from 'react-redux';
// import { createProduct, getAllProduct } from '@/store/admin/product-slice';
// import AdminCard from '@/components/adminView/card';
// const initialFormData = {
//   title: "",
//   description: "",
//   category: "",
//   brand: "",
//   price: "",
//   salePrice: "",
//   totalStock: "",
//   image: null
// };
// export default function AdminProducts() {
//   const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
//   const [fields, handleChange] = useFormFields(initialFormData)
//   const [imageFile, setImageFile] = useState(null);
//   const [uploadedImageUrl, setUploadedImageUrl] = useState("");
//   const [imageLoadingState, setImageLoadingState] = useState(false);
//   const [currentEditedById, setCurrentEditedById] = useState(null);
//   const dispatch = useDispatch()

//   const { productList } = useSelector((state) => state.adminProducts);
//   console.log(uploadedImageUrl,"uploadedImageUrl1")
//   const onSubmit = (event) => {
//     event.preventDefault()
//     console.log(uploadedImageUrl,"uploadedImageUrl11")
//     dispatch(createProduct({
//       ...fields,
//        image: uploadedImageUrl
//     })).then((data) => {
//       if (data?.payload?.status == "success") {
//         dispatch(getAllProduct())
//         setOpenCreateProductsDialog(false)
//         setImageFile(null)
//         handleChange(initialFormData)
//         // useToast({
//         //   title: "Product add successfully"

//         // })

//       }

//     })
//   }

//   useEffect(() => {
//     dispatch(getAllProduct())
//   }, [dispatch])
//   console.log(fields)
//   console.log(productList, "productLIst")
//   const items = productList?.map((e, index) => <AdminCard 
//   key={index} 
//   title={e?.title} 
//   id={e?._id}
//   description={e?.description}
//     price={e?.price} 
//     salePrice={e?.salePrice} 
//     totalStock={e?.totalStock} 
//     image={import.meta.env.VITE_BASE_URL+e?.image}
//     setCurrentEditedById={setCurrentEditedById} 
//     setOpenCreateProductsDialog={setOpenCreateProductsDialog} 
//     product={e}
//     handleChange={handleChange}/>)
//   return (
//     <Fragment>
//       <div className="mb-5 w-full flex justify-end">
//         <Button onClick={() => setOpenCreateProductsDialog(true)}>
//           Add New Product
//         </Button>
//       </div>
//       {productList && productList.length > 0 ?
//         <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
//           {items}
//         </div> : <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>}
//       <Sheet open={openCreateProductsDialog}
//         onOpenChange={() => setOpenCreateProductsDialog(false)}>
//         <SheetContent side="right" className="overflow-auto">
//           <SheetHeader>
//             <SheetTitle>
//               Add New Product
//             </SheetTitle>
//           </SheetHeader>
//           <ProductImageUpload
//             imageFile={imageFile}
//             uploadedImageUrl={uploadedImageUrl}
//             setUploadedImageUrl={setUploadedImageUrl}
//             setImageFile={setImageFile}
//             setImageLoadingState={setImageLoadingState}
//             imageLoadingState={imageLoadingState}
//           />
//           <form onSubmit={onSubmit}>
//             <div className='py-6'>
//               <div className="grid w-full max-w-sm items-center gap-1.5 py-3">
//                 <Label htmlFor="title">Title</Label>
//                 <Input type="text" id="title" placeholder="Title" name="title" onChange={handleChange} />
//               </div>
//               <div className="grid w-full gap-1.5 py-3">
//                 <Label htmlFor="description">Description</Label>
//                 <Textarea placeholder="Enter product description." id="description" name="description" onChange={handleChange} />
//               </div>
//               <div className="grid w-full gap-1.5 py-3">
//                 <Label htmlFor="category">Category</Label>
//                 <Select name='category' onValueChange={(value) => handleChange({ name: 'category', value })} >
//                   <SelectTrigger className="w-[280px]">
//                     <SelectValue placeholder="Select a category" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup>
//                       <SelectItem value="men">Men</SelectItem>
//                       <SelectItem value="women">Women</SelectItem>
//                       <SelectItem value="kids">Kids</SelectItem>
//                       <SelectItem value="accessories">Accessories</SelectItem>
//                       <SelectItem value="footwear">Footwear</SelectItem>
//                     </SelectGroup>

//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="grid w-full gap-1.5 py-3">
//                 <Label htmlFor="brand">Brand</Label>
//                 <Select name='brand' onValueChange={(value) => handleChange({ name: 'brand', value })}>
//                   <SelectTrigger className="w-[280px]">
//                     <SelectValue placeholder="Select a brand" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup>

//                       <SelectItem value="nike">Nike</SelectItem>
//                       <SelectItem value="adidas">Adidas</SelectItem>
//                       <SelectItem value="puma">Puma</SelectItem>
//                       <SelectItem value="levi's">Levi's</SelectItem>
//                       <SelectItem value="zara">Zara</SelectItem>
//                       <SelectItem value="h&m">H&M</SelectItem>
//                     </SelectGroup>

//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="grid w-full max-w-sm items-center gap-1.5 py-3">
//                 <Label htmlFor="price">Price</Label>
//                 <Input type="number" id="price" placeholder="Enter product price" name="price" onChange={handleChange} />
//               </div>
//               <div className="grid w-full max-w-sm items-center gap-1.5 py-3">
//                 <Label htmlFor="SalePrice">Sale Price</Label>
//                 <Input type="number" id="salePrice" placeholder="Enter discount price (optional)" name="salePrice" onChange={handleChange} />
//               </div>
//               <div className="grid w-full max-w-sm items-center gap-1.5 py-3">
//                 <Label htmlFor="totalStock">Total Stock</Label>
//                 <Input type="number" id="totalStock" placeholder="Enter quantity" name="totalStock" onChange={handleChange} />
//               </div>
//               <div>
//                 <Button type="submit" className="mt-2 w-full">
//                   add product
//                 </Button>
//               </div>
//             </div>
//           </form>
//         </SheetContent>

//       </Sheet>
//     </Fragment>
//   )
// }




// // import { SheetContent, SheetHeader, SheetTitle, Sheet } from '@/components/ui/sheet';

// // import React, { Fragment, useEffect, useState } from 'react'
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// // import { Button } from '@/components/ui/button';
// // import { Textarea } from "@/components/ui/textarea"
// // import {
// //   Select,
// //   SelectContent,
// //   SelectGroup,
// //   SelectItem,
// //   SelectLabel,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select"
// // import useFormFields from '@/Utils/useFormFields';
// // import ProductImageUpload from '@/components/adminView/imageUpload';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { createProduct, getAllProduct } from '@/store/admin/product-slice';
// // // import AdminCard from '@/components/adminView/card';
// // const initialFormData = {
// //   title: "",
// //   description: "",
// //   category: "",
// //   brand: "",
// //   price: "",
// //   salePrice: "",
// //   totalStock: "",
// //   image: null
// // };
// // export default function AdminProducts() {
//   const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
//   const [fields, handleChange] = useFormFields(initialFormData)
//   const [imageFile, setImageFile] = useState(null);
//   const [uploadedImageUrl, setUploadedImageUrl] = useState("");
//   const [imageLoadingState, setImageLoadingState] = useState(false);
//   const [currentEditedById, setCurrentEditedById] = useState(null);
//   const dispatch = useDispatch()

//   const { productList } = useSelector((state) => state.adminProducts);
//   console.log(uploadedImageUrl, "uploadedImageUrl1")
//   console.log("fields",fields)
//   const onSubmit = (event) => {
//     event.preventDefault()
//     console.log(uploadedImageUrl, "uploadedImageUrl11")
//     dispatch(createProduct({
//       ...fields,
//       image: uploadedImageUrl
//     })).then((data) => {
//       if (data?.payload?.status == "success") {
//         dispatch(getAllProduct())
//         setOpenCreateProductsDialog(false)
//         setImageFile(null)
//         // handleChange(initialFormData)
//         // useToast({
//         //   title: "Product add successfully"

//         // })

//       }

//     })
//   }

//   useEffect(() => {
//     dispatch(getAllProduct())
//   }, [dispatch])
//   console.log(fields)
//   console.log(productList, "productLIst")
//   // const items = productList?.map((e, index) => <AdminCard 
//   // key={index} 
//   // title={e?.title} 
//   // id={e?._id}
//   // description={e?.description}
//   //   price={e?.price} 
//   //   salePrice={e?.salePrice} 
//   //   totalStock={e?.totalStock} 
//   //   image={import.meta.env.VITE_BASE_URL+e?.image}
//   //   setCurrentEditedById={setCurrentEditedById} 
//   //   setOpenCreateProductsDialog={setOpenCreateProductsDialog} 
//   //   product={e}
//   //   handleChange={handleChange}/>)
//   const items = productList?.map(e => <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
//     <div className='max-w-sm'>

//       <img class="w-full h-[250px] object-cover rounded-t-lg" src={import.meta.env.VITE_BASE_URL + e?.image} alt={e?.title} />
//     </div>
//     <div class="p-5">
//       <div className="flex justify-between items-center mb-4">
//         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e?.title}</h5>
//         <div>
//           <span>{e?.category}</span>
//           <span>{e?.brand}</span>
//         </div>

//       </div>
//       <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">{e?.description}</p>
//       <div>
//         <span className='text-sm font-semibold text-primary '>Quantity:{e?.totalStock}</span>
//         <div className="flex justify-between items-center mb-8 mt-4">
//           <span className={`${e?.salePrice > 0 ? "line-through" : ""
//             } text-lg font-semibold text-primary`}>price:${e?.price}</span>
//           {e?.salePrice > 0 ? <span>salePrice:${e?.salePrice}</span> : null}

//         </div>
//       </div>


//       <div className='flex justify-between items-center'>
//         <Button className="w-32 mr-2"
//           onClick={() => {
//             setOpenCreateProductsDialog(true)
//             setCurrentEditedById(e?._id)

//               // handleChange({
//               //   title: e?.title,
//               //   description: e?.description,
//               //   category: e?.category,
//               //   brand: e?.brand,
//               //   price: e?.price,
//               //   salePrice: e?.salePrice,
//               //   totalStock: e?.totalStock,

//               // });

//           }}
//         >Edit</Button>
//         <Button className="w-32">Delete</Button>
//       </div>
//     </div>
//   </div>)
//   console.log(fields,"fieldsa")
//   return (
//     <Fragment>
//       <div className="mb-5 w-full flex justify-end">
//         <Button onClick={() => setOpenCreateProductsDialog(true)}>
//           Add New Product
//         </Button>
//       </div>
//       {productList && productList.length > 0 ?
//         <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
//           {items}
//         </div> : <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>}
//       <Sheet open={openCreateProductsDialog}
//         onOpenChange={() => setOpenCreateProductsDialog(false)}>
//         <SheetContent side="right" className="overflow-auto">
//           <SheetHeader>
//             <SheetTitle>
//               Add New Product
//             </SheetTitle>
//           </SheetHeader>
//           <ProductImageUpload
//             imageFile={imageFile}
//             uploadedImageUrl={uploadedImageUrl}
//             setUploadedImageUrl={setUploadedImageUrl}
//             setImageFile={setImageFile}
//             setImageLoadingState={setImageLoadingState}
//             imageLoadingState={imageLoadingState}
//           />
//           <form onSubmit={onSubmit}>
//             <div className='py-6'>
//               <div className="grid w-full max-w-sm items-center gap-1.5 py-3">
//                 <Label htmlFor="title">Title</Label>
//                 <Input type="text" id="title" placeholder="Title" name="title" onChange={handleChange} />
//               </div>
//               <div className="grid w-full gap-1.5 py-3">
//                 <Label htmlFor="description">Description</Label>
//                 <Textarea placeholder="Enter product description." id="description" name="description" onChange={handleChange} />
//               </div>
//               <div className="grid w-full gap-1.5 py-3">
//                 <Label htmlFor="category">Category</Label>
//                 <Select name='category' onValueChange={(value) => handleChange({ name: 'category', value })} >
//                   <SelectTrigger className="w-[280px]">
//                     <SelectValue placeholder="Select a category" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup>
//                       <SelectItem value="men">Men</SelectItem>
//                       <SelectItem value="women">Women</SelectItem>
//                       <SelectItem value="kids">Kids</SelectItem>
//                       <SelectItem value="accessories">Accessories</SelectItem>
//                       <SelectItem value="footwear">Footwear</SelectItem>
//                     </SelectGroup>

//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="grid w-full gap-1.5 py-3">
//                 <Label htmlFor="brand">Brand</Label>
//                 <Select name='brand' onValueChange={(value) => handleChange({ name: 'brand', value })}>
//                   <SelectTrigger className="w-[280px]">
//                     <SelectValue placeholder="Select a brand" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup>

//                       <SelectItem value="nike">Nike</SelectItem>
//                       <SelectItem value="adidas">Adidas</SelectItem>
//                       <SelectItem value="puma">Puma</SelectItem>
//                       <SelectItem value="levi's">Levi's</SelectItem>
//                       <SelectItem value="zara">Zara</SelectItem>
//                       <SelectItem value="h&m">H&M</SelectItem>
//                     </SelectGroup>

//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="grid w-full max-w-sm items-center gap-1.5 py-3">
//                 <Label htmlFor="price">Price</Label>
//                 <Input type="number" id="price" placeholder="Enter product price" name="price" onChange={handleChange} />
//               </div>
//               <div className="grid w-full max-w-sm items-center gap-1.5 py-3">
//                 <Label htmlFor="SalePrice">Sale Price</Label>
//                 <Input type="number" id="salePrice" placeholder="Enter discount price (optional)" name="salePrice" onChange={handleChange} />
//               </div>
//               <div className="grid w-full max-w-sm items-center gap-1.5 py-3">
//                 <Label htmlFor="totalStock">Total Stock</Label>
//                 <Input type="number" id="totalStock" placeholder="Enter quantity" name="totalStock" onChange={handleChange} />
//               </div>
//               <div>
//                 <Button type="submit" className="mt-2 w-full">
//                   add product
//                 </Button>
//               </div>
//             </div>
//           </form>
//         </SheetContent>

//       </Sheet>
//     </Fragment>
//   )
// }




import { SheetContent, SheetHeader, SheetTitle, Sheet } from '@/components/ui/sheet';

import React, { Fragment, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import ProductImageUpload from '@/components/adminView/imageUpload';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, deleteProduct, getAllProduct, updateProduct } from '@/store/admin/product-slice';
import AdminCard from '@/components/adminView/card';
import CommonForm from '@/components/common/form';
import { addProductFormElements } from '@/config';
const initialFormData = {
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
  image: null
};
export default function AdminProducts() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [currentEditedById, setCurrentEditedById] = useState(null);
  const dispatch = useDispatch()

  const { productList } = useSelector((state) => state.adminPrd)
  console.log(uploadedImageUrl, "uploadedImageUrl1")
  const onSubmit = (event) => {
    event.preventDefault()
    currentEditedById !== null ?
      dispatch(updateProduct({ id: currentEditedById, formData }))
        .then((data) => {
          console.log(data, "dataedit")
          if (data?.payload?.status == "success") {
            dispatch(getAllProduct())
            setOpenCreateProductsDialog(false)
            setFormData(initialFormData)
            setCurrentEditedById(null)
          }
        })
      : dispatch(createProduct({
        ...formData,
        image: uploadedImageUrl
      }))
        .then((data) => {
          if (data?.payload?.status == "success") {
            dispatch(getAllProduct())
            setOpenCreateProductsDialog(false)
            setImageFile(null)
            setFormData(initialFormData)
            // useToast({
            //   title: "Product add successfully"

            // })

          }

        })
  }
  const handleDeleteProduct = (currentProductId) => {
    dispatch(deleteProduct(currentProductId)).then((data)=>{
      if(data?.payload?.status == "success"){
        dispatch(getAllProduct())
      }
    })
  }

  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch])

  function isFormValid() {
    return Object.keys(formData)
      // .filter((currentKey) => currentKey !== "averageReview")
      .map((key) => formData[key] !== "")
      .every((item) => item);
  }
  console.log(formData, "formdata")
  const items = productList?.map((e, index) => <AdminCard
    key={index}
    title={e?.title}
    id={e?._id}
    description={e?.description}
    category={e?.category}
    brand={e?.brand}
    price={e?.price}
    salePrice={e?.salePrice}
    totalStock={e?.totalStock}
    image={import.meta.env.VITE_BASE_URL + e?.image}
    setCurrentEditedById={setCurrentEditedById}
    setOpenCreateProductsDialog={setOpenCreateProductsDialog}
    product={e}
    setFormData={setFormData}
    handleDeleteProduct={handleDeleteProduct}
     />)
  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Product
        </Button>
      </div>
      {productList && productList.length > 0 ?
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {items}
        </div> : <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>}
      <Sheet open={openCreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false)
          setCurrentEditedById(null)
          setFormData(initialFormData)
        }}>
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>
              {currentEditedById !== null ? "Edit Product" : "Add New Product"}
            </SheetTitle>
          </SheetHeader>
          <ProductImageUpload
            imageFile={imageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageFile={setImageFile}
            setImageLoadingState={setImageLoadingState}
            imageLoadingState={imageLoadingState}
            isEditMode={currentEditedById !== null}
          />
          {/* <form onSubmit={onSubmit}> */}
          {/* <div className='py-6'>
              <div className="grid w-full max-w-sm items-center gap-1.5 py-3">
                <Label htmlFor="title">Title</Label>
                <Input type="text" id="title" placeholder="Title" name="title" onChange={handleChange} />
              </div>
              <div className="grid w-full gap-1.5 py-3">
                <Label htmlFor="description">Description</Label>
                <Textarea placeholder="Enter product description." id="description" name="description" onChange={handleChange} />
              </div>
              <div className="grid w-full gap-1.5 py-3">
                <Label htmlFor="category">Category</Label>
                <Select name='category' onValueChange={(value) => handleChange({ name: 'category', value })} >
                  <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="men">Men</SelectItem>
                      <SelectItem value="women">Women</SelectItem>
                      <SelectItem value="kids">Kids</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                      <SelectItem value="footwear">Footwear</SelectItem>
                    </SelectGroup>

                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full gap-1.5 py-3">
                <Label htmlFor="brand">Brand</Label>
                <Select name='brand' onValueChange={(value) => handleChange({ name: 'brand', value })}>
                  <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Select a brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>

                      <SelectItem value="nike">Nike</SelectItem>
                      <SelectItem value="adidas">Adidas</SelectItem>
                      <SelectItem value="puma">Puma</SelectItem>
                      <SelectItem value="levi's">Levi's</SelectItem>
                      <SelectItem value="zara">Zara</SelectItem>
                      <SelectItem value="h&m">H&M</SelectItem>
                    </SelectGroup>

                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 py-3">
                <Label htmlFor="price">Price</Label>
                <Input type="number" id="price" placeholder="Enter product price" name="price" onChange={handleChange} />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 py-3">
                <Label htmlFor="SalePrice">Sale Price</Label>
                <Input type="number" id="salePrice" placeholder="Enter discount price (optional)" name="salePrice" onChange={handleChange} />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 py-3">
                <Label htmlFor="totalStock">Total Stock</Label>
                <Input type="number" id="totalStock" placeholder="Enter quantity" name="totalStock" onChange={handleChange} />
              </div>
              <div>
                <Button type="submit" className="mt-2 w-full">
                  add product
                </Button>
              </div>
            </div> */}
          <div className="py-6">
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText={currentEditedById !== null ? "Edit" : "Add"}
              formControls={addProductFormElements}
              isBtnDisabled={!isFormValid()}
            />
          </div>
          {/* </form> */}
        </SheetContent>

      </Sheet>
    </Fragment>
  )
}
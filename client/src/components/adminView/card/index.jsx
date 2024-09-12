
import { Button } from '@/components/ui/button'

import React from 'react'

export default function AdminCard({ title, description, price, image, salePrice, totalStock, category, brand, id,
  setCurrentEditedById, setOpenCreateProductsDialog, product, setFormData, handleDeleteProduct }) {

  console.log(image)
  console.log(product, "product")

  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <div className='max-w-sm'>
        <img class="w-full h-[250px] object-cover rounded-t-lg" src={image} alt={title} />
      </div>
      <div class="p-2">
        <div className="flex justify-between items-center ">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </div>
        <div lassName="flex g-2 justify-between items-center mb-6">
          <span class="mb-2 text-sm mr-8  ">Category:{category}</span>
          <span>Brand:{brand}</span>
        </div>
        <p class="mb-4 font-normal text-gray-700 dark:text-gray-400 mt-4">{description}</p>
        <div>
          <span className='text-sm font-semibold text-primary '>Quantity:{totalStock}</span>
          <div className="flex justify-between items-center mb-8 mt-4">
            <span className={`${salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}>price:${price}</span>
            {salePrice > 0 ? <span>salePrice:${salePrice}</span> : null}

          </div>
        </div>


        <div className='flex justify-between items-center'>
          <Button className="w-32 mr-2"
            onClick={() => {
              setOpenCreateProductsDialog(true)
              setCurrentEditedById(id)
              setFormData(product)

            }}
          >Edit</Button>
          <Button className="w-32"
            onClick={() => {
              handleDeleteProduct(id)
            }}
          >Delete</Button>
        </div>
      </div>
    </div>

  )
}

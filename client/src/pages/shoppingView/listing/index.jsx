import ProductFilter from '@/components/shoppingView/filter'
import ShopCard from '@/components/shoppingView/shopCard'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { sortOptions } from '@/config'
import { getAllProduct } from '@/store/shop/products-slice'
import axios from 'axios'

import { ArrowUpDownIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ShoppingListing() {
  const [sort, setSort] = useState(null)
  const [filters, setFilters] = useState(null)
  const dispatch = useDispatch()
  const { productList } = useSelector((state) => state.shoppingPrd)
  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch])
  console.log(productList, "productListShopping")
  const items = productList?.map((e, index) => <ShopCard
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
  />)
  const handleSort = (value) => {
    console.log(value,"valueSort")
    setSort(value)
  }
  const handleFilter=(getSectionId, getCurrentOption)=> {
    console.log(getSectionId,getCurrentOption,"handleFilter")
    
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6">
      <ProductFilter handleFilter={handleFilter} filters={filters} />
      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-extrabold">All Products</h2>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">
              {productList.length} Products
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ArrowUpDownIcon className="h-4 w-4" />
                  <span>Sort by</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                  {sortOptions?.map((sortItem) =>
                    <DropdownMenuRadioItem key={sortItem.id} value={sortItem.id}>
                      {sortItem.label}
                    </DropdownMenuRadioItem>)}
                </DropdownMenuRadioGroup>

              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {productList && productList.length > 0 ? <>
            {items}</> : null}
        </div>
      </div>
    </div>
  )
}

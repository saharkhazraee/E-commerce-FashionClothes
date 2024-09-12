import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { brandOptionsMap, categoryOptionsMap } from '@/config';
import React from 'react'

export default function ShopCard({ title, description, price, image, salePrice, totalStock, category, brand, id}) {
    return (
        <Card className="w-full max-w-sm mx-auto">
          <div 
        //   onClick={() => handleGetProductDetails(product?._id)}
          >
            <div className="relative">
              <img
                src={image}
                alt={title}
                className="w-full h-[300px] object-cover rounded-t-lg"
              />
              {totalStock === 0 ? (
                <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                  Out Of Stock
                </Badge>
              ) : totalStock < 10 ? (
                <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                  {`Only ${totalStock} items left`}
                </Badge>
              ) : salePrice > 0 ? (
                <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                  Sale
                </Badge>
              ) : null}
            </div>
            <CardContent className="p-4">
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[16px] text-muted-foreground">
                  {categoryOptionsMap[category]}
                </span>
                <span className="text-[16px] text-muted-foreground">
                  {brandOptionsMap[brand]}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span
                  className={`${
                    salePrice > 0 ? "line-through" : ""
                  } text-lg font-semibold text-primary`}
                >
                  ${price}
                </span>
                {salePrice > 0 ? (
                  <span className="text-lg font-semibold text-primary">
                    ${salePrice}
                  </span>
                ) : null}
              </div>
            </CardContent>
          </div>
          <CardFooter>
            {totalStock === 0 ? (
              <Button className="w-full opacity-60 cursor-not-allowed">
                Out Of Stock
              </Button>
            ) : (
              <Button
                // onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
                className="w-full"
              >
                Add to cart
              </Button>
            )}
          </CardFooter>
        </Card>
      );
}

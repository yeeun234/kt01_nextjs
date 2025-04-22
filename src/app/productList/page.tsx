'use client'
import React from 'react'
import { Product ,products } from '@/types/product'
import ProductItem from '@/components/ProductItem'
import { useState } from 'react'
export default function ProductList() {
  const handleClick = (id:string)=>{
    setClickedId(id);
  }
  const [clickedId,setClickedId]=useState<string>('');
  return (
    <div className='mt-20'>
      <ul>
        {
            products.map(
                (item:Product)=>
                <li key={item.id}  onClick={()=>handleClick(`${item.id}`)}>
                    [{item.id}{item.name}]
                </li>
            )
        }
      </ul>
      <ProductItem id={clickedId}/>
    </div>
  )
}

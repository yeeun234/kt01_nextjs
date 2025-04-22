import { Product ,products } from '@/types/product'
import React from 'react'

interface ProductItemProps {
    id:string;
}
export default function ProductItem({id}:ProductItemProps) {
    const item:Product | undefined= products.find((item:Product)=>item.id === id);

    if(!item){
        return <div className='mt-10'>해당아이템이 없습니다.</div>
    }
  return (
    <div className='mt-10 bg-amber-50 '>
        <ol >
            <li>id : {item.id}  </li>
            <li>name : {item.name}  </li>
            <li>category : {item.category}  </li>
            <li>price : {item.price}  </li>
            <li>description : {item.description}  </li>
            
        </ol>    
    </div>
  )
}

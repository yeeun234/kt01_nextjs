
import { Product ,products } from '@/types/product'
import Link from 'next/link'
export default function ProductList3() {

  return (
    <div className='mt-20'>
      <ul>
        {
            products.map(
                (item:Product)=>
                <li key={item.id} >
                    <Link href={`/productDetail3?id=${item.id}`}>[{item.id}{item.name}]</Link>
                </li>
            )
        }
      </ul>
    </div>
  )
}

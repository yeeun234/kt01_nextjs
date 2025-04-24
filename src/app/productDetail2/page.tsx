import { Product ,products } from '@/types/product'
import Link from 'next/link';
export default async function ProductDetailPage2() {

  return (
    <div className='mt-20 bg-amber-50'>
       
        <div className='mt-5 bg-amber-200'>
        <Link href="/productList2">
            [이전]
        </Link>
        </div>   
    </div>
  )
}

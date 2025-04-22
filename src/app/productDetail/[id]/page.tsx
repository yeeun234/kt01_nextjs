import { Product ,products } from '@/types/product'
import Link from 'next/link';
export default async function ProductDetailPage({params} : {params:Promise<{id:string}>}) {

    const {id} = await params ;
    const item:Product | undefined = products.find((item:Product)=>item.id === id);

    if(!item){
        return <div className='mt-5 bg-amber-200'>해당아이템이 없습니다.</div>
    }
  return (
    <div className='mt-20 bg-amber-50'>
        <ol>
            <li>id : {item.id}  </li>
            <li>name : {item.name}  </li>
            <li>category : {item.category}  </li>
            <li>price : {item.price}  </li>
            <li>description : {item.description}  </li>
        </ol>   
        <div className='mt-5 bg-amber-200'>
        <Link href="/productList2">
            [이전]
        </Link>
        </div>   
    </div>
  )
}

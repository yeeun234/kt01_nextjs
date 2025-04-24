
import { Suspense } from "react"
import Products from '@/components/Products'
export default function page() {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Products></Products>
    </Suspense>
  )
}

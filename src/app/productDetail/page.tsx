import React from 'react'
import Link from 'next/link'

export default function Detail() {
  return (
    <div>
      Product Detail
      <Link href="/productList2">
      [이전]
      </Link>
    </div>
  )
}

'use client'
import Image from 'next/image';

import { useState } from 'react';
import { fooddataT , imgGubunT } from '@/types/fooddataT';


interface FoodCardProps{
    obj:fooddataT;
}

export default function FoodCard({obj}:FoodCardProps) {
    const[isShow, setisShow] = useState<boolean>(false);
    const handle = ()=> {
        setisShow(!isShow);
    };
    const imgGubun:imgGubunT ={
        "광역지원센터" : "/busan.png",
        "기초푸드뱅크" : "/bank.png",
        "기초푸드마켓" : "/market.png",
    }
      //??는 null 병합 연산자 : undefined거나 null일 경우에 대체 값으로 market을 사용
    const imgSrc = imgGubun[obj["구분"] as keyof imgGubunT] ?? "/market.png"; 
    return (
        <div className='w-full h-60 flex border border-solid rounded-lg p-1 mb-2'>
            <div className='w-1/3 h-full  '>
                <Image src={imgSrc} alt={obj["사업장명"]}  width={120} height={120} className=' w-10/12  p-3' />
            </div>
            <div className='w-2/3 h-full flex flex-col items-start justify-center p-5 '>
                <div className='h-1/4 flex justify-items-normal  font-bold text-3xl mb-2 '>
                    {obj["사업장명"]}
                </div>
                <h1 className='h-1/4  flex items-center justify-center font-bold p-1 mb-2'>
                    {obj["운영주체명"]}
                </h1>
                <p className='h-1/4 w- full   text-gray-600 mb-3'>
                    {obj["사업장 소재지"]}
                </p>
                <div className=' cursor-pointer w-full h-1/4 rounded-lg bg-gray-400 flex items-center px-2 ' onClick={handle}>
                    {isShow&& `Fax : ${obj["팩스번호"]} , Phone : ${obj["연락처(대표번호)"]}`}
                </div>
            </div>
        </div>
    )
}

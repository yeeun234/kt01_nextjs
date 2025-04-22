'use client'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import sarea from '@/db/sarea.json'
import scode from '@/db/scode.json'
import { useRef } from 'react'  
import { useAtom } from "jotai";
import { IsLoginAtom } from '@/atoms/IsLoginAtom'
import { useRouter } from 'next/navigation'

interface Tdata {
    [key:string] : string;
}

interface Sarea {
    "코드" :string;
    "측정소":string;

}

interface Scode {
    [key:string]: {
    "name": string;
    "unit": string;
    "description": string;
  }
}
export default function Subway() {
    const [isLogin] = useAtom(IsLoginAtom);
    const router = useRouter();
   
    const selectRef = useRef<HTMLSelectElement>(null);//어떤 돔이 들어가느냐?셀렉트 / 초기값 널
    const ops = (sarea as Sarea[]).map((item:Sarea) => {
        return <option value={item.코드} key={item.코드}>{item.측정소}</option>
    })

    

    
    const [subwayData, setSubwayData] = useState<Tdata|undefined>(); //tdata타입이나 언디파인이 올 수 있음
    const [tags,setTags] = useState<React.ReactNode[]>([]); //div여러개를 배열로 받았으니 
    const fetchSubwayData = async (code?:string) => {
        let url = `https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?`;
        url = `${url}serviceKey=${process.env.NEXT_PUBLIC_API_KEY}`;
        url = `${url}&pageNo=1&numOfRows=10&resultType=json`;
        url = `${url}&controlnumber=${new Date().toISOString().slice(0, 10).replaceAll('-','')}07`;
        url = `${url}&areaIndex=${code}`;
        console.log(url);
        const response = await fetch(url);
        let data = await response.json();
        
        data = data.response.body.items.item[0]; 
       
       setSubwayData(data);
       
    };
    const handleChange =()=>{
        console.log(selectRef.current?.value);
        fetchSubwayData(selectRef.current?.value);  
    };
    
    useEffect(()=>{
        fetchSubwayData("201193");
    },[])
    
    useEffect(()=>{
        if(!subwayData)
            return;
        const itemKeys:string[] = Object.keys(scode as Scode);
        const scodeT = scode as Scode;
        console.log(itemKeys);
        const tm = itemKeys.map((item:string)=>{
            return(<div  key={item}>
                <div >
                    {scodeT[item].name}
                </div>
                <div>
                    ({item})
                </div>
                <div >
                    {subwayData[item]} {subwayData[item] =="-" ? "" : scodeT[item]["unit"]}
                </div>
                
            </div>
            )
        });

        setTags(tm);
        // setSubwayData(tm);
    },[subwayData]);

    if (!isLogin) {
        // return <Navigate to="/" replace />;
        router.push("/");
        }

    
  return (
    <div className='flex flex-col justify-start items-center'>
        <div>
        <select id='sel1' ref={selectRef} onChange={handleChange} className="mb-2 mt-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                 {ops} 
        </select>
        </div>
        <div className="w-full grid grid-cols-9 gap-4 mt-10 border border-gray-300  p-4 rounded-2xl">  
             { tags }
        </div>
    </div>
  )
}

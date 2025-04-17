import React from 'react'
//props 타입정의
interface TailBallProps{
    n :number |string;
}

//Record 유틸리티 타입과 템플릿 리터럴 타입을 결합
//K라는 key를 가진 객체이고, value는 T 타입
type BgColorT = Record<`n${0|1|2|3|4}`, string>
export default function TailBall({ n }:TailBallProps) {
    const bgColor:BgColorT = {
        "n0" : "bg-red-700",
        "n1" : "bg-yellow-700",
        "n2" : "bg-green-700",
        "n3" : "bg-blue-700",
        "n4" : "bg-indigo-700",
    }
    const num = typeof n === 'string' ? parseInt(n) :n;
    const colorIdx = "n"+Math.floor(num/10) as keyof BgColorT;
    return (
        <div className={`
            w-16 h-16 ${bgColor[colorIdx]} flex justify-center items-center rounded-full text-4xl text-white font-bold p-10 mr-5
        pb-10
            `}>
            {n}
        </div>
    )
}

'use client'
import TailBall from '@/components/ui/TailBall';
import TailButton from '@/components/ui/TailButton';
import { useState } from 'react'

export default function Lotto():React.ReactNode {
    //useState 타입선언
    const [lottoTags, setLottoTags] = useState<React.ReactNode[]>([]);
    const handleLottoNum = () => {
        const lottoNum:number[] = [];

        while (lottoNum.length < 7) {
            const n = Math.floor(Math.random() * 45) + 1 //`1~45

            //랜덤수를 배열에 넣기
            if (!lottoNum.includes(n)) {
                lottoNum.push(n);
            }
        }

        //보너스 번호 => 배열로 나옴
        const bonus:number[] = lottoNum.splice(-1);


        //로또 번호 정렬
        lottoNum.sort((a:number, b:number) =>  a - b )

        //로또 배열 다시 생성 
        const lottoNum2 : (number|string)[] = [...lottoNum, '+', ...bonus];

        // setLottoTags(lottoNum);
        // console.log("lottoNum",lottoNum);

        //Tailball만들기
        const tm = lottoNum2.map((item:number|string, idx:number) =>
                     item === '+' ? 
                    <span 
                    key={'n' + item + idx}
                    className='w-16 h-16 flex justify-center 
                    mr-5 items-center text-4xl font-bold'>
                    {item}</span> :
                    <TailBall
                    key={'n' + item + idx}
                    n={item} />)
        setLottoTags(tm);
    }

    return (
        <div className='w-11/12 h-full flex flex-col justify-center items-center'>
            <div className='w-full flex justify-center items-center mb-10'>
                {lottoTags}
            </div>
            <div>
                <TailButton caption="로또번호생성" color="pink" onClick={handleLottoNum} ></TailButton>
                {/* <TailButton caption="fh" color="yellow" onClick={handleLottoNum} ></TailButton> */}
            </div>
        </div>
    )
}

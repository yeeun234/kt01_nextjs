'use client'
import FoodCard from './FoodCard'
import fooddata from '@/db/fooddata.json'
import { useState } from 'react';
import TailButton from '@/components/ui/TailButton';
import { fooddataT } from '@/types/fooddataT'
export default function FoodMain() {
    console.log(fooddata);
    
    const handle = (c:string) => {
        console.log(c)
        
        const getarrays:fooddataT[] = fooddata.filter((item:fooddataT) => item["운영주체 분류"].replace(/ /g,'')==c);
        console.log("운영주체 분류에 따른 어레이 필터 " ,getarrays);

        const items = getarrays.map((i:fooddataT) => <FoodCard
            key={i["사업장명"]}
            obj={i}
            /> );

        setTags(items);

    };
    const [tags, setTags] = useState<React.ReactNode>([]);
    let category = fooddata.map(item => item["운영주체 분류"].replace(/ /g,''));
    category = [...new Set(category)];
    console.log(category);
    const bts = category.map((item => <TailButton
        key={item}
        color="pink"
        caption={item}
        onClick={() => handle(item)}
    />))

    return (
        <>
            <div className='flex h/1/6 m-10 flex-row justify-center items-center'>
                {bts}
            </div>
            <div className='w-11/12 h-5/6  mt-3 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {tags}
            </div>
        </>
    )
}
//운영주체 분류에 따라 출력을 달리 할 경우
// 1.useState사용(클릭할시마다 달라져야 하니).초깃값은 빈배열하나 넣음.
// 2.구분할 운영주체를 수기작성이 아니라 , 자동으로 제이슨파일에서 받아서 분류하기 위해선
// 2-1 일단 전체 다 가져오고 , set으로 중복제거, 근데 오타나 공백이 있어서 같은 운영주체 분류인데도
// 다른 것으로 구분지어져 집합의 원소가 늘어날 수 있음. 그렇기에 리플레이스 올('','')로 공백제거한 애들을
// 셋에 넣어줘 중복단어제거. 근데 셋은 집합이므로 어레이로 바꿔줘야함. 전개연산자로 ... 어레이로 만들어주기.

// 예전에 만들어둔 버튼태그 사용하기.  onClick={()=>handle(item)} 매개변수로 함수를쓰고 인자를 전달할때는 콜백함수형태로. 

//필터로 해당 운영주체에 속한 어레이 뽑아내기

//푸드메인의 각 div값의 높이를 조절하여 버튼과 태그즈(푸트카드)가 범위밖으로 안날라가게하기
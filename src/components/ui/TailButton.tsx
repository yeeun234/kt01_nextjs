import { MouseEvent } from "react";


//props migration 
interface TailButtonProps  {
  caption:string;
  //color:string; 
  // // -- union type  -- 
  color : "blue" | "yellow" | "pink"  | "green";
  onClick?:(e:MouseEvent<HTMLButtonElement>)=>void; //클릭되고 리턴되는게 없으니 . 함수타입임을 알리기 / ?넣으면 이게 인수로 주어져도 되고 안줘도되고가 됨.
 }; //함수가 실행 , event 감지 , 어떤이벤트? 마우스이벤트 , 어디 ? 버튼엘리먼트 . 



 type BgT = {
    "blue": string;
    "yellow": string;
    "pink": string;
    "green": string;
 }
export default function TailButton({ caption, color, onClick }:TailButtonProps){ //어떤 프롭스가 전달되나 ? 오브젝트가 인수로 전달됨. 인수의 타입선언. //:React.ReactNode  라는 리턴타입은 자동으로 인식해서 안적어도됨
  const bgColor:BgT = {
    "blue": "bg-blue-600",
    "yellow": "bg-yellow-600",
    "pink": "bg-pink-500",
    "green": "bg-green-600",
  }
  const bgHover:BgT = {
    "blue": "hover:bg-blue-400",
    "yellow": "hover:bg-yellow-400",
    "pink": "hover:bg-pink-300",
    "green": "hover:bg-green-400",
  }
  return (
    <div className=' m-2 flex flex-row justify-center items-center' >
      <button className={` h-12 ${bgColor[color]} ${bgHover[color]} flex justify-center 
       items-center rounded-md  cursor-pointer text-lg
       text-white py-2 px-4 mx-2  `}
        onClick={onClick}>
          {caption}
        </button>
    </div>
  )
}

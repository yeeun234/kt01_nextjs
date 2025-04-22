import TailButton from "@/components/ui/TailButton";
import { useRef ,MouseEvent} from "react"

interface TodoFormProps {
  addTodo :(text : string,completed: "O"|"X")=>void
} //함수임을 명시. 어떤 함수형태가 들어와야하는지 정의하는것. 키는 애드투두 / 여러곳에서 쓰는건 타입으로 빼는게 맞음. compltedT : "O"|"X" 식으로 따로 파일 만들어서 임포트하는게 나음.
export default function TodoForm({addTodo}:TodoFormProps) {
  const selRef = useRef<HTMLSelectElement>(null) ;
  const inRef = useRef<HTMLInputElement>(null) ;

  const handleClick = (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault() ;

    if (inRef.current?.value == "" ) {
      alert("값을 입력하세요.");
      inRef.current.focus() ; //값이없어도 포커스는 생기니 
      return ;
    }
    if(inRef.current) //언디파인이면 아예 안들어오게하기 . selRef는 무조건 ㅇ나 엑스임을 단언해줘야함. as "O" |"X" fallback 
    addTodo(inRef.current?.value ?? "", selRef.current?.value as "O" |"X" ?? "X") ;
  }

  const handleCancel = (e:MouseEvent<HTMLButtonElement>) => {
    if (inRef.current) {
      inRef.current.value = "";
    }
    if (inRef.current) {
      inRef.current.focus();
    }
    if (selRef.current) {
      selRef.current.value = "X";
    }
  }

  return (
    <form className="w-10/12 grid grid-cols-4 gap-4 items-center p-4">
      <select id="sel1"   ref = {selRef}
        className="bg-gray-50 border border-gray-300
                               text-gray-900 text-sm rounded-lg
                                focus:ring-blue-500 focus:border-blue-500 
                                block w-full p-2 m-2 text-center ">
        <option value="X">X</option> 
        <option value="O">O</option> 
      </select>
      <div className="col-span-2 h-full">
        <input type="text" id="txt1" ref ={inRef}
          className="bg-gray-50 border border-gray-300
                         text-gray-900 text-lg rounded-lg  text-center
                         focus:ring-blue-500 focus:border-blue-500 block w-full  
                         p-2 m-2"/>
      </div>
      <div className="flex gap-2">
      <TailButton caption="확인"
        color="blue"
        onClick={handleClick} />
      <TailButton caption="취소"
        color="blue"
        onClick={handleCancel} />
       </div>
    </form>
  )
}
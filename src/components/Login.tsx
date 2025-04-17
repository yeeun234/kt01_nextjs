'use client'
import { useRef  } from "react"
import { useRouter } from "next/navigation"
import { useAtom } from "jotai"
import { IsLoginAtom } from "../atoms/IsLoginAtom"
import { MouseEvent } from "react"
export default function Login() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null); //어디에 끼워져있는 ref요소인지 제네릭안에 명시하기.
    const router = useRouter();
    const [, setLogin] = useAtom(IsLoginAtom) ;
    const handleclick = (e:MouseEvent<HTMLButtonElement>):void => {  
        e.preventDefault(); //e가 마우스이벤트를 의미하는데 , 버튼엘리먼트에서 일어나는것임을 명시.
        if(emailRef.current?.value === ""){ //값을 가지고 오는건 ref변수 무조건 ?체이닝해야함. null이 가능한부분이기에
            alert("이메일을 입력하세요")
            emailRef.current?.focus();
            return;
        }
        if(passwordRef.current?.value ==="" ){
            alert("비밀번호를 입력하세요")
            passwordRef.current?.focus();
            return;
        }
        if(emailRef.current?.value !="d" ){
            alert("해당 이메일이 존재하지 않습니다.")
            emailRef.current?.focus();
            return;
        }
        if(passwordRef.current?.value !="d" ){
            alert("해당 비밀번호가 존재하지 않습니다.")
            passwordRef.current?.focus();
            return;
        }
        if(emailRef.current.value ==="d" && passwordRef.current.value ==="d"){
            alert("로그인 성공")
        }
        localStorage.setItem("email", emailRef.current.value ) ;
        setLogin(true) ;
        router.push("/");
        }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl mb-10">
            Sign in to your account
        </h1>
        <form className="max-w-sm mx-auto" >
        <div className="mb-5">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input  ref={emailRef} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input ref={passwordRef} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <button onClick={handleclick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
  )
}

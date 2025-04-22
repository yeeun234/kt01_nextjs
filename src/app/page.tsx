'use client' 
//ssr이라 서버에서 다 실행되는데 로컬스토리지는 서버에 없어서 오류가 남. 클라이언트에서 실행하라고 명령문써야함. use client를 제일 첫줄에 써야함.
import { useEffect, useState } from "react";
import Login from "@/components/Login";
import { IsLoginAtom } from "@/atoms/IsLoginAtom";
import { useAtom } from "jotai";
export default function Home() {
  const [isLogin,setLogin]=useAtom(IsLoginAtom);
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      setLogin(true);
    }
    setIsChecked(true);
  },[] );

  if (!isChecked) {
    return <div>Loading...</div> // temporary fallback
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
           { isLogin ? `${localStorage.getItem('email')}님이 로그인 하셨습니다. `:<Login/> } 
    </div>
  );
}

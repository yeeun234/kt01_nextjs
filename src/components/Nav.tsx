'use client'
import { IsLoginAtom } from '@/atoms/IsLoginAtom';
import { useAtom } from "jotai";
import Link from 'next/link';
import { useEffect } from "react";
import Image from 'next/image';
export default function Nav() {
  const [login, setLogin] = useAtom(IsLoginAtom);
  const handleclick = () => { 
    setLogin(false);
    localStorage.removeItem("email");

  }
  useEffect(() => {
    console.log("Login state changed:", login);
  }, [login]);
  
  return (
    <div className=" w-full min-h-20 bg-green-100 flex justify-around items-center">
        <div className='grid grid-cols-3 gap-3 place-content-center place-items-center'>
          <Image src="/react.svg" alt="react" width={42} height={42}/> + 
          <Image src="/next.svg" alt="react" width={42} height={42}/>
        </div>
        
        <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">
          <Link href="/">Home</Link>
        </div>
        <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">
          <Link href="/clock">시계</Link>
        </div>
        <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">
          <Link href="/lotto">로또</Link>
        </div>
        <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">
          <Link href="/food">푸드카드</Link>
        </div>
        <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">
          <Link href="/subway">지하철</Link>
        </div>
        {/* {login && <Link href="/TodoList">
        <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">TodoList</div>
        </Link>}
        {login && <Link href="/Subway">
        <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">Subway</div>
        </Link>}
        {login && <Link href="/MyClock">
        <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">MyClock</div>
        </Link>}
        {login && <Link href="/Lotto">
        <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">Lotto</div>
        </Link>}
        {login && <Link href="/FoodMain">
        <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">FoodMain</div> 
        </Link>}  */}
        { login ? <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center" onClick={handleclick}>Logout</div>
          : <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center" >Login</div>}
    </div>
  )
}

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
        <Link href="/">
          <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">
            Home
          </div>
        </Link>
        <Link href="/clock">
          <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">
            Clock
          </div>
        </Link>
        <Link href="/lotto">
          <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">
            Lotto
          </div>
        </Link>
        <Link href="/food">
          <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">
            FoodCard
          </div>
        </Link>
        <Link href="/subway">
          <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">
            Subway
          </div>
        </Link>
        <Link href="/productList">
          <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">
            Product List
          </div>
        </Link>
        <Link href="/productList2">
          <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">
            Product List2
          </div>
        </Link>
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

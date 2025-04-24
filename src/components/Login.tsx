'use client'
import { useRef } from "react"
import { useRouter } from "next/navigation"
import { useAtom } from "jotai"
import { IsLoginAtom } from "../atoms/IsLoginAtom"
import axios from "axios"

export default function Login() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [, setLogin] = useAtom(IsLoginAtom);

    const baseurl = "http://localhost:3000/api/user"; 

    const handleclick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const email = emailRef.current?.value || "";
        const pwd = passwordRef.current?.value || "";

        if (email === "") {
            alert("이메일을 입력하세요");
            emailRef.current?.focus();
            return;
        }
        if (pwd === "") {
            alert("비밀번호를 입력하세요");
            passwordRef.current?.focus();
            return;
        }

        try {
            // 실제 API 요청 (GET 방식, 필요에 따라 POST로 변경 가능)
            const response = await axios.get(`${baseurl}?id=${email}`);
            const user = response.data;

            if (!user) {
                alert("사용자가 존재하지 않습니다.");
                emailRef.current?.focus();
                return;
            }
            if (user.pwd !== pwd) {
                alert("비밀번호가 일치하지 않습니다.");
                passwordRef.current?.focus();
                return;
            }

            alert("로그인 성공");
            localStorage.setItem("email", email);
            setLogin(true);
            router.push("/");
        } catch (err: any) {
            if (err.response?.status === 404) {
                alert('존재하지 않는 사용자입니다.');
            } else {
                alert('로그인 중 오류가 발생했습니다.');
            }
        }
    }

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl mb-10">
                Sign in to your account
            </h1>
            <form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input ref={emailRef} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input ref={passwordRef} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button onClick={handleclick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

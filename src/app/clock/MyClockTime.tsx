'use client'
import { useState, useEffect } from "react";
import styles from "./MyClockTime.module.css"

interface CSSProperties  {
    fontWeight: string;
    fontSize: string;
}
function MyClockTime() {
    //useState type 선언
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    

    // const handleClick = ():void => {
    //     setCurrentTime(new Date());
    // }

    useEffect(()=>{
        const tm = setInterval(()=>{
            setCurrentTime(new Date())
        },1000);

        return () =>{
            clearInterval(tm);
        }
    },[]);
    
    const fontStyle : CSSProperties  = {
        fontWeight: 'bold',
        fontSize: '20px',
       
    }
    return(
        <div className={styles.pst}>
            <h1>현재시각은 <span style={fontStyle}>{currentTime.toLocaleTimeString()}</span> 입니다.</h1>
            {/* <TailButtonLine bgColor="orange" html="버튼" onClick={handleClick}></TailButtonLine> */}
        </div>
    )

}

export default MyClockTime;
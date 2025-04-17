import Image from "next/image";

function MyClockimage(){
    return (
        // <img src=".\img\clock.png" alt="시계 이미지" className="w-70 h-70 p-10"/>
        <Image src="/clock.png" alt="clock"  width={120} height={120} className="w-70 h-70 p-10"/> 
    );
}
export default MyClockimage;
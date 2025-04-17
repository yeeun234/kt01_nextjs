import MyClockimage from "./MyClockImage"
import MyClockTime from "./MyClockTime"

function MyClock () {
    
    return(
        <div className="h-full  flex flex-col justify-center items-center">
            <MyClockimage />
            <MyClockTime />
        </div>
    )

}

export default MyClock;
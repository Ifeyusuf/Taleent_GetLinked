import React, {useState, useEffect} from 'react';


const Timer = ({duration}) => {
    const [time, setTime] = useState(duration);

    useEffect( ()=>{
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000);
    },[time])
    
    const getFormatedTime= (milliseconds)=>{

        let totalSeconds= parseInt(Math.floor(milliseconds / 1000));
        let totalMinutes= parseInt(Math.floor(totalSeconds / 60));
        let totalHours= parseInt(Math.floor(totalMinutes / 60))
        // let days= parseInt(Math.floor(totalHours / 24));

        let seconds= parseInt(totalSeconds % 60);
        let minutes= parseInt(totalMinutes % 60);
        let hours= parseInt( totalHours % 24)
        return `  ${hours}: ${minutes}: ${seconds} `
        
    }
return (
    <div className='my-2 timer'>
    {getFormatedTime(time)}
    </div>
)
}

export default Timer

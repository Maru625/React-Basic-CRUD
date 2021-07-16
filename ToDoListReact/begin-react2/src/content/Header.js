import React, { useEffect, useState } from "react"

function dayOfWeek(day){
    switch (day){
        case 0:
            return "SUN";
        case 1:
            return "MON";
        case 2:
            return "THU";
        case 3:
            return "WED";
        case 4:
            return "THU";
        case 5:
            return "FRI";
        case 6:
            return "SET";
    }
}

const getDateString = (today) => {  
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    let seconds = today.getSeconds();  // 초
    const dayName = dayOfWeek(day);

    return `${month}월 ${date}일 ${dayName} ${hours}시 ${minutes}분 ${seconds}초`
}

function Header(){
    const [now, setNow] = useState(getDateString(new Date()));

    useEffect(() => {
        setInterval(()=> {
            setNow(getDateString(new Date()));
        }, 500);
    }, []);

    return(
        <>
        <h1 className="title"> *** 의 TO DO LIST</h1>
        <div className="time">
            <h2>{now}</h2>
        </div>
        
        </>
    )
}
export default Header
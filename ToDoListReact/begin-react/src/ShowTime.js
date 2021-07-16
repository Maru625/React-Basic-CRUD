import React from "react"

function DayOfWeek(day){
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

function ShowTime(){
    let today = new Date();   
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    let seconds = today.getSeconds();  // 초

    const dayName = DayOfWeek(day);
    return(
        <div>
            <h1>{month}/{date}</h1>
            <h2>{dayName}</h2>
            <h3>{hours}:{minutes}:{seconds}</h3>
        </div>
    )
}
export default ShowTime
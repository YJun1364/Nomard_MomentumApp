const clockContainer = document.querySelector(".js-clock"),
    innerDate = clockContainer.querySelector("#innerDate"),
    innerTime = clockContainer.querySelector("#innerTime");

function inputTime(timeObj){
    
    innerDate.innerHTML = `${timeObj.year}년 
        ${1+timeObj.month}월 
        ${timeObj.date<10 ? "0"+timeObj.date:timeObj.date}일`;
    
    innerTime.innerHTML = `${timeObj.hours}시
        ${timeObj.minutes<10 ? "0"+timeObj.minutes : timeObj.minutes}분
        ${timeObj.seconds<10 ? "0"+timeObj.seconds : timeObj.seconds}초`;
}
    
function getTime(){
    const newDate = new Date(),
    year = newDate.getFullYear(),
    month =  newDate.getMonth(),
    date = newDate.getDate(),
    hours = newDate.getHours(),
    minutes = newDate.getMinutes(),
    seconds = newDate.getSeconds(),
    timeObj = {
        year,
        month,
        date,
        hours,
        minutes,
        seconds
    }
    inputTime(timeObj);
}

function init(){
    setInterval(getTime,1000); // 인터벌 함수!
}

init();
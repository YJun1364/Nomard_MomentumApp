const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1")

function getTime() {
    const date = new Date(),
        hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    clockContainer.innerHTML = `${hours<10 ? `0${hours}` : hours}:
    ${minutes < 10 ? `0${minutes}` : minutes}: 
    ${seconds < 10 ? "0"+seconds : seconds}`; // 이렇게도 표현이 가능하네
}
function init() {
    setInterval(getTime, 1000);
}
init();
// so sexy expression
// 삼항 연산자 like small if

//  if(seconds<10){
//    clockContainer.innerHTML = `${hours}:${minutes}:0${seconds}`;
// }else{
// clockContainer.innerHTML = `${hours}:${minutes}:${seconds}`;
// }

// 위와 같은 역할을 수행한다. 

// ${seconds < 10 ? `0${seconds}` : seconds}`;
// ${a < 10 ? b : c} --> a가 10보다 작다 true = b / false = c 를 리턴한다.
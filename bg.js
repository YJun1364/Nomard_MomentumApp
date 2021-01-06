const body = document.querySelector("body"); //class = ".xxx" / id = "#xxx" / element = "xxx"
const IMG_NUM = 7;

function paintImage(randomNumber){
    const image = new Image();
    image.src = `images/${randomNumber}.jpg`
    image.classList.add("bgImage"); // class 에 bgImage 추가 
    body.appendChild(image);        // 이미지 추가 
}

function getRandomNumber(){
    const random =Math.floor(Math.random() * IMG_NUM);
    console.log(random);
    return random
}

function init(){
    const randomNumber = getRandomNumber();
    paintImage(randomNumber);
}

init();
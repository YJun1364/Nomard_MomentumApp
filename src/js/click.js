const click = document.querySelector("#js-greetings");

const CLICKED_CLASS = "clicked"

function handleClicked(){
    const hasClass = click.classList.contains("CLICKED_CLASS");
    click.classList.toggle(CLICKED_CLASS);
}

function init(){
    click.addEventListener("click",handleClicked);
}

init();
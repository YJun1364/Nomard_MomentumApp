const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"
let toDos = []; // 배열이 계속 바뀌기 때문에 let 으로 선언한다. 

function deletToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){ 
        return toDo.id !== parseInt(li.id); // 조건이 true 인것만 리턴한다.  
    }); //foreach처럼 array 의 모든 item을 필터링한다.
    console.log(toDos,cleanToDos)
    toDos = cleanToDos;
    saveToDo();
    //console.log(event.target.parentNode) -> event: 마우스 클릭 ,target : console.dir로 부모를 찾아냄, parentNode 
}

function saveToDo(text){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos))
}

function paintToDo(text) {
    const li = document.createElement("li"); // html 에서 element를 생성하는 메서드
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X"
    delBtn.addEventListener("click",deletToDo)
    const newId = toDos.length+1; 
    span.innerText = text;
    li.id = newId
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li)
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDo();
}

function handleSubmit(event) {
    event.preventDefault(); //기본 행동을 막는다.
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function something(toDo){
    paintToDo(toDo.text)
}
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos) //JSON = JS obj notaion
        parsedToDos.forEach(something);
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();
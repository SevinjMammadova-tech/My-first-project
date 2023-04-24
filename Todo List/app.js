const inp = document.querySelector("#inp");
const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");
const form = document.querySelector("form");

function addTodo(e){
    e.preventDefault();
    let newElement = document.createElement("li");
    newElement.classList.add("todos");
    newElement.textContent = inp.value;
    ul.appendChild(newElement);
    inp.value = "";
};
form.addEventListener("submit", addTodo);


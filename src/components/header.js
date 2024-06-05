import ToDosInitial from "../todoInitial";
import ToDoObject from "../todoObject";
import { toDoStructure } from "../utility/todoStructure/todoStructureUtil";
import popupForm from "./popupForm";
import { addInitialToDos } from "./todos";

const HEADER_CONTAINER = ".header-container";
const PLACEHOLDER = "Filter..";

export const Header = () => {
  const headerContainer = document.querySelector(HEADER_CONTAINER);

  renderText(headerContainer);
  renderImportant(headerContainer);
  renderAddButton(headerContainer);
  addToDo();
};

function renderText(headerContainer) {
  const inputTextField = document.createElement("input");
  inputTextField.classList.add("text-input");
  inputTextField.setAttribute("type", "text");
  inputTextField.setAttribute("placeholder", PLACEHOLDER);
  headerContainer.appendChild(inputTextField);

  return headerContainer;
}

function renderImportant(headerContainer) {
  //create container

  const importantContainer = document.createElement("div");
  importantContainer.classList.add("important-container");

  //create important text box
  const inputCheckField = document.createElement("input");
  inputCheckField.setAttribute("type", "checkbox");
  inputCheckField.classList.add("check-input");

  //create important label
  const inputCheckLabel = document.createElement("p");
  inputCheckLabel.textContent = "Important";

  importantContainer.appendChild(inputCheckField);
  importantContainer.appendChild(inputCheckLabel);

  headerContainer.appendChild(importantContainer);
  return headerContainer;
}

function renderAddButton(headerContainer) {
  const addButon = document.createElement("button");
  addButon.classList.add("add-button");
  addButon.textContent = "Add";

  headerContainer.appendChild(addButon);
  return headerContainer;
}

function addToDo() {
  const container = document.querySelector(".container");
  const popupContainer = document.createElement("div");
  popupContainer.classList.add("popup-form");
  document.querySelector(".main").appendChild(popupContainer);
  popupForm(popupContainer);
  document.querySelector(".add-button").addEventListener("click", () => {
    popupContainer.style.display = "grid";
    container.style.display = "none";
    // popupForm(popupContainer);
  });

  document.querySelector(".done-button").addEventListener("click", (event) => {
    event.preventDefault();
    popupContainer.style.display = "none";
    container.style.display = "grid";

    let todo = getValuesFromFields(
      ".title-input",
      ".desc-input",
      ".date-input",
      ".important-input"
    );
    ToDosInitial.push(todo);

    let toDosContainer = document.querySelector(".todos-container");
    let card = toDoStructure(
      todo.title,
      todo.description,
      todo.dueDate,
      todo.priority
    );
    toDosContainer.appendChild(card);
  });

  document
    .querySelector(".cancel-button")
    .addEventListener("click", (event) => {
      event.preventDefault();
      if (confirm("Are you sure you want to cancel?")) {
        popupContainer.style.display = "none";
        container.style.display = "grid";
        // popupContainer.innerHTML = "";
      } else {
        // event.preventDefault();
        popupContainer.style.display = "block";
        container.style.display = "none";
      }
    });

  // document.addEventListener('click',(event) => {
  //     event.preventDefault();
  //     let tar = event.target;

  //     if(tar.classList.contains('done-button')){
  //         console.log("todos arr: "+ ToDosInitial);

  // let todo = getValuesFromFields('.title-input','.desc-input','.date-input','.important-input');
  // ToDosInitial.push(todo);
  // let card = toDoStructure(todo.title,todo.description,todo.dueDate,todo.priority);
  // const toDosContainer = document.querySelector('.todos-container');
  // toDosContainer.appendChild(card);
  // popupContainer.style.display = 'none';
  // container.style.display = 'grid';
  // popupContainer.innerHTML = "";
  // addInitialToDos();

  // }
  //     else if(tar.classList.contains('cancel-button')){
  // if(confirm("Are you sure you want to cancel?")){
  //     popupContainer.style.display = 'none';
  //     container.style.display = 'grid';
  //     popupContainer.innerHTML = "";
  // }
  // else{
  //     event.preventDefault();
  //     popupContainer.style.display = 'block';
  //     container.style.display = 'none';

  // }

  //     }
  // })

  // document.querySelector('.done-button').addEventListener('click',(event)=>{
  //     event.preventDefault();
  //     popup.style.display = 'none';
  //     container.style.display = 'grid';

  //     let todo = getValuesFromFields('.title-input','.desc-input','.date-input','.important-input');
  //     ToDosInitial.push(todo);
  //     let card = toDoStructure(todo.title,todo.description,todo.dueDate,todo.priority);
  //     const toDosContainer = document.querySelector('.todos-container');
  //     toDosContainer.appendChild(card);
  // });

  // document.querySelector('.cancel-button').addEventListener('click',(event)=>{
  // if(confirm("Are you sure you want to cancel?")){
  //     popup.style.display = 'none';
  //     container.style.display = 'grid';
  // }
  // else{
  //     event.preventDefault();
  //     popup.style.display = 'block';
  //     container.style.display = 'none';
  // }
  // });
}

function getValuesFromFields(titleInp, descInp, dateInp, importantInp) {
  let title = document.querySelector(titleInp).value;
  let desc = document.querySelector(descInp).value;
  let date = document.querySelector(dateInp).value;
  let important = document.querySelector(importantInp).checked;
  console.log("Important?? : " + important);
  if (important) important = "Yes";
  else important = "No";
  return new ToDoObject(title, desc, date, important);
}

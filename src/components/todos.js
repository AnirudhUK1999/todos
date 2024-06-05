import ToDosInitial from "../todoInitial";
import { toDoStructure } from "../utility/todoStructure/todoStructureUtil";
import popupForm from "./popupForm";
import { format, toDate } from "date-fns";


export const Todos = () => {
    addInitialToDos();
    modifyToDoCards();
}

export function addInitialToDos(){
   const contentContainer = document.querySelector('.content-container');
   const toDosContainer = document.createElement('div');
   toDosContainer.classList.add('todos-container')

//    console.log("TODO: "+ToDosInitial);
   
   ToDosInitial.forEach((element)=> {
    let card = toDoStructure(element.title,
        element.description,element.dueDate,
        element.priority);
    toDosContainer.appendChild(card);
   })
   contentContainer.appendChild(toDosContainer);
}

function modifyToDoCards(){
    // Delete
    // change
    changeToDo();
    // View
    deleteToDo();
}

function changeToDo(){
    document.addEventListener('DOMNodeInserted', () => {
        let edits = document.querySelectorAll('.edit-icon');
        edits.forEach((edit,i) => edit.addEventListener('click', (event)=>{
            event.preventDefault();
            let popup = document.querySelector('.popup-form');
            const container = document.querySelector('.container');
            popup.style.display = 'block';
            container.style.display = 'none';
            popupFillValues(ToDosInitial[i].title,ToDosInitial[i].description,
                ToDosInitial[i].dueDate,ToDosInitial[i].priority);
            ToDosInitial.splice(i,1);
            console.log(document.querySelector(`.todo-card:nth-child(${i})`));
            document.querySelectorAll('.todo-card')[i].remove();
            // document.querySelector(`.todo-card:nth-child(${i})`).remove();
            // console.log(ToDosInitial[i]);
            // document.querySelector('.title-input').value = "XXXXXDDDDDD";
            // b.textContent = ToDosInitial[i].title;
            // console.log("HEREEE "+ToDosInitial[i].title);
            // console.log(a.querySelector('.card-title') = ToDosInitial[i].title);
            // a.querySelector('.card-title') = ToDosInitial[i].title;
            // let popupContainer = document.querySelector('.popup-form');
            
            // popupForm(popupContainer,ToDosInitial[i].title,ToDosInitial[i].description,
            //     ToDosInitial[i].dueDate,ToDosInitial[i].priority);
        }))
    })
    
}

function deleteToDo(){
    document.addEventListener('DOMNodeInserted', () => {
        let deletes = document.querySelectorAll('.del-icon');
        // console.log("Dels before "+deletes);
        deletes.forEach((del,indx) => del.addEventListener('click', () => {
            if(confirm("Are you sure you want to delete?")){
                document.querySelectorAll('.todo-card')[indx].remove();
                ToDosInitial.splice(indx,1);

                // ToDosInitial
            }
        }))
    })
}

function popupFillValues(title,desc,date,prio){
    let titleFill = document.querySelector('.title-input')
    titleFill.value = title;
    let descFill = document.querySelector('.desc-input')
    descFill.value = desc;
    let dateFill = document.querySelector('.date-input');
    console.log(converToDDMMYY(date).toString());
    dateFill.value = converToDDMMYY(date).toString();
    let prioFill = document.querySelector('.important-input')
    if(prio.toUpperCase() == "Yes".toUpperCase())
        prioFill.checked = true;
}

function converToDDMMYY(curr){
    // console.log(toDate(curr));
    return format(toDate(curr),`yyyy-LL-dd`);
}


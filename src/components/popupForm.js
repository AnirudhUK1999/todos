import { createButton, createInputFields } from "../utility/popupForm/popupFormUtil";

export default function popupForm(popupContainer){
    // const popup = document.querySelector('.popup-form');
    // const container = document.querySelector('.container');
    // popup.style.display = 'block';
    // container.style.display = 'none';
    renderToDoForm(popupContainer);
}

function renderToDoForm(popupContainer){

    const dummyContainer = document.createElement('div');
    dummyContainer.classList.add('dummy-container');

    const addToDoContainer = document.createElement('form');
    addToDoContainer.classList.add('form-container');

    let label;
    let input;

    createInputFields(label,input,'title-label',
        'title-input','Title','text',addToDoContainer);

  
    createInputFields(label,input,'desc-label',
        'desc-input','Description','text',addToDoContainer);
    
    createInputFields(label,input,'date-label',
        'date-input','Due Date','date',addToDoContainer);
    

    createInputFields(label,input,'important-label',
        'important-input','Important','checkbox',addToDoContainer);
    

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');
    
    createButton(label,input,'cancel-label','cancel-button',"Cancel",buttonsContainer)

    createButton(label,input,'done-label','done-button',"Done",buttonsContainer)

    addToDoContainer.appendChild(buttonsContainer);
    dummyContainer.appendChild(addToDoContainer);
    popupContainer.appendChild(dummyContainer);
}


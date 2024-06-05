export function createInputFields(labelName,labelInput,class1,class2,textContent,inputType,addToDoContainer){

    labelName = document.createElement('label');
    labelName.classList.add(class1);
    labelName.textContent = textContent;
    labelInput = document.createElement('input');
    labelInput.classList.add(class2);
    labelInput.setAttribute('type',inputType);
    addToDoContainer.appendChild(labelName);
    addToDoContainer.appendChild(labelInput);

}

export function createButton(label,button,class1,class2,text,buttonsContainer){
    label = document.createElement('div');
    label.classList.add(class1);
    button = document.createElement('button');
    button.classList.add(class2);
    button.textContent = text;
    label.appendChild(button);
    buttonsContainer.appendChild(label);
}
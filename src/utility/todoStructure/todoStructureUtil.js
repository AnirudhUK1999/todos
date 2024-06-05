export function toDoStructure(title, description, dueDate, priority) {
  const card = document.createElement("div");
  card.classList.add("todo-card");

  const toDoCardContent = document.createElement("div");
  toDoCardContent.classList.add("todo-card-content");

  const divTitle = document.createElement("div");
  divTitle.classList.add("card-title");
  divTitle.textContent = title;
  toDoCardContent.appendChild(divTitle);

  const divDesc = document.createElement("div");
  divDesc.classList.add("card-desc");
  divDesc.textContent = description;
  toDoCardContent.appendChild(divDesc);

  const divDueDate = document.createElement("div");
  divDueDate.classList.add("card-due-date");
  divDueDate.textContent = "Due on: " + dueDate;
  toDoCardContent.append(divDueDate);

  const divPriority = document.createElement("div");
  divPriority.classList.add("card-priority");
  divPriority.textContent = "Priority: " + priority;
  toDoCardContent.append(divPriority);

  card.appendChild(toDoCardContent);

  const toDoIconsContainer = document.createElement("div");
  toDoIconsContainer.classList.add("todo-icons-container");

  const delIcon = document.createElement("img");
  delIcon.classList.add("icon", "del-icon");
  delIcon.setAttribute("src", "../src/icons/delete.svg");
  toDoIconsContainer.appendChild(delIcon);

  const editIcon = document.createElement("img");
  editIcon.classList.add("icon", "edit-icon");
  editIcon.setAttribute("src", "../src/icons/edit.svg");
  toDoIconsContainer.appendChild(editIcon);

  const openIcon = document.createElement("img");
  openIcon.classList.add("icon", "open-icon");
  openIcon.setAttribute("src", "../src/icons/open.svg");
  toDoIconsContainer.appendChild(openIcon);

  card.appendChild(toDoIconsContainer);
  return card;
}

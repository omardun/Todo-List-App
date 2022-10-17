let taskInput = document.getElementById("new-task");                      
let addButton = document.getElementsByTagName("button")[0];               
let incompleteTasksHolder = document.getElementById("incomplete-tasks"); 
let completedTasksHolder = document.getElementById("completed-tasks");


let createNewTaskElement = function(taskString) {
    let listItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");
    let deleteButton = document.createElement("button");
  
    checkBox.type = "checkbox";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    label.innerText = taskString;
  
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
  
    return listItem;
  };
  let addTask = function() {
    let listItemName = taskInput.value || "New Item";
    let listItem = createNewTaskElement(listItemName);
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);         
    taskInput.value = "";                              
  };
  let deleteTask = function() {   
    let listItem = this.parentNode; 
    let ul = listItem.parentNode;    
    ul.removeChild(listItem);        
  };
  
  let taskCompleted = function() {
    let listItem = this.parentNode;             
    completedTasksHolder.appendChild(listItem);  
    bindTaskEvents(listItem, taskIncomplete);    
  };

  let taskIncomplete = function() {
    let listItem = this.parentNode;              
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);      
  };
  let bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    let checkBox = taskListItem.querySelector("input[type=checkbox]");
    let deleteButton = taskListItem.querySelector("button.delete");     
    deleteButton.onclick = deleteTask;                                 
    checkBox.onchange = checkBoxEventHandler;                           
  };

  let ajaxRequest = function() {
    console.log("AJAX request");
  };
  
  addButton.addEventListener("click", addTask);     
  addButton.addEventListener("click", ajaxRequest);  

  for(let i = 0; i < incompleteTasksHolder.children.length; i++) {   
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);  
  }
  
  for(let i = 0; i < completedTasksHolder.children.length; i++) { 
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);   
  }
    

import { taskAddBtn, addTaskInput, addTaskDesc, dateBtn, priorityBtn, tasksLi, addTaskDiv, emptyDiv } from "./home";
import { Tasks, createTask } from "./tasks";
import * as url from './images/check-mark.png';
import { clearsTask, deleteTasks} from "./clearTask";
// import Tasks from "./tasks";

// Variable that holds the all the check buttons for the task 
let clearTask = document.querySelectorAll(".check-btn");

// Enables the add task button soon as something is input in the title of the task and vice versa
function checkInput(){
   if(addTaskInput.value !== ""){
        taskAddBtn.classList.remove("task-add-disable");
        taskAddBtn.classList.add("task-add-active");
   }else if(addTaskInput.value === ""){
    taskAddBtn.classList.add("task-add-disable");
    taskAddBtn.classList.remove("task-add-active");
   }
};


// Generates tasks by taking input from all input areas
function generateTasks(){
   let rand = Date.now();
   let obj = createTask(addTaskInput.value, addTaskDesc.value, dateBtn.value,priorityBtn.value, rand);
   return obj;
}


// --------------------------------------------------------
function appendTask(taskObj){
   //CREATING THE CHECK MARK BUTTON
   let checkBtn = document.createElement("BUTTON");
   checkBtn.classList.add("check-btn");
   if(taskObj.priority == "High Priority"){
      checkBtn.style.border = "1px solid red";
   }else if (taskObj.priority == "Medium Priority"){
      checkBtn.style.border = "1px solid blue";
   }else if(taskObj.priority == "Low Priority"){
      checkBtn.style.border = "1px solid green";
   }
   let checkSpan = document.createElement("SPAN");
   checkSpan.classList.add("check-mark-span");
   let checkImage = document.createElement("IMG");
   checkImage.src = url.default;
   checkImage.alt = "check-mark-image";
   checkImage.classList.add("check-mark-image");
   checkSpan.appendChild(checkImage);
   checkBtn.appendChild(checkSpan);
   
   // Creating the Task title, description, Date, priority
   let taskToAdd = document.createElement("LI");
   taskToAdd.setAttribute("data-task-number", `task${taskObj.uid}`);
   let taskContainerSpan = document.createElement("span");
   taskContainerSpan.classList.add("task-sections");
   let taskTitle = document.createElement("h1");
   let taskDesc = document.createElement("h2");
   let taskDate = document.createElement("h3");
   
   taskTitle.textContent = taskObj.title;
   taskDesc.textContent = taskObj.description;
   taskDate.textContent = taskObj.date;
   taskToAdd.appendChild(checkBtn);
   taskContainerSpan.append(taskTitle, taskDesc);
   taskToAdd.appendChild(taskContainerSpan);
   
   tasksLi.appendChild(taskToAdd);
   addTaskDesc.value ="";
   addTaskInput.value ="";
   
   // Updates the nodelist clearTask everytime a task is created and adds the eventlistener to all of them
   clearTask = document.querySelectorAll(".check-btn");
   clearTask.forEach(ele=>ele.addEventListener("click",clearsTask));
}
// --------------------------------------------------------

// Stores each task in localstorage

function storeTask(){
   let newTask = generateTasks();
   localStorage.setItem(`task${newTask.uid}`,JSON.stringify(newTask));
   appendTask(newTask);
}

// Loads tasks on windows load
function loadTask(){

   // Get all keys from localStorage
   let taskKeys = [];
   
   for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
        
      // Only process keys that match your pattern
      if (key.startsWith('task')) {
         taskKeys.push(key);
        }
   }
   // Sorts the task keys before loading them in so the tasks are always in the order that the user put them in
   taskKeys.sort((a, b) => {
    const numA = parseInt(a.replace('task', ''));
    const numB = parseInt(b.replace('task', ''));
    return numA - numB;
   });
   
   for(const key of taskKeys){
      const storedData = localStorage.getItem(key);
          
      try{
         const taskObject = JSON.parse(storedData);
         appendTask(taskObject);
      } catch (error) {
         console.error('Error parsing stored data for key:', key, error);
      }  
   }
}




addTaskInput.addEventListener("keyup", checkInput);
taskAddBtn.addEventListener("click", storeTask);
window.onload = loadTask();

export { clearTask }
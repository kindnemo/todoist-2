import { addTaskDiv, emptyDiv} from "./home";

// Deletes the task 
function deleteTasks(eve){
    console.log("works");
    if(eve.propertyName.includes("transform")){
        let task = eve.target.closest("li");
        let  TaskNumber = task.getAttribute("data-task-number");
        
        // Removes the task from the dom tree
        eve.target.closest("li").remove();

        // Removes the task object from local Storage
        localStorage.removeItem(TaskNumber);
    }
    
    if(tasks.innerHTML == "" && addTaskDiv.classList.contains("display-toggle")==true){
        emptyDiv.classList.remove("display-toggle");
    }
}

// Maps the delete function to check button in the tasks
function clearsTask(eve){
    const button = eve.target.closest("button");

    // Add the transitionend listener once
    button.addEventListener("transitionend", deleteTasks, { once: true });

    // Toggle the animation class
    button.classList.toggle("check-btn-active");
}

export {clearsTask, deleteTasks,}
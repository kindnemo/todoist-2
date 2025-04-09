const contentDiv = document.getElementById("content");
const homeBtn = document.getElementById("home-btn");


// Generates The Homepage
function generate_home(){
    // IMAGES 
    // import addSVGImg from "./images/undraw_to_do_re_jaef dark.svg"

    
    const taskDiv = document.createElement("div");
    const mainUi = document.createElement("div");
    const dateDiv = document.createElement("div");
    const todayh1 = document.createElement("h1");
    const dateSpan = document.createElement("span");
    const tasksLi = document.createElement("ul");
    const taskAddForm = document.createElement("div");
    const addTaskDiv = document.createElement("div");
    const addTaskInput = document.createElement("input");
    const addTaskDesc = document.createElement("textarea")
    const dateBtn = document.createElement("input");
    const priorityBtnLi = ["High Priority", "Medium Priority", "Low Priority", "Regular Priority"];
    const priorityBtn = document.createElement("select");
    const finalBtnsDiv = document.createElement("div");
    const taskAddBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
    const listTaskDiv = document.createElement("div");
    const addBtnIcn = document.createElement("span");
    const addTaskText = document.createElement("span");
    const emptyDivContainer = document.createElement("div");
    const emptyDiv = document.createElement("div");
    const taskSVG = document.createElement("img");
    const emptyPara = document.createElement("p");
    const finalBtn = document.createElement("button");
    const date = new Date();

    taskDiv.setAttribute("id", "task-div");
    
    mainUi.setAttribute("id", "main-ui");

    dateDiv.setAttribute("id", "date-div");
    
    todayh1.setAttribute("id", "today");
    
    dateSpan.setAttribute("id", "date");

    tasksLi.setAttribute("id", "tasks");
    
    // taskAddForm.setAttribute("id", "display-toggle");
    
    addTaskDiv.setAttribute("id", "add-task-div");
    addTaskDiv.setAttribute("class", "display-toggle");
    
    addTaskInput.setAttribute("id", "add-task-input");
    addTaskInput.setAttribute("type", "text");
    addTaskInput.setAttribute("cols", "30");
    addTaskInput.setAttribute("rows", "10");
    addTaskInput.setAttribute("placeholder", "Add a task here");

    
    addTaskDesc.setAttribute("id", "add-task-desc");
    addTaskDesc.setAttribute("placeholder", "Enter Description")

    dateBtn.setAttribute("type", "date");
    dateBtn.setAttribute("class", "form-util-btns");
    dateBtn.setAttribute("id", "task-date");
    dateBtn.setAttribute("name", "task-date");
    dateBtn.valueAsDate = new Date();

    // MAKING PRIORITY SELECT LIST
    priorityBtn.id = "priority-list"
    priorityBtn.setAttribute("class", "form-util-btns");
    for (let i = 0; i< priorityBtnLi.length; i++){
        let option = document.createElement("option");
        option.value = priorityBtnLi[i];
        option.text = priorityBtnLi[i];
        if(option.value == "Regular Priority"){
            option.setAttribute("selected", "selected");
        }
        priorityBtn.appendChild(option);       
    }

    finalBtnsDiv.setAttribute("id", "final-btns");
    
    taskAddBtn.setAttribute("id", "task-add");
    taskAddBtn.setAttribute("class", "final-btn btn task-add-disable");
    
    cancelBtn.setAttribute("id", "cancel");
    cancelBtn.setAttribute("class", "final-btn btn");
    
    listTaskDiv.setAttribute("id", "list-task-add-btn");
    listTaskDiv.setAttribute("class", "btn task-add-btn task-add-btns");
    
    addBtnIcn.setAttribute("id", "final-add-btn");
    addBtnIcn.setAttribute("class", "add-task material-icons");
    addBtnIcn.innerText = "add";

    addTaskText.setAttribute("id", "add-task-text");

    
    emptyDivContainer.setAttribute("id", "empty-div");
    
    emptyDiv.setAttribute("id", "empty");
    
    taskSVG.setAttribute("id", "empty-svg");
    taskSVG.setAttribute("src", "src/images/undraw_to_do_re_jaef dark.svg");
    
    emptyPara.setAttribute("id", "empty-para");
    
    finalBtn.setAttribute("id", "empty-add");
    finalBtn.setAttribute("class", "final-btn btn add-task task-add-btn btn");


    // Adding Text Content

    todayh1.textContent = "Today";
    dateSpan.textContent = `${date.toDateString()}`;
    taskAddBtn.textContent = "Add Task";
    cancelBtn.textContent = "Cancel";
    addTaskText.textContent = "Add Task"
    emptyPara.textContent = "What tasks are on your mind?"

    // date div
    dateDiv.append(todayh1, dateSpan);

    // Task Add Form 
    listTaskDiv.append(addBtnIcn, addTaskText);
    finalBtnsDiv.append(taskAddBtn, cancelBtn);
    addTaskDiv.append(addTaskInput, addTaskDesc, dateBtn, priorityBtn, finalBtnsDiv);
    taskAddForm.append(addTaskDiv, listTaskDiv);

    // main ui
    mainUi.append(dateDiv, tasksLi, taskAddForm);



    // empty div
    emptyDiv.append(taskSVG, emptyPara, finalBtn);


    // Task div
    taskDiv.append(mainUi, emptyDivContainer);
    contentDiv.append(taskDiv);
};

window.onload = generate_home;


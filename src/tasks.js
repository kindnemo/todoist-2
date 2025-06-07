// export default Tasks

class Tasks {
    constructor(title, description, date, priority, uid){
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.uid = uid;
    };
};

// Creates new task class on task add button 
function createTask(title, description, date, priority, uid){
    let task = new Tasks(title, description, date, priority, uid);
    return task
};


// DETECTS WHETHER LOCAL STORAGE IS AVAILABLE AND SUPPORTED
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

// Exporting Function and classes
export{Tasks, createTask}
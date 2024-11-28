const greeting = "Hallo";

function createToDo(toDoTitle, toDoDesc, toDoDate, toDoPriority, toDoNotes){
    const title = toDoTitle;
    const desc = toDoDesc;
    const date = toDoDate;
    const priority = toDoPriority;
    const notes = toDoNotes;

    return {title, desc, date, priority, notes};
}

const projectList = [];

function createProject(projectName){
    const name = projectName;
    return {name};
}

function addToDoToProject(projectIndex, newToDo, newToDoTitle){
    projectList[projectIndex][newToDoTitle] = newToDo;
    console.log("pushed to project " + projectIndex);
}

export {greeting, projectList, createProject, createToDo, addToDoToProject};

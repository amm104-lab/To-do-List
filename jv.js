function createToDo(toDoTitle, toDoDesc, toDoDate, toDoPriority, toDoNotes){
    const title = toDoTitle;
    const desc = toDoDesc;
    const date = toDoDate;
    const priority = toDoPriority;
    const notes = toDoNotes;

    return {title, desc, date, priority, notes}
}

const projectList = [];

function createProject(projectName){
    const name = projectName;
    const toDo = [];
    const addToDoToProject = (newToDo) => {
        toDo.push(newToDo);
    }
    return {
        name,
        toDo,
        addToDoToProject
    }
}

function editToDo(i,j){
    let key = prompt("What do you want to edit?");
    switch(key.toLowerCase()){
        case "title":
        case "t":
            let inputTitle = prompt("Please choose new title")
            projectList[i].toDo[j].title = inputTitle;
            break;

        case "description" :
        case "desc":
        case"d":
            let inputDesc = prompt("Please choose new Description")
            projectList[i].toDo[j].desc = inputDesc;
            break;

        case "date":
        case "due date":
        case "duedate":
        case "dd":
            let inputDate = prompt("Please choose new due Date")
            projectList[i].toDo[j].date = inputDate;
            break;

        case "priority":
        case "prio":
        case "p":
            let inputPriority = prompt("Please choose new Priority")
            projectList[i].toDo[j].priority = inputPriority;
            break;

        case "notes":
        case "note":
        case "n":
            let inputNotes = prompt("Please choose new Note")
            projectList[i].toDo[j].notes = inputNotes;
            break;
    }
}

function addContent(i, j){
    return `Title: ${projectList[i].toDo[j].title} 
    
            Description: ${projectList[i].toDo[j].desc}
            
            Due Date: ${projectList[i].toDo[j].date}
            
            Priority: ${projectList[i].toDo[j].priority}
            
            Notes: ${projectList[i].toDo[j].notes}
            
            `;
}

function deleteChildren(parent){
    let e = document.querySelector(`${parent}`);
    let child = e.lastElementChild;

    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

export {
    projectList,
    createProject,
    createToDo,
    editToDo,
    addContent,
    deleteChildren
};

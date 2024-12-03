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


export {
    projectList,
    createProject,
    createToDo
};

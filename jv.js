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
    const toDo = [];
    // const addToDoToProject = (projectIndex, newToDo) => { .toDo.push(newToDo)
    //     console.log("pushed to project " + projectIndex);}
    const addToDoToProject = (newToDo) => {
        toDo.push(newToDo);
    }
    return {
        name,
        toDo,
        addToDoToProject
    };
}



export {
    greeting,
    projectList,
    createProject,
    createToDo
};

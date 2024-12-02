import {
    greeting,
    projectList,
    createProject,
    createToDo,
    // addToDoToProject
} from "./jv.js";

console.log(greeting);


const projectDiv = document.querySelector("div");
const showBtn = document.querySelector(".show");
const createProjectBtn = document.querySelector(".project");
const createToDoBtn = document.querySelector(".todo");


showBtn.addEventListener("click", () => {
    console.log(projectList);
})

createProjectBtn.addEventListener("click", () => {
    // const trial = createProject("Trial");
    // projectList.push(trial);
    createProjectDialog();
    updateDisplay();
})

createToDoBtn.addEventListener("click", () => {
    createToDoDialog();
    // projectList[0].todo = createToDo(
    //     "say Hi",
    //     "i wanna say hi",
    //     "today",
    //     "high",
    //     "i just really wanna say hi");
})


function updateDisplay() {
    deleteChildren("div");

    for(let i = 0; i < projectList.length; i++){
        let project = document.createElement("div");
        project.setAttribute("class", "project");
        project.setAttribute("data-index", `${i}`);
        project.textContent = projectList[i].name;
        projectDiv.appendChild(project);

        for(let j = 0; j < projectList[i].toDo.length; j++){

                let toDo = document.createElement("div");
                toDo.setAttribute("class", "toDiv");
                toDo.textContent = `${addContent(i, j)}`;
                project.appendChild(toDo);
            }
        // for(let todo of Object.keys(projectList[i])){
        //     console.log(todo);
        //
        //
        //     // toDo.textContent = `${todo}`;
        //     // project.appendChild(toDo);
        // }
        /*for(let Project in Object.keys(projectList)){
            console.log("second loop started")
            console.log(Project)
            for(let todo in projectList[project]){
                console.log("third loop started")
                console.log(todo)
                for(let key in projectList[project][todo]){
                    console.log("fourth loop started")
                    console.log(key)
                    let toDo = document.createElement("div");
                    toDo.setAttribute("class", "toDo");
                    toDo.textContent = addContent(i, key, "help");
                    project.appendChild(toDo);
                    console.log(key);
                    console.log(todo);
            }
        }}*/
    }
}

function addContent(i, j){
    return `Title: ${projectList[i].toDo[j].title} 
            Description: ${projectList[i].toDo[j].desc}
            Due Date: ${projectList[i].toDo[j].date}
            Priority: ${projectList[i].toDo[j].priority}
            Notes: ${projectList[i].toDo[j].notes}
            `;
    // for(let key of Object.keys(projectList[i].toDo)){
    //     switch (key){
    //         case "title":
    //             return `Title: ${projectList[i].toDo.title}`
    //         case "desc":
    //             return `Description: ${projectList[i].toDo.desc}`
    //         case "date":
    //             return `Due Date: ${projectList[i].toDo.date}`
    //         case "priority":
    //             return `Priority: ${projectList[i].toDo.priority}`
    //         case "notes":
    //             return `Notes: ${projectList[i].toDo.notes}`
    //     }
    // }
}

function deleteChildren(parent){
    let e = document.querySelector(`${parent}`);
    let child = e.lastElementChild;

    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

function createToDoDialog(){

    const dialogToDo = document.createElement("dialog");
    dialogToDo.classList.add("newToDo");
    let project = document.querySelector(".project");
    project.appendChild(dialogToDo);

    const form = document.createElement("form");
    form.setAttribute("method", "dialogToDo");
    dialogToDo.appendChild(form);



    const titleFormLabel = document.createElement("label");
    titleFormLabel.setAttribute("for", "titleFormLabel");
    titleFormLabel.textContent = "Title";
    form.appendChild(titleFormLabel);

    const titleForm = document.createElement("input");
    titleForm.setAttribute("type", "text");
    titleForm.setAttribute("class", "titleForm");
    titleForm.setAttribute("name", "titleForm");
    form.appendChild(titleForm);


    const descFormLabel = document.createElement("label");
    descFormLabel.setAttribute("for", "descForm");
    descFormLabel.textContent = "Description";
    form.appendChild(descFormLabel);

    const descForm = document.createElement("input");
    descForm.setAttribute("type", "text");
    descForm.setAttribute("class", "descForm");
    descForm.setAttribute("name", "descForm");
    form.appendChild(descForm);


    const dateFormLabel = document.createElement("label");
    dateFormLabel.setAttribute("for", "dateForm");
    dateFormLabel.textContent = "Due Date";
    form.appendChild(dateFormLabel);

    const dateForm = document.createElement("input");
    dateForm.setAttribute("type", "text");
    dateForm.setAttribute("class", "dateForm");
    dateForm.setAttribute("name", "dateForm");
    form.appendChild(dateForm);


    const priorityFormLabel = document.createElement("label");
    priorityFormLabel.setAttribute("for", "priorityForm");
    priorityFormLabel.textContent = "Priority";
    form.appendChild(priorityFormLabel);

    const priorityForm = document.createElement("input");
    priorityForm.setAttribute("type", "text");
    priorityForm.setAttribute("class", "priorityForm");
    priorityForm.setAttribute("name", "priorityForm");
    form.appendChild(priorityForm);


    const notesFormLabel = document.createElement("label");
    notesFormLabel.setAttribute("for", "notesForm");
    notesFormLabel.textContent = "Notes";
    form.appendChild(notesFormLabel);

    const notesForm = document.createElement("input");
    notesForm.setAttribute("type", "text");
    notesForm.setAttribute("class", "notesForm");
    notesForm.setAttribute("name", "notesForm");
    form.appendChild(notesForm);

    const cancelBtn = document.createElement("button");
    cancelBtn.setAttribute("type","reset");
    cancelBtn.setAttribute("class", "cancel");
    cancelBtn.textContent = "Clear all";
    form.appendChild(cancelBtn);

    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("class", "submit");
    submitBtn.textContent = "Submit";
    form.appendChild(submitBtn);


    dialogToDo.showModal();

    submitBtn.addEventListener("click", () => {
        const newToDo = createToDo(titleForm.value, descForm.value, dateForm.value, priorityForm.value, notesForm.value);
        deleteChildren(".project")
        projectList[0].addToDoToProject(newToDo);
        updateDisplay();
    })

}

function createProjectDialog(){
    const dialogProject = document.createElement("dialog");
    dialogProject.classList.add("newToDo");
    let project = document.querySelector(".project");
    project.appendChild(dialogProject);

    const formProject = document.createElement("form");
    formProject.setAttribute("method", "dialogProject");
    dialogProject.appendChild(formProject);


    const titleProjectFormLabel = document.createElement("label");
    titleProjectFormLabel.setAttribute("for", "titleProjectFormLabel");
    titleProjectFormLabel.textContent = "Project Title";
    formProject.appendChild(titleProjectFormLabel);

    const titleProjectForm = document.createElement("input");
    titleProjectForm.setAttribute("type", "text");
    titleProjectForm.setAttribute("class", "titleProjectForm");
    titleProjectForm.setAttribute("name", "titleProjectForm");
    formProject.appendChild(titleProjectForm);

    const cancelProjectBtn = document.createElement("button");
    cancelProjectBtn.setAttribute("type","reset");
    cancelProjectBtn.setAttribute("class", "cancel");
    cancelProjectBtn.textContent = "Clear all";
    formProject.appendChild(cancelProjectBtn);

    const submitProjectBtn = document.createElement("button");
    submitProjectBtn.setAttribute("class", "submit");
    submitProjectBtn.textContent = "Submit";
    formProject.appendChild(submitProjectBtn);


    dialogProject.showModal();

    submitProjectBtn.addEventListener("click", () => {
        deleteChildren(".project");
        const newProject = createProject(titleProjectForm.value);
        projectList.push(newProject);
        updateDisplay();
    })

}
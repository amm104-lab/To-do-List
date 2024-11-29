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
    const trial = createProject("Trial");
    projectList.push(trial);
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

        for(let todo of Object.keys(projectList[i])){
            let toDo = document.createElement("div");
            toDo.setAttribute("class", "toDiv");

            toDo.textContent = `${todo}`;
            project.appendChild(toDo);
        }

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

function addContent(todo){
    let content = "";
    for(let key of Object.keys([todo])){
        content += todo;
        console.log(key)
    }
    return content;

    // switch (key){
    //     case "title":
    //         return `Title: ${stuff}`
    //     case "desc":
    //         return `Description: ${projectList[i].toDo.desc}`
    //     case "date":
    //         return `Due Date: ${projectList[i].toDo.date}`
    //     case "priority":
    //         return `Priority: ${projectList[i].toDo.priority}`
    //     case "notes":
    //         return `Notes: ${projectList[i].toDo.notes}`
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

    const dialog = document.createElement("dialog");
    dialog.classList.add("newToDo");
    let project = document.querySelector(".project");
    project.appendChild(dialog);

    const form = document.createElement("form");
    form.setAttribute("method", "dialog");
    dialog.appendChild(form);



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


    dialog.showModal();

    submitBtn.addEventListener("click", () => {
        const newToDo = createToDo(titleForm.value, descForm.value, dateForm.value, priorityForm.value, notesForm.value);
        deleteChildren(".project")
        console.log(newToDo);
        addToDoToProject(0, newToDo, `${titleForm.value}`);
        updateDisplay();
    })

}
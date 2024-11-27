import {greeting, projectList, createProject, createToDo} from "./jv.js";
console.log(greeting);

const body = document.querySelector("body");

const showBtn = document.querySelector(".show");
showBtn.addEventListener("click", () => {
    console.log(projectList);
    createToDoDialog();
})

const createProjectBtn = document.querySelector(".project");
createProjectBtn.addEventListener("click", () => {
    const trial = createProject("Trial");
    projectList.push(trial);
    updateDisplay();
})

const createToDoBtn = document.querySelector(".todo");
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
    for(let i = 0; i < projectList.length; i++){
        let project = document.createElement("div");
        project.setAttribute("class", "project");
        project.setAttribute("data-index", `${i}`);
        project.textContent = projectList[i].name;
        body.appendChild(project);

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
    titleFormLabel.setAttribute("for", "titleForm");
    titleFormLabel.textContent = "hi";

    const titleForm = document.createElement("input");
    titleForm.setAttribute("type", "text");
    titleForm.setAttribute("class", "titleForm");
    titleForm.setAttribute("name", "titleForm");
    form.appendChild(titleForm);


    const descFormLabel = document.createElement("label");
    descFormLabel.setAttribute("for", "descForm");
    descFormLabel.textContent = "hi";

    const descForm = document.createElement("input");
    descForm.setAttribute("type", "text");
    descForm.setAttribute("class", "descForm");
    descForm.setAttribute("name", "descForm");
    form.appendChild(descForm);


    const dateFormLabel = document.createElement("label");
    dateFormLabel.setAttribute("for", "dateForm");
    dateFormLabel.textContent = "hi";

    const dateForm = document.createElement("input");
    dateForm.setAttribute("type", "text");
    dateForm.setAttribute("class", "dateForm");
    dateForm.setAttribute("name", "dateForm");
    form.appendChild(dateForm);


    const priorityFormLabel = document.createElement("label");
    priorityFormLabel.setAttribute("for", "priorityForm");
    priorityFormLabel.textContent = "hi";

    const priorityForm = document.createElement("input");
    priorityForm.setAttribute("type", "text");
    priorityForm.setAttribute("class", "priorityForm");
    priorityForm.setAttribute("name", "priorityForm");
    form.appendChild(priorityForm);


    const notesFormLabel = document.createElement("label");
    notesFormLabel.setAttribute("for", "notesForm");
    notesFormLabel.textContent = "hi";

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
    submitBtn.setAttribute("type","reset");
    submitBtn.setAttribute("class", "submit");
    submitBtn.textContent = "Submit";
    form.appendChild(submitBtn);


    dialog.showModal();
}
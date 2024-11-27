import {greeting, projectList, createProject, createToDo} from "./jv.js";

console.log(greeting);

const showBtn = document.querySelector(".show");
showBtn.addEventListener("click", () => {
    console.log(projectList);
})

const createProjectBtn = document.querySelector(".project");
createProjectBtn.addEventListener("click", () => {
    const trial = createProject("Trial");
    projectList.push(trial);
})

const createToDoBtn = document.querySelector(".todo");
createToDoBtn.addEventListener("click", () => {
    projectList[0].todo = createToDo(
        "say Hi", "i wanna say hi", "today", "high", "i just really wanna say hi");
})
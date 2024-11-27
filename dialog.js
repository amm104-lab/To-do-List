function createToDoDialog(){

    const dialog = document.createElement("dialog");
    dialog.classList.add("newToDo");

    const form = document.createElement("form");
    form.setAttribute("method", "dialog");



    const titleFormLabel = document.createElement("label");
    titleFormLabel.setAttribute("for", "titleForm");

    const titleForm = document.createElement("input");
    titleForm.setAttribute("type", "text");
    titleForm.setAttribute("class", "titleForm");
    titleForm.setAttribute("name", "titleForm");


    const descFormLabel = document.createElement("label");
    descFormLabel.setAttribute("for", "descForm");

    const descForm = document.createElement("input");
    descForm.setAttribute("type", "text");
    descForm.setAttribute("class", "descForm");
    descForm.setAttribute("name", "descForm");


    const dateFormLabel = document.createElement("label");
    dateFormLabel.setAttribute("for", "dateForm");

    const dateForm = document.createElement("input");
    dateForm.setAttribute("type", "text");
    dateForm.setAttribute("class", "dateForm");
    dateForm.setAttribute("name", "dateForm");


    const priorityFormLabel = document.createElement("label");
    priorityFormLabel.setAttribute("for", "priorityForm");

    const priorityForm = document.createElement("input");
    priorityForm.setAttribute("type", "text");
    priorityForm.setAttribute("class", "priorityForm");
    priorityForm.setAttribute("name", "priorityForm");


    const notesFormLabel = document.createElement("label");
    notesFormLabel.setAttribute("for", "notesForm");

    const notesForm = document.createElement("input");
    notesForm.setAttribute("type", "text");
    notesForm.setAttribute("class", "notesForm");
    notesForm.setAttribute("name", "notesForm");

}

export{createToDoDialog};
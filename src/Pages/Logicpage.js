import { arrayOfProjects } from "./DOMpage";
import { projectSelectIndex } from "./Homepage";
import { createContent } from "./Homepage";
import { format } from "date-fns";
let nextListId = 0;
let completed = false;
let moveSelectIndex;
let moveProjectDiv;
let content = createContent();
let currentDate = format(new Date(), "dd-MM-yyyy");

class Todo {
    constructor(title, description, dueDate, priority, id, completed) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = id;
        this.complete = completed;
    }
}

const createCard = (task) => {
    const formContainer = document.getElementById("form-container");
    const projectHolder = document.getElementById("rightProjectHolder");
    const editFormContainer = document.querySelector(".editform-container")
    const updatebtn = document.querySelector(".updatebtn");
    const cancelbtn = document.querySelector(".closebtn");
    const inboxCardHolder = document.getElementById("inboxCardDiv");
    const inboxDiv = document.getElementById("inboxDiv");
    let index = projectSelectIndex();
    console.log(index);
    let projectDiv = arrayOfProjects[index];
    console.log(projectDiv);
    const titleHolder = document.createElement("p");
    const descriptionHolder = document.createElement("p");
    const dueDateHolder = document.createElement("p");
    const priorityHolder = document.createElement("p");
    const inboxExposedTitleContainer = document.createElement("p");
    const inbox = document.createElement("div");
    const inboxCardDiv = document.createElement("div");
    const inboxExposedDiv = document.createElement("div");
    const inboxExposedBtnDiv = document.createElement("div");
    const TitleCheckBoxDiv = document.createElement("div");
    const inboxDeletebtn = document.createElement("button");
    const readbtn = document.createElement("input");
    const movebtn = document.createElement("button");
    const editbtn = document.createElement("button");
    const editpriority = document.createElement("button");

    TitleCheckBoxDiv.setAttribute("id", "TitleNameCheckBoxDiv");
    inboxCardDiv.setAttribute("id", `${task.id}`);
    // inboxDeletebtn.setAttribute("id", `${task.id}`);
    inboxDeletebtn.classList.add("inboxDeletebtn")
    inboxExposedBtnDiv.classList.add("inboxExposedbtnContainer");
    readbtn.setAttribute("id", `${task.id}`);
    readbtn.setAttribute("type", "checkbox");
    movebtn.setAttribute("id", `${task.id}`);
    movebtn.classList.add("movebtn");
    editbtn.setAttribute("id", `${task.id}`);
    editbtn.classList.add("editbtn");
    editpriority.setAttribute("id", `${task.id}`);
    editpriority.classList.add("editpriority");

    inbox.classList.add("inbox-Collapse");
    inbox.style.display = "none";
    inboxCardDiv.classList.add("inbox-Card");
    inboxExposedDiv.classList.add("inbox-Exposed");

    titleHolder.textContent = `Title: ${task.title}`;
    descriptionHolder.textContent = `Description: ${task.description}`;
    dueDateHolder.textContent = `Due Date: ${currentDate}`;
    priorityHolder.textContent = `Priority: ${task.priority}`;
    inboxDeletebtn.textContent = "Delete";
    movebtn.textContent = "Move";
    editbtn.textContent = "Edit";
    editpriority.textContent = `Priority:${task.priority}`;

    inboxExposedTitleContainer.textContent = `${task.title}`;
    TitleCheckBoxDiv.append(readbtn);
    TitleCheckBoxDiv.append(inboxExposedTitleContainer);
    inboxExposedDiv.append(TitleCheckBoxDiv)
    inboxExposedBtnDiv.append(movebtn);
    inboxExposedBtnDiv.append(editbtn);
    inboxExposedBtnDiv.append(editpriority);
    inboxExposedDiv.append(inboxExposedBtnDiv);
    inboxExposedBtnDiv.append(inboxDeletebtn);
    inboxCardDiv.append(inboxExposedDiv);
    inboxCardDiv.append(inbox);
    inbox.append(titleHolder);
    inbox.append(descriptionHolder);
    inbox.append(dueDateHolder);
    inbox.append(priorityHolder);
    formContainer.style.display = "none";


    if (index === 0) {
        inboxCardHolder.append(inboxCardDiv);
        inboxDiv.style.display = "block";
        projectHolder.style.display = "none";
        console.log(list);
    } else if (index == parseInt(projectDiv.getAttribute("data-data-id"))) {
        console.log(index);
        // inboxDiv.style.display = "none";
        projectDiv.append(inboxCardDiv);
        projectDiv.style.display = "block";
        projectHolder.style.display = "block";
        localStorage.setItem("projects", JSON.stringify(arrayOfProjects));
    }

    console.log(list);

    inboxExposedDiv.addEventListener("click", e => {
        if (e.target.className === "inbox-Exposed") {
            if (inbox.style.display === "none") {
                inbox.style.display = "flex";
            } else if (inbox.style.display = "none") {
                inbox.style.display = "none";
            }
        }
    });

    inboxDeletebtn.addEventListener("click", (e) => {
        list = list.filter((e) => e != task);
        console.log(list);
        e.target.parentNode.parentNode.parentNode.remove();
        localStorage.setItem("tasks", JSON.stringify(list));
    });

    editpriority.addEventListener("click", () => {
        const priority = document.getElementById("priority");
        const priorityClone = priority.cloneNode(true);
        const priorityForm = document.createElement("form");
        const priorityLabel = document.createElement("label");
        const prioritySubmitbtnDiv = document.createElement("div");
        const prioritySubmitbtn = document.createElement("input");
        const cancelSubmitbtn = document.createElement("input");

        prioritySubmitbtnDiv.classList.add("prioritySubmitbtnDiv");
        prioritySubmitbtn.setAttribute("type", "button");
        prioritySubmitbtn.setAttribute("id", `${task.id}`);
        prioritySubmitbtn.setAttribute("value", "Submit Button");
        prioritySubmitbtn.classList.add("prioritySubmitbtn");
        cancelSubmitbtn.setAttribute("type", "button");
        cancelSubmitbtn.setAttribute("value", "Cancel");
        cancelSubmitbtn.classList.add("priorityCancelSubmitbtn");

        priorityForm.classList.add("priorityform");
        priorityLabel.classList.add("priorityLabel");
        priorityLabel.textContent = "Priority:";

        priorityForm.append(priorityLabel);
        priorityForm.append(priorityClone);
        priorityClone.value = task.priority;
        priorityForm.append(prioritySubmitbtnDiv);

        priorityForm.style.display = "block";
        document.body.append(priorityForm);


        prioritySubmitbtnDiv.append(prioritySubmitbtn)
        prioritySubmitbtnDiv.append(cancelSubmitbtn);
        console.log(list);

        prioritySubmitbtn.addEventListener("click", (e) => {
            togglePriority(e.target.id)
            editpriority.textContent = `Priority:${task.priority}`;
            priorityForm.style.display = "none";
            localStorage.setItem("tasks", JSON.stringify(list));
        });

        function togglePriority(id) {
            list.forEach(function (task) {
                const priorityIndex = priorityClone.options[priorityClone.selectedIndex].text;
                if (task.id == id) {
                    task.priority = priorityIndex;
                }
            });
        }

        cancelSubmitbtn.addEventListener("click", () => {
            priorityForm.style.display = "none";
        });
    });

    readbtn.addEventListener("click", (e) => {
        if (e.target.type === "checkbox") {
            toggle(e.target.id);
            // if(task.complete = true){
            //     e.target.parentNode.parentNode.style.textDecoration = "line-through";
            // }else if(task.complete = false){
            //     e.target.parentNode.parentNode.style.textDecoration = "none";
            // }
        }
        localStorage.setItem("tasks", JSON.stringify(list));
        console.log(list);
    });

    function toggle(id) {
        list.forEach(function (task) {
            if (task.id == id) {
                task.complete = !task.complete;
            }
        });
    }

    editbtn.addEventListener("click", (e) => {
        let inboxCardDivIndex = e.target.parentNode.parentNode.parentNode.id;
        if (e.target.id === inboxCardDivIndex) {
            document.getElementById("editTitlename").value = `${task.title}`;
            document.getElementById("editdescription").value = `${task.description}`;
            document.getElementById("editdueDate").value = `${task.dueDate}`;
            document.getElementById("editpriority").value = `${task.priority}`;
        }
        updatebtn.setAttribute("id", inboxCardDivIndex);
        cancelbtn.setAttribute("id", inboxCardDivIndex);
        let deletedTask = e.target.parentNode.parentNode;
        console.log(deletedTask);
        editFormContainer.style.display = "block";

        updatebtn.addEventListener("click", (e) => {
            let editTitleName = document.getElementById("editTitlename").value;
            let editdescriptionName = document.getElementById("editdescription").value;
            let editdueDateNo = document.getElementById("editdueDate").value;
            let editpriorityId = document.getElementById("editpriority").value;
            editTask(e.target.id);
            function editTask(id) {
                list.forEach(function (task) {
                    if (task.id == id) {
                        task.title = editTitleName;
                        task.description = editdescriptionName;
                        task.dueDate = editdueDateNo;
                        task.priority = editpriorityId;
                    }
                });
            }
            location.reload();
            createCard(task);
            console.log(list);
            editFormContainer.style.display = "none";
            localStorage.setItem("tasks", JSON.stringify(list));
        });
        cancelbtn.addEventListener("click", () => {
            editFormContainer.style.display = "none";
        });
    });

    movebtn.addEventListener("click", () => {
        const projectlist = document.getElementById("projectlist");
        const moveProjectlist = projectlist.cloneNode(true);
        const moveForm = document.createElement("form");
        const projectLabel = document.createElement("label");
        const moveSubmitbtnDiv = document.createElement("div");
        const moveSubmitbtn = document.createElement("input");
        const cancelSubmitbtn = document.createElement("input");

        moveSubmitbtnDiv.append(moveSubmitbtn);
        moveSubmitbtnDiv.append(cancelSubmitbtn);

        moveSubmitbtnDiv.classList.add("moveSubmitbtnDiv");
        moveSubmitbtn.setAttribute("type", "button");
        moveSubmitbtn.setAttribute("id", `${task.id}`);
        moveSubmitbtn.setAttribute("value", "Move Button");
        moveSubmitbtn.classList.add("moveSubmitbtn");
        cancelSubmitbtn.setAttribute("type", "button");
        cancelSubmitbtn.setAttribute("id", `${task.id}`);
        cancelSubmitbtn.setAttribute("value", "Cancel");
        cancelSubmitbtn.classList.add("cancelSubmitbtn");

        moveForm.classList.add("moveform");
        projectLabel.classList.add("moveLabel");
        projectLabel.textContent = "Project:";

        moveForm.append(projectLabel);
        moveForm.append(moveProjectlist);
        moveForm.append(moveSubmitbtnDiv);

        moveForm.style.display = "block";
        document.body.append(moveForm);

        moveSubmitbtn.addEventListener("click", () => {
            moveSelectIndex = moveProjectlist.selectedIndex;
            moveProjectDiv = arrayOfProjects[moveSelectIndex];
            console.log(moveSelectIndex);
            if (moveSelectIndex === 0) {
                inboxDiv.append(inboxCardDiv);
                inboxDiv.style.display = "block";
                console.log(moveSelectIndex);
            } else if (moveSelectIndex === parseInt(moveProjectDiv.getAttribute("data-data-id"))) {
                console.log(moveSelectIndex);
                moveProjectDiv.append(inboxCardDiv);
                inboxDiv.style.display = "none";
            }
            localStorage.setItem("tasks", JSON.stringify(list));
            moveForm.remove();

        });

        cancelSubmitbtn.addEventListener("click", () => {
            moveForm.style.display = "none";
        });
    });
    nextListId++;
    localStorage.setItem("tasks", JSON.stringify(list));
}

let list = JSON.parse(localStorage.getItem("tasks")) || [];
list.forEach(createCard);

const addListToLibrary = (titleName, descriptionName, dueDateNo, priorityId) => {
    let task = new Todo(titleName, descriptionName, dueDateNo, priorityId, nextListId, completed);
    list.push(task);
    createCard(task);
    localStorage.setItem("tasks", JSON.stringify(list));
    console.log(list);
}
const submitForm = () => {
    submitbtn.addEventListener("click", () => {
        const titleName = document.getElementById("titlename").value;
        const descriptionName = document.getElementById("description").value;
        const dueDateNo = document.getElementById("dueDate").value;
        let priorityId = document.getElementById("priority").value;
        addListToLibrary(titleName, descriptionName, dueDateNo, priorityId);
    });
};
const closeForm = () => {
    const closebtn = document.querySelector("#closebtn");
    closebtn.addEventListener("click", () => {
        const form = document.getElementById("form-container");
        form.style.display = "none";
    });
};

const Logicpage = () => {
    document.body.append(content);
    submitForm();
    closeForm();
};



export default Logicpage;
export { list };  
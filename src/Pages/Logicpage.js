import { arrayOfProjects } from "./DOMpage";
import { projectSelectIndex } from "./Homepage";
import { format } from "date-fns";
const list = [];
let nextListId = 0;
let moveSelectIndex;
let moveProjectDiv;


class Todo {
    constructor(title, description, dueDate, priority, id) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = id;
    }
}

const addListToLibrary = () => {
    const titleName = document.getElementById("titlename").value;
    const descriptionName = document.getElementById("description").value;
    const dueDateNo = document.getElementById("dueDate").value;
    let priorityId = document.getElementById("priority").value;
    let project = new Todo(titleName, descriptionName, dueDateNo, priorityId, nextListId);
    list.push(project);
    nextListId++;
    createCard();
    console.log(list);

}

const createCard = () => {
    const formContainer = document.getElementById("form-container");
    const inboxDiv = document.getElementById("inboxDiv");
    const projectHolder = document.getElementById("rightProjectHolder");
    const editFormContainer = document.querySelector(".editform-container")
    const updatebtn = document.querySelector(".updatebtn");
    const cancelbtn = document.querySelector(".closebtn");
    var index = projectSelectIndex();
    console.log(index);
    var projectDiv = arrayOfProjects[index];
    console.log(projectDiv);
    for (var i of list) {
        let dateFomart = format(new Date(i.dueDate), "MM-dd-yyyy hh:mm a");
        console.log(dateFomart);
        const titleHolder = document.createElement("p");
        const descriptionHolder = document.createElement("p");
        const dueDateHolder = document.createElement("p");
        const priorityHolder = document.createElement("p");
        const inboxExposedTitleContainer = document.createElement("p");
        var inbox = document.createElement("div");
        var inboxCardDiv = document.createElement("div");
        var inboxExposedDiv = document.createElement("div");
        const inboxExposedBtnDiv = document.createElement("div");
        const TitleNameCheckBoxDiv = document.createElement("div");
        var inboxDeletebtn = document.createElement("button");
        var readbtn = document.createElement("input");
        var movebtn = document.createElement("button");
        var editbtn = document.createElement("button");
        var editpriority = document.createElement("button");

        TitleNameCheckBoxDiv.setAttribute("id", "TitleNameCheckBoxDiv");
        inboxCardDiv.setAttribute("id", `${i.id}`);

        inboxDeletebtn.setAttribute("id", `${i.id}`);
        inboxDeletebtn.classList.add("inboxDeletebtn")
        inboxExposedBtnDiv.classList.add("inboxExposedbtnContainer");
        readbtn.setAttribute("id", `${i.id}`);
        readbtn.classList.add("readbtn");
        readbtn.setAttribute("type", "checkbox");
        movebtn.setAttribute("id", `${i.id}`);
        movebtn.classList.add("movebtn");
        editbtn.setAttribute("id", `${i.id}`);
        editbtn.classList.add("editbtn");
        editpriority.setAttribute("id", `${i.id}`);
        editpriority.classList.add("editpriority");

        inbox.classList.add("inbox-Collapse");
        inbox.style.display = "none";
        inboxCardDiv.classList.add("inbox-Card");
        inboxExposedDiv.classList.add("inbox-Exposed");

        titleHolder.textContent = `Title: ${i.title}`;
        descriptionHolder.textContent = `Description: ${i.description}`;
        dueDateHolder.textContent = `Due Date: ${dateFomart}`;
        priorityHolder.textContent = `Priority: ${i.priority}`;
        inboxDeletebtn.textContent = "Delete";
        movebtn.textContent = "Move";
        editbtn.textContent = "Edit";
        editpriority.textContent = `Priority:${i.priority}`;

        inboxExposedTitleContainer.textContent = `${i.title}`;
        TitleNameCheckBoxDiv.append(readbtn);
        TitleNameCheckBoxDiv.append(inboxExposedTitleContainer);
        inboxExposedDiv.append(TitleNameCheckBoxDiv)
        inboxExposedBtnDiv.append(movebtn);
        inboxExposedBtnDiv.append(editbtn);
        inboxExposedBtnDiv.append(editpriority);
        inboxExposedDiv.append(inboxExposedBtnDiv);
        inboxExposedBtnDiv.append(inboxDeletebtn);
        inboxCardDiv.append(inboxExposedDiv);
        inbox.append(titleHolder);
        inbox.append(descriptionHolder);
        inbox.append(dueDateHolder);
        inbox.append(priorityHolder);
        inboxCardDiv.append(inbox);
        formContainer.style.display = "none";
    }

    if (index === 0) {
        inboxDiv.append(inboxCardDiv);
        inboxDiv.style.display = "block";
    } else if (index === parseInt(projectDiv.getAttribute("data-data-Id"))) {
        console.log(index);
        inboxDiv.style.display = "none";
        projectDiv.append(inboxCardDiv);
        projectDiv.style.display = "block";
        projectHolder.style.display = "block";
    }

    inboxExposedDiv.addEventListener("click", e => {
        if (e.target.className === "inbox-Exposed") {
            if (inbox.style.display === "none") {
                inbox.style.display = "flex";
            } else if (inbox.style.display = "none") {
                inbox.style.display = "none";
            }
        }
    });

    inboxDeletebtn.addEventListener("click", () => {
        list.splice(list.findIndex(current => {
            return current.id === i.id;
        }), 1);
        inboxCardDiv.remove();
        console.log(list);
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
        prioritySubmitbtn.setAttribute("id", `${i.id}`);
        prioritySubmitbtn.setAttribute("value", "Submit Button");
        prioritySubmitbtn.classList.add("prioritySubmitbtn");
        cancelSubmitbtn.setAttribute("type", "button");
        cancelSubmitbtn.setAttribute("id", `${i.id}`);
        cancelSubmitbtn.setAttribute("value", "Cancel");
        cancelSubmitbtn.classList.add("priorityCancelSubmitbtn");

        priorityForm.classList.add("priorityform");
        priorityLabel.classList.add("priorityLabel");
        priorityLabel.textContent = "Priority:";

        priorityForm.append(priorityLabel);
        priorityForm.append(priorityClone);
        priorityClone.value = i.priority;
        priorityForm.append(prioritySubmitbtnDiv);

        priorityForm.style.display = "block";
        document.body.append(priorityForm);


        prioritySubmitbtnDiv.append(prioritySubmitbtn, cancelSubmitbtn);
        console.log(list);

        prioritySubmitbtn.addEventListener("click", () => {
            list[
                list.findIndex((current) => {
                    return current.id === i.id;
                })].toggle();

            editpriority.textContent = `Priority:${i.priority}`;
            priorityForm.style.display = "none";
        });

         Todo.prototype.toggle = function () {
            const priorityIndex = priorityClone.options[priorityClone.selectedIndex].text;
            i.priority = priorityIndex;
            console.log(priorityIndex);
        }

        cancelSubmitbtn.addEventListener("click", () => {
            priorityForm.style.display = "none";
        });

    });
    
    readbtn.addEventListener("click", () => {
        if (readbtn.checked) {
            list.splice(list.findIndex(current => {
                return current.id === i.id;
            }), 1);
            console.log(list);
            inboxCardDiv.remove();
            alert("task completed");
        }
    });

    editbtn.addEventListener("click", (e) => {
        let clickedlist = e.target;
        let index = '';
        index = clickedlist.getAttribute("id");
        console.log(index);
        if (e.target.id === index) {
            document.getElementById("editTitlename").value = `${i.title}`;
            document.getElementById("editdescription").value = `${i.description}`;
            document.getElementById("editdueDate").value = `${i.dueDate}`;
            document.getElementById("editpriority").value = `${i.priority}`;
        }
        console.log(list);
        updatebtn.setAttribute("id", index);
        cancelbtn.setAttribute("id", index);
        editFormContainer.style.display = "block";
        updatebtn.addEventListener("click", (e) => {
            let editTitleName = document.getElementById("editTitlename").value;
            let editdescriptionName = document.getElementById("editdescription").value;
            let editdueDateNo = document.getElementById("editdueDate").value;
            let editpriorityId = document.getElementById("editpriority").value;
            let objIndex = parseInt(e.target.id);
            list[objIndex].title = editTitleName;
            list[objIndex].description = editdescriptionName;
            list[objIndex].dueDate = editdueDateNo;
            list[objIndex].priority = editpriorityId;
            console.log(list);
            createCard();
            editFormContainer.style.display = "none";
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
        moveSubmitbtn.setAttribute("id", `${i.id}`);
        moveSubmitbtn.setAttribute("value", "Move Button");
        moveSubmitbtn.classList.add("moveSubmitbtn");
        cancelSubmitbtn.setAttribute("type", "button");
        cancelSubmitbtn.setAttribute("id", `${i.id}`);
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

            moveForm.remove();

        });

        cancelSubmitbtn.addEventListener("click", () => {
            moveForm.style.display = "none";
        });
    });

};



const submitForm = () => {
    // const submitbtn = document.querySelector("#submitbtn");
    // const titleName = document.getElementById("titlename");
    // const descriptionName = document.getElementById("description");
    // const dueDateNo = document.getElementById("dueDate");
    // const priorityId = document.getElementById("priority");
    // let read = document.getElementById("read");

    // titleName.value = "";
    // descriptionName.value = "";
    // dueDateNo.value = "";
    // priorityId.value = "";
    // read.checked = "";
    submitbtn.addEventListener("click", addListToLibrary);
};
const closeForm = () => {
    const closebtn = document.querySelector("#closebtn");
    closebtn.addEventListener("click", () => {
        const form = document.getElementById("form-container");
        form.style.display = "none";
    });
};

const Logicpage = () => {
    submitForm();
    closeForm();
};


export default Logicpage;
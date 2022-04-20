import { arrayOfProjects } from "./DOMpage";
import { projectSelectIndex } from "./Homepage";
// const createdProject = document.getElementById("createdProject");
// let dataAttribute = createdProject.getAttribute()
const list = [];
let nextListId = 0;
class Todo {
    constructor(title, description, dueDate, priority, id, read) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = id;
        this.read = read;
    }
}

const addListToLibrary = () => {
    const titleName = document.getElementById("titlename").value;
    const descriptionName = document.getElementById("description").value;
    const dueDateNo = document.getElementById("dueDate").value;
    const priorityId = document.getElementById("priority").value;
    let read = document.getElementById("read").checked;
    let project = new Todo(titleName, descriptionName, dueDateNo, priorityId, nextListId, read);
    list.push(project);
    createCard();
    nextListId++;
    console.log(list);
}

Todo.prototype.toggleStatus = function () {
    if (this.read === true) {
        this.read = false;
    } else {
        this.read = true;
    }
};

const createCard = () => {
    const formContainer = document.getElementById("form-container");
    const inboxDiv = document.getElementById("inboxDiv");
    const editFormContainer = document.querySelector(".editform-container")
    const updatebtn = document.querySelector(".updatebtn");
    var index = projectSelectIndex();
    var projectDiv = arrayOfProjects[index];

    for (let i of list) {
        const titleHolder = document.createElement("p");
        const descriptionHolder = document.createElement("p");
        const dueDateHolder = document.createElement("p");
        const priorityHolder = document.createElement("p");
        const inbox = document.createElement("div");
        var inboxCardDiv = document.createElement("div");
        const inboxExposedDiv = document.createElement("div");
        const inboxExposedBtnDiv = document.createElement("div");
        const inboxDeletebtn = document.createElement("button");
        const readbtn = document.createElement("button");
        const movebtn = document.createElement("button");
        const editbtn = document.createElement("button");

        inboxCardDiv.setAttribute("id", `${i.id}`);
        inboxDeletebtn.setAttribute("id", `${i.id}`);
        inboxDeletebtn.classList.add("inboxDeletebtn")
        inboxExposedBtnDiv.classList.add("inboxExposedbtnContainer");
        readbtn.setAttribute("id", `${i.id}`);
        readbtn.classList.add("readbtn");
        movebtn.setAttribute("id", `${i.id}`);
        movebtn.classList.add("movebtn");
        editbtn.setAttribute("id", `${i.id}`);
        inbox.classList.add("inbox-Collapse");
        inbox.style.display = "none";
        inboxCardDiv.classList.add("inbox-Card");
        inboxExposedDiv.classList.add("inbox-Exposed");
        titleHolder.textContent = `Title: ${i.title}`;
        descriptionHolder.textContent = `Description: ${i.description}`;
        dueDateHolder.textContent = `Due Date: ${i.dueDate}`;
        priorityHolder.textContent = `Priority: ${i.priority}`;
        inboxDeletebtn.textContent = "Delete";
        readbtn.textContent = `Read: ${i.read}`;
        movebtn.textContent = "Move";
        editbtn.textContent = "Edit";

        inboxExposedDiv.textContent = `${i.title}`;
        inboxExposedBtnDiv.append(readbtn);
        inboxExposedBtnDiv.append(movebtn);
        inboxExposedBtnDiv.append(editbtn);
        inboxExposedDiv.append(inboxExposedBtnDiv);
        inboxExposedBtnDiv.append(inboxDeletebtn);
        inboxCardDiv.append(inboxExposedDiv);
        inbox.append(titleHolder);
        inbox.append(descriptionHolder);
        inbox.append(dueDateHolder);
        inbox.append(priorityHolder);
        inboxCardDiv.append(inbox);

        formContainer.style.display = "none";
     


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

        readbtn.addEventListener("click", () => {
            list[
                list.findIndex((current) => {
                    return current.id === i.id;
                })].toggleStatus();
            readbtn.textContent = `Read: ${i.read}`;
            console.log(list);
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
                document.getElementById("editread").checked = `${i.read}`;
            }
            console.log(list);
            updatebtn.setAttribute("id", index);
            editFormContainer.style.display = "block";
        });

        updatebtn.addEventListener("click", (e) => {
            const editTitleName = document.getElementById("editTitlename").value;
            const editdescriptionName = document.getElementById("editdescription").value;
            const editdueDateNo = document.getElementById("editdueDate").value;
            const editpriorityId = document.getElementById("editpriority").value;
            let editRead = document.getElementById("editread").checked;
            let objIndex = parseInt(e.target.id);
            list[objIndex].title = editTitleName;
            list[objIndex].description = editdescriptionName;
            list[objIndex].dueDate = editdueDateNo;
            list[objIndex].priority = editpriorityId;
            list[objIndex].read = editRead;
            createCard();
            console.log(list);
            editFormContainer.style.display = "none";

        });

        // movebtn.addEventListener("click", () =>{
        //     const moveForm = document.createElement("form");
        //     const projectLabel = document.createElement("label");
        //     const moveSubmitbtnDiv = document.createElement("div");
        //     const moveSubmitbtn = document.createElement("input");
        //     const cancelSubmitbtn = document.createElement("input");
        //     const projectSelect = document.getElementById("projectlist");
        //     const projectSelectMoveForm = projectSelect.cloneNode(true);
        //     var Options = document.getElementById("projectlist").options;
        //     moveSubmitbtnDiv.append(moveSubmitbtn);
        //     moveSubmitbtnDiv.append(cancelSubmitbtn);
        //     moveSubmitbtnDiv.classList.add("moveSubmitbtnDiv");
        //     moveSubmitbtn.setAttribute("type", "button");
        //     moveSubmitbtn.setAttribute("id", `${i.id}`);
        //     moveSubmitbtn.setAttribute("value", "Move Button");
        //     moveSubmitbtn.classList.add("moveSubmitbtn");
        //     cancelSubmitbtn.setAttribute("type", "button");
        //     cancelSubmitbtn.setAttribute("id", `${i.id}`);
        //     cancelSubmitbtn.setAttribute("value", "Cancel");
        //     cancelSubmitbtn.classList.add("cancelSubmitbtn");
        //     moveForm.classList.add("moveform");
        //     projectLabel.classList.add("moveLabel");
        //     projectLabel.textContent = "Project:";
        //     moveForm.append(projectLabel);
        //     moveForm.append(projectSelectMoveForm);
        //     moveForm.append(moveSubmitbtnDiv);
        //     projectSelectMoveForm.append(Options);
        //     var optionChosen = projectSelectMoveForm.options[projectSelectMoveForm.selectedIndex];
        //     console.log(optionChosen);
        //     moveForm.style.display = "block";
        //     document.body.append(moveForm);

        //     moveSubmitbtn.addEventListener("click", ()=>{
        //         var optionChosen = projectSelectMoveForm.options[projectSelectMoveForm.selectedIndex];
        //         console.log(optionChosen);
        //         optionChosen.append(inboxCardDiv);
        //         moveForm.style.display = "none";
        //     });

        //     cancelSubmitbtn.addEventListener("click", ()=>{
        //         moveForm.style.display = "none";
        //     });
        // });

    }

    if(index === 0){
        inboxDiv.append(inboxCardDiv);
        inboxDiv.style.display = "block";
    }else if(index === parseInt(projectDiv.getAttribute("data-data-Id"))){
        console.log(index);
        projectDiv.append(inboxCardDiv);
    }
};

const submitForm = () => {
    const submitbtn = document.querySelector("#submitbtn");
    submitbtn.addEventListener("click", addListToLibrary);
};



const Logicpage = () => {
    submitForm();
};


export default Logicpage;
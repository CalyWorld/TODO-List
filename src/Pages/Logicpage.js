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
    const inboxDiv = document.getElementById("inboxDiv");
    const editFormContainer = document.querySelector(".editform-container")
    const updatebtn = document.querySelector(".updatebtn");
    const projectSelect = document.querySelector("#projectlist");
    const projectOption = document.querySelector(".select-inbox");

    inboxDiv.textContent = "";
    const formContainer = document.getElementById("form-container");
    for (let i of list) {
        const titleHolder = document.createElement("p");
        const descriptionHolder = document.createElement("p");
        const dueDateHolder = document.createElement("p");
        const priorityHolder = document.createElement("p");
        const inbox = document.createElement("div");
        const inboxCardDiv = document.createElement("div");
        const inboxExposedDiv = document.createElement("div");
        const inboxExposedBtnDiv = document.createElement("div");
        const inboxDeletebtn = document.createElement("button");
        const readbtn = document.createElement("button");
        const movebtn = document.createElement("button");
        const editbtn = document.createElement("button");

        inboxCardDiv.setAttribute("id", `${i.id}`);
        inboxDeletebtn.setAttribute("id", `${i.id}`);
        inboxExposedBtnDiv.classList.add("inboxExposedbtnContainer");
        readbtn.setAttribute("id", `${i.id}`);
        readbtn.classList.add("readbtn");
        movebtn.setAttribute("id", `${i.id}`);
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
        inboxDiv.append(inboxCardDiv);
        inboxCardDiv.append(inbox);
        formContainer.style.display = "none";
        inboxDiv.style.display = "block";


        // // let inbox2 = inboxCardDiv.cloneNode(true);
        // // projectOption.append(inbox2);
        // var logSelected = function () {
        //     console.log(projectSelect.selectedIndex);
        // }
        // logSelected();
        // projectSelect.addEventListener("change", logSelected);

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
            inboxDiv.removeChild(inboxCardDiv);
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
        movebtn.addEventListener("click", () => {
            const moveForm = document.createElement("form");
            const projectLabel = document.createElement("label");
            const moveSubmitbtn = document.createElement("input");
            const projectSelect = document.getElementById("projectlist");
            var options = document.getElementById("projectlist").options;
            for(let i = 0; i<options.length; i++){
                console.log(options[i]);
            }
            moveSubmitbtn.setAttribute("type", "button");
            moveSubmitbtn.setAttribute("id", "moveSubmitbtn");
            moveSubmitbtn.setAttribute("value", "Move Button");
            moveForm.classList.add("moveform");
            projectLabel.classList.add("moveLabel");
            projectLabel.textContent = "Project:";
            moveForm.append(projectLabel);
            moveForm.append(projectSelect);
            moveForm.append(moveSubmitbtn);
            projectSelect.append(options);
            moveForm.style.display = "block";

            document.body.append(moveForm);
        });

    };
}

const submitForm = () => {
    const submitbtn = document.querySelector("#submitbtn");
    // const inboxCardDiv = document.getElementById(".inbox-Card");
    submitbtn.addEventListener("click", () => {
        addListToLibrary();
        // inboxCardDiv.style.display = "none";

    });
}

const Logicpage = () => {
    submitForm();
};

export default Logicpage;
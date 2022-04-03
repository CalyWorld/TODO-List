const list = [];
let nextListId = 0;
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
    const priorityId = document.getElementById("priority").value;
    let project = new Todo(titleName, descriptionName, dueDateNo, priorityId, nextListId);
    list.push(project);
    console.log(list);
    createCard();
    nextListId++;
}

const createCard = () => {
    const inboxDiv = document.getElementById("inboxDiv");
    inboxDiv.textContent = "";
    const formContainer = document.getElementById("form-container");
    for (let i of list) {
        const titleName = document.getElementById("titlename").value;
        const descriptionName = document.getElementById("description").value;
        const dueDateNo = document.getElementById("dueDate").value;
        const priorityId = document.getElementById("priority").value;
        const titleHolder = document.createElement("p");
        const descriptionHolder = document.createElement("p");
        const dueDateHolder = document.createElement("p");
        const priorityHolder = document.createElement("p");
        const inbox = document.createElement("div");
        const inboxCardDiv = document.createElement("div");
        const inboxExposedDiv = document.createElement("div");
        const inboxDeletebtn = document.createElement("button");
        inboxCardDiv.setAttribute("id", `${i.id}`);
        inboxDeletebtn.setAttribute("id", `${i.id}`);
        inbox.classList.add("inbox-Collapse");
        inboxCardDiv.classList.add("inbox-Card");
        inboxExposedDiv.classList.add("inbox-Exposed");
        titleHolder.textContent = `Title: ${titleName}`;
        descriptionHolder.textContent = `Description: ${descriptionName}`;
        dueDateHolder.textContent = `Due Date: ${dueDateNo}`;
        priorityHolder.textContent = `Priority: ${priorityId}`;
        inboxDeletebtn.textContent = "Delete";
        inboxExposedDiv.textContent = `${i.title}`;
        inboxExposedDiv.append(inboxDeletebtn);
        inboxCardDiv.append(inboxExposedDiv);
        inbox.append(titleHolder);
        inbox.append(descriptionHolder);
        inbox.append(dueDateHolder);
        inbox.append(priorityHolder);
        inboxCardDiv.append(inbox);
        inboxDiv.append(inboxCardDiv);
        formContainer.style.display = "none";
        inboxDiv.style.display = "block";

        inboxExposedDiv.addEventListener("click", e => {
            if (e.target.className === "inbox-Exposed") {
                if (inbox.style.display != "none") {
                    inbox.style.display = "none";
                } else {
                    inbox.style.display = "flex";
                }
            }
        });

        inboxDeletebtn.addEventListener("click", e => {
            list.splice(list.findIndex(current=>{
                return current.id === i.id;
            }), 1);
            inboxDiv.removeChild(inboxCardDiv);
            console.log(list);
        });

    };
}

const submitForm = () => {
    const submitbtn = document.querySelector("#submitbtn");
    submitbtn.addEventListener("click", addListToLibrary);
}

const Logicpage = () => {
    submitForm();
};

export default Logicpage;

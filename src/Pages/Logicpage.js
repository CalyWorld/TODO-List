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
    // const projectlist = document.getElementById("projectlist");
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
        const inboxExposedBtnDiv = document.createElement("div");
        const inboxDeletebtn = document.createElement("button");
        const readbtn = document.createElement("button");
        const movebtn = document.createElement("button");
        const editbtn = document.createElement("button");

        inboxCardDiv.setAttribute("id", `${i.id}`);
        inboxDeletebtn.setAttribute("id", `${i.id}`);
        inboxExposedBtnDiv.classList.add("inboxExposedbtnContainer");
        readbtn.setAttribute("id", `${i.id}`);
        movebtn.setAttribute("id", `${i.id}`);
        editbtn.setAttribute("id", `${i.id}`);

        inbox.classList.add("inbox-Collapse");
        inbox.style.display = "none";
        inboxCardDiv.classList.add("inbox-Card");
        inboxExposedDiv.classList.add("inbox-Exposed");
        titleHolder.textContent = `Title: ${titleName}`;
        descriptionHolder.textContent = `Description: ${descriptionName}`;
        dueDateHolder.textContent = `Due Date: ${dueDateNo}`;
        priorityHolder.textContent = `Priority: ${priorityId}`;
        inboxDeletebtn.textContent = "Delete";
        readbtn.textContent = "Read";
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
        inboxDiv.append(inboxCardDiv);
        formContainer.style.display = "none";
        inboxDiv.style.display = "block";

        inboxExposedDiv.addEventListener("click", e => {
            if (e.target.className === "inbox-Exposed") {
                if (inbox.style.display === "none") {
                    inbox.style.display = "flex";
                } else if(inbox.style.display = "none"){
                    inbox.style.display = "none";
                }
            }
        });

        editbtn.addEventListener("click", ()=>{  
            const editFormContainer = document.getElementById("editform-container");
            document.getElementById("editTitlename").value = `${i.title}`;
            document.getElementById("editdescription").value = `${i.description}`;
            document.getElementById("editdueDate").value = `${i.dueDate}`;
            document.getElementById("editpriority").value = `${i.priority}`;
           
            editFormContainer.style.display = "block";

          

            
           
            console.log(titleName);
            editFormContainer.style.display = "block";    
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

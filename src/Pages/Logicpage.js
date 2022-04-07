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
    createCard();
    nextListId++;
}

const createCard = () => {
    const inboxDiv = document.getElementById("inboxDiv");
    const editFormContainer = document.querySelector(".editform-container")
    const updatebtn = document.querySelector(".updatebtn");
    const projectList = document.getElementById("projectList");
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
        movebtn.setAttribute("id", `${i.id}`);
        editbtn.setAttribute("id", `${i.id}`);

        inbox.classList.add("inbox-Collapse");
        inbox.style.display = "none";
        inboxCardDiv.classList.add("inbox-Card");
        inboxExposedDiv.classList.add("inbox-Exposed");
        titleHolder.textContent = `Title: ${i.title}`;
        descriptionHolder.textContent = `Description: ${i.descriptionName}`;
        dueDateHolder.textContent = `Due Date: ${i.dueDateNo}`;
        priorityHolder.textContent = `Priority: ${i.priorityId}`;
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
            updatebtn.setAttribute("id", index);
            editFormContainer.style.display = "block";
        });

        inboxDeletebtn.addEventListener("click", () => {
            list.splice(list.findIndex(current=>{
                return current.id === i.id;
            }), 1);
            inboxDiv.removeChild(inboxCardDiv);
            console.log(list);
        });

        updatebtn.addEventListener("click", (e) => {
            const editTitleName = document.getElementById("editTitlename").value;
            const editdescriptionName = document.getElementById("editdescription").value;
            const editdueDateNo = document.getElementById("editdueDate").value;
            const editpriorityId = document.getElementById("editpriority").value;  
            let objIndex = parseInt(e.target.id);
            list[objIndex].title = editTitleName;
            list[objIndex].description = editdescriptionName;
            list[objIndex].dueDate = editdueDateNo;
            list[objIndex].editpriorityId = editpriorityId;
            createCard();
            editFormContainer.style.display = "none";
        
        });
        movebtn.addEventListener("click", ()=>{
            const moveForm = document.createElement("moveform");
            const projectLabel = document.createElement("label");
            const projectSelect = document.createElement("select");
            const option = document.createElement("option");
            const projectlist = document.getElementById("projectlist").value;
      
            moveForm.append(projectLabel);
            moveForm.append(projectSelect);
            projectSelect.append(option);
            option.append(projectlist);

            moveForm.classList.add("moveform");
            projectLabel.classList.add("projectLabel");
            projectLabel.textContent = "Project";
            moveForm.style.display = "block";

            document.body.append(moveForm);
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
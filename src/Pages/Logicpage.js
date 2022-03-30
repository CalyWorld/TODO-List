import Homepage from "./Homepage";

// const todo = (title, description, dueDate, priority) => {
//     const getTitle = () => title;
//     const getDescription = () => description;
//     const getDuedate = () => dueDate;
//     const getPriority = () => priority;
//     return { getTitle, getDescription, getDuedate, getPriority };
// };
// const placeValues = () => {

//     const title = document.getElementById("titlename").value;
//     const description = document.getElementById("description").value;
//     const dueDate = document.getElementById("dueDate");
//     const priority = document.getElementById("priority").value;
//     const project = document.getElementById("project").value;

//     const submitbtn = document.querySelector("#submitbtn");
//     const rightSideSection = document.getElementById("rightSide");


// };
const submitForm = () => {
    const library = [];
    const title = document.getElementById("titlename").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    const submitbtn = document.querySelector("#submitbtn");
    const inboxDiv = document.getElementById("inboxDiv");
    const formContainer = document.getElementById("form-container");
    const titleHolder = document.createElement("p");
    const descriptionHolder = document.createElement("p");
    const dueDateHolder = document.createElement("p");
    const priorityHolder = document.createElement("p");


    submitbtn.addEventListener("click", () => {
        // const inboxCollapse = document.getElementById(".inbox-Collapse");
        inboxDiv.style.display = "block";
        const inbox = document.createElement("div");
        const inboxHeadDiv = document.createElement("div");
        const inboxDeletebtn = document.createElement("button");

        inboxHeadDiv.setAttribute("id", library.length++);
        inbox.classList.add("inbox-Collapse");
        inboxHeadDiv.classList.add("inbox-exposed");
        titleHolder.textContent = `Title: ${title}`;
        descriptionHolder.textContent = `Description: ${description}`;
        dueDateHolder.textContent = `Due Date: ${dueDate}`;
        priorityHolder.textContent = `Priority: ${priority}`;
        inboxDeletebtn.textContent = "Delete"
        inboxHeadDiv.append(title);
        inboxHeadDiv.append(inboxDeletebtn);
        inbox.append(titleHolder);
        inbox.append(descriptionHolder);
        inbox.append(dueDateHolder);
        inbox.append(priorityHolder);
        inboxHeadDiv.append(inbox);
        inboxDiv.append(inboxHeadDiv);
        formContainer.style.display = "none";
        // console.log(inboxCollapse);
    });
};

const collapseInbox = () => {
  
    const inboxExposed = document.querySelectorAll(".inbox-exposed");
    const inboxCollapse = document.getElementById(".inbox-Collapse");
    inboxExposed.forEach((button) => {
        button.addEventListener("click", e => {
            // let clickedBox = e.target;
            // let index = parseInt(clickedBox.getAttribute("id"));
            if (e.target.id === "0") {
                if (inboxCollapse.style.display = "none") {
                    inboxCollapse.style.display = "block";
                } else {
                    inboxCollapse.style.display = "none";
                }
            }
        });
    });
};





const Logicpage = () => {
    submitForm();
    collapseInbox();
};

export default Logicpage;

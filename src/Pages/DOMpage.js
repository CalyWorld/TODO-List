const projectArray = [];
const openForm = () => {
    const formContainer = document.getElementById("form-container");
    const taskbtn = document.querySelector(".taskbtn");
    taskbtn.addEventListener("click", () => {
        if (formContainer.style.display !== "none") {
            formContainer.style.display = "block";
        } else {
            formContainer.style.display = "block";
        }
    });
};
const openInbox = () => {
    const btn = document.querySelectorAll("div");
    const inboxDiv = document.getElementById("inboxDiv");
    const todayDiv = document.getElementById("todayDiv");
    const nextWeekDiv = document.getElementById("nextWeekDiv");
    const projectList = document.getElementById("projectList");
    projectList.style.display="none";
    btn.forEach((button) => {
        button.addEventListener("click", (e) => {
            if (e.target.id === "inbox") {
                if ((inboxDiv.style.display = "none")) {
                    inboxDiv.style.display = "block";
                    todayDiv.style.display = "none";
                    nextWeekDiv.style.display = "none";
                    // projectListdiv.style.display = "none";
                }
            } else if (e.target.id === "today") {
                if ((todayDiv.style.display = "none")) {
                    todayDiv.style.display = "block";
                    inboxDiv.style.display = "none";
                    nextWeekDiv.style.display = "none";
                    // projectListdiv.style.display = "none";
                }
            } else if (e.target.id === "nextWeek") {
                if ((nextWeekDiv.style.display = "none")) {
                    nextWeekDiv.style.display = "block";
                    inboxDiv.style.display = "none";
                    todayDiv.style.display = "none";
                    // projectListdiv.style.display = "none";
                }
            }
            else if (e.target.id === "project") {
                if (projectList.style.display === "none") {
                    projectList.style.display = "block";
                } else if(projectList.style.display = "block") {
                    projectList.style.display = "none";
                }
            }
        });
    });

};
const addProject = () => {

    const projectbtn = document.getElementById("projectbtn");
    const projectList = document.getElementById("projectList");

    projectbtn.addEventListener("click", () => {
        const content = document.getElementById("content");
        const projectFolder = document.createElement("form");
        const projectHead = document.createElement("h1");
        const projectLabelHolder = document.createElement("div");
        const projectbtnHolder = document.createElement("div");
        const addprojectbtn = document.createElement("button");
        const closeprojectbtn = document.createElement("button");

        const label = document.createElement("label")
        const input = document.createElement("input");
        const br = document.createElement("br");

        projectFolder.setAttribute("id", "projectfolder");
        projectHead.classList.add("projectTitle");
        projectLabelHolder.classList.add("projectlabel");
        projectbtnHolder.classList.add("projectbtnholder");


        addprojectbtn.classList.add("addproject");
        closeprojectbtn.classList.add("closeproject");

        projectHead.textContent = "New Project";

        addprojectbtn.textContent = "submit";
        closeprojectbtn.textContent = "Close";

        label.setAttribute("for", "project");
        label.setAttribute("id", "projectlabel");
        input.setAttribute("type", "text");
        input.setAttribute("id", "projectId");
        addprojectbtn.setAttribute("type", "button");
        closeprojectbtn.setAttribute("type", "button");
        label.textContent = "Project Name:";


        projectFolder.append(projectHead);
        projectFolder.append(projectLabelHolder);
        projectFolder.append(projectbtnHolder);

        projectLabelHolder.append(label);
        projectLabelHolder.append(br);
        projectLabelHolder.append(input);

        projectbtnHolder.append(closeprojectbtn);
        projectbtnHolder.append(addprojectbtn);

        content.append(projectFolder);

        closeprojectbtn.addEventListener("click", () => {
            if (projectFolder.style.display = "block") {
                projectFolder.style.display = "none";
            }
        });

        addprojectbtn.addEventListener("click", () => {
            const createdProject = document.createElement("option");
            createdProject.setAttribute("id", input.value);
            const select = document.getElementById("projectlist");
            projectList.append(createdProject);
            createdProject.textContent = input.value;
            let selectProjectList2 = createdProject.cloneNode(true);
            select.append(selectProjectList2);
            projectFolder.remove();
            projectList.style.display = "block";
        });
    });

};


const addDivToList = () => {
    const projectList = document.querySelectorAll("#projectList");
    projectList.forEach((div) => {
        div.addEventListener("click", (e) => {
            let clickedDiv = e.target;
            let clickedDivTextContent = e.target.textContent;
            let index = clickedDiv.getAttribute("id");
            if (e.target.id === index) {
                const rightSide = document.getElementById("rightSide");
                const projectDiv = document.createElement("div");
                const projectHeadDiv = document.createElement("h1");
                projectDiv.setAttribute("id", "projectListdiv");
                projectHeadDiv.classList.add("projectListHead");
                projectHeadDiv.textContent = clickedDivTextContent;
                projectDiv.append(projectHeadDiv);
                rightSide.append(projectDiv);
            }
        });
    });
};


const DOMpage = () => {
    openForm();
    openInbox();
    addProject();
    addDivToList();
};

export default DOMpage;

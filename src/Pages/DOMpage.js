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
    const projectList = document.getElementById("projectList");
    const projectHolder = document.getElementById("rightProjectHolder");

    projectList.style.display = "none";
    btn.forEach((button) => {
        button.addEventListener("click", (e) => {
            if (e.target.id === "inbox") {
                if ((inboxDiv.style.display = "none")) {
                    inboxDiv.style.display = "block";
                    projectHolder.style.display = "none";
                }
            }
            else if (e.target.id === "project") {
                if (projectList.style.display === "none") {
                    projectList.style.display = "block";
                    // inboxDiv.style.display = "none";
                } else if (projectList.style.display = "block") {
                    projectList.style.display = "none";
                }
            }
        });
    });
}

const createProject = (projectTitleName) => {
    const select = document.getElementById("projectlist");
    const projectList = document.getElementById("projectList");
    const projectHolder = document.getElementById("rightProjectHolder");
    let createdProject;
    let projectOption;
    let projectDivContainer;
    let projectDivHead;
    for (let i = 0; i < arrayOfProjects.length; i++) {
        createdProject = document.createElement("div");
        projectOption = document.createElement("option");
        projectDivContainer = document.createElement("div");
        projectDivHead = document.createElement("h1");
        projectDivContainer.dataset.dataId = `${arrayOfProjects.length}`;
        projectDivContainer.setAttribute("id", "newProject");
        projectDivContainer.classList.add("rightSideProjectDiv");
        projectDivHead.textContent = projectTitleName;
        projectDivContainer.append(projectDivHead);

        createdProject.setAttribute("id", "createdProject");
        createdProject.dataset.dataId = `${arrayOfProjects.length}`
        createdProject.classList.add("createdProject");

        projectOption.dataset.dataId = `${arrayOfProjects.length}`
        projectList.style.display = "block";
    }

    createdProject.textContent = projectTitleName;
    projectOption.textContent = projectTitleName;
    arrayOfProjects.push(projectDivContainer);
    select.append(projectOption)
    projectList.append(createdProject);
    projectHolder.append(projectDivContainer);

    console.log(arrayOfProjects);

    createdProject.addEventListener("click", () => {
        const projectHolder = document.getElementById("rightProjectHolder");
        let selectedProject = parseInt(createdProject.getAttribute("data-data-id"));
        let index = parseInt(projectDivContainer.getAttribute("data-data-id"));
        const inboxDiv = document.getElementById("inboxDiv");
        if (selectedProject === index) {
            if (projectDivContainer.style.display === "block") {
                projectDivContainer.style.display = "none";
            } else {
                projectDivContainer.style.display = "block";
                projectHolder.style.display = "block";
                inboxDiv.style.display = "none";
            }
        }
    });
    localStorage.setItem("projects", JSON.stringify(arrayOfProjects));
}
const createProjectContainer = () => {
    const projectbtn = document.getElementById("projectbtn");
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

        addprojectbtn.textContent = "Submit";
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
            let projectTitleName = input.value;
            addProjectToLibrary(projectTitleName);
            projectFolder.remove();
        });
    });
    localStorage.setItem("projects", JSON.stringify(arrayOfProjects));

};

let arrayOfProjects =  [];


const addSelectInbox = () => {
    const selectInbox = document.getElementById("select-inbox");
    arrayOfProjects.push(selectInbox);
}

const addProjectToLibrary = (projectTitleName) => {
    createProject(projectTitleName);
    localStorage.setItem("projects", JSON.stringify(arrayOfProjects));
    console.log(arrayOfProjects);
}
const DOMpage = () => {
    openForm();
    openInbox();
    createProjectContainer();
    addSelectInbox();
    // document.body.append(domContent);
};

export { arrayOfProjects };
export {createProject};
export default DOMpage;

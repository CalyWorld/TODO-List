import { arrayOfProjects } from "./DOMpage";
export {projectSelectIndex};
let index;
const projectSelect = document.getElementById("projectlist");
const createHeader = () => {
  const header = document.createElement("header");
  const navbar = document.createElement("div");
  const iconDiv = document.createElement("div");
  const addTaskbtn = document.createElement("button");

  navbar.setAttribute("id", "navbar");
  iconDiv.classList.add("icon");
  addTaskbtn.classList.add("taskbtn");

  iconDiv.textContent = "icon";
  addTaskbtn.textContent = "+";

  navbar.append(iconDiv);
  navbar.append(addTaskbtn);
  header.append(navbar);

  return header;
};

const createContent = () => {
  const contentContainer = document.getElementById("content");
  const leftSideSection = document.createElement("div");
  const rightSideSection = document.createElement("div");

  const ul = document.createElement("ul");
  const list = document.createElement("li");

  const inboxbtn = document.createElement("div");

  const projectHolder = document.createElement("div");
  const project = document.createElement("ul");
  const projectList = document.createElement("li");
  const addProjectbtn = document.createElement("button");

  const rightinboxDiv = document.createElement("div");
  const rightProjectHolderDiv = document.createElement("div");


  const inboxHead = document.createElement("h1");

  leftSideSection.setAttribute("id", "leftSide");
  rightSideSection.setAttribute("id", "rightSide");

  rightinboxDiv.setAttribute("id", "inboxDiv");
  rightinboxDiv.dataset.dataId = `${arrayOfProjects.length}`
  rightProjectHolderDiv.setAttribute("id", "rightProjectHolder");


  inboxbtn.setAttribute("id", "inbox");


  projectHolder.setAttribute("id", "projectHolder");
  project.setAttribute("id", "project");
  projectList.setAttribute("id", "projectList");
  addProjectbtn.setAttribute("id", "projectbtn");


  inboxHead.classList.add("inboxhead");


  inboxHead.textContent = "Inbox";
  project.textContent = "Project";

  inboxbtn.textContent = "Inbox";
  addProjectbtn.textContent = " + Add project";

  ul.append(list);
  list.append(inboxbtn);
  list.append(projectHolder);
  projectHolder.append(project);
  project.append(projectList);
  project.append(addProjectbtn);

  leftSideSection.append(ul);

  rightinboxDiv.append(inboxHead);



  rightSideSection.append(rightinboxDiv);
  rightSideSection.append(rightProjectHolderDiv);


  contentContainer.append(leftSideSection);
  contentContainer.append(rightSideSection);

  return contentContainer;
};

const SelectProject = () => {
  const selectInbox = document.getElementById("select-inbox");
  arrayOfProjects.push(selectInbox);
  console.log(arrayOfProjects);
};

const projectSelectIndex = () =>{
  index = projectSelect.selectedIndex;
  return index;
};



projectSelect.addEventListener("change", projectSelectIndex);


const Homepage = () => {
  document.body.append(createHeader());
  document.body.append(createContent());
  SelectProject();
};


export default Homepage;

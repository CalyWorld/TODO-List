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
  const todaybtn = document.createElement("div");
  const nextWeekbtn = document.createElement("div");

  const projectHolder = document.createElement("div");
  const project = document.createElement("ul");
  const projectList = document.createElement("li");
  const addProjectbtn = document.createElement("button");

  const rightinboxDiv = document.createElement("div");
  const righttodayDiv = document.createElement("div");
  const rightnextWeekDiv = document.createElement("div");

  const inboxHead = document.createElement("h1");
  const todayHead = document.createElement("h1");
  const nextWeekHead = document.createElement("h1");

  leftSideSection.setAttribute("id", "leftSide");
  rightSideSection.setAttribute("id", "rightSide");

  rightinboxDiv.setAttribute("id", "inboxDiv");
  rightinboxDiv.dataset.dataId = `${arrayOfProjects.length}`
  righttodayDiv.setAttribute("id", "todayDiv");
  rightnextWeekDiv.setAttribute("id", "nextWeekDiv");

  inboxbtn.setAttribute("id", "inbox");
  todaybtn.setAttribute("id", "today");
  nextWeekbtn.setAttribute("id", "nextWeek");

  projectHolder.setAttribute("id", "projectHolder");
  project.setAttribute("id", "project");
  projectList.setAttribute("id", "projectList");
  addProjectbtn.setAttribute("id", "projectbtn");


  inboxHead.classList.add("inboxhead");
  todayHead.classList.add("todayHead");
  nextWeekHead.classList.add("nextWeekHead");




  inboxHead.textContent = "Inbox";
  todayHead.textContent = "Today";
  nextWeekHead.textContent = "Next 7 days";
  project.textContent = "Project";

  inboxbtn.textContent = "Inbox";
  todaybtn.textContent = "Today";
  nextWeekbtn.textContent = " Next 7 days";

  addProjectbtn.textContent = " + Add project";

  ul.append(list);
  list.append(inboxbtn);
  list.append(todaybtn);
  list.append(nextWeekbtn);
  list.append(projectHolder);
  projectHolder.append(project);
  project.append(projectList);
  project.append(addProjectbtn);

  leftSideSection.append(ul);

  rightinboxDiv.append(inboxHead);
  righttodayDiv.append(todayHead);
  rightnextWeekDiv.append(nextWeekHead);

  rightSideSection.append(rightinboxDiv);
  rightSideSection.append(righttodayDiv);
  rightSideSection.append(rightnextWeekDiv);

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

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
  const inboxbtn = document.createElement("button");
  const todaybtn = document.createElement("button");
  const nextWeekbtn = document.createElement("button");
  const projectbtn = document.createElement("button");
  const addProjectbtn = document.createElement("button");

  leftSideSection.setAttribute("id", "leftSide");
  rightSideSection.setAttribute("id", "rightSide");

  inboxbtn.setAttribute("id", "inbox");
  todaybtn.setAttribute("id", "today");
  nextWeekbtn.setAttribute("id", "nextWeek");
  projectbtn.setAttribute("id", "project");
  addProjectbtn.setAttribute("id", "addprojectbtn");

  inboxbtn.textContent = "Inbox";
  todaybtn.textContent = "Today";
  nextWeekbtn.textContent = " Next 7 days";
  projectbtn.textContent = "Project";
  addProjectbtn.textContent = " + Add new project";

  ul.append(list);
  list.append(inboxbtn);
  list.append(todaybtn);
  list.append(nextWeekbtn);
  list.append(projectbtn);
  projectbtn.append(addProjectbtn);

  leftSideSection.append(ul);

  contentContainer.append(leftSideSection);
  contentContainer.append(rightSideSection);

  return contentContainer;
};

const Homepage = () => {
  document.body.append(createHeader());
  document.body.append(createContent());
};

export default Homepage;

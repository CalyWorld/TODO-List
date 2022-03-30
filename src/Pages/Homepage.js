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
  const inboxDiv = document.createElement("div");
  const todayDiv = document.createElement("div");
  const nextWeekDiv = document.createElement("div");
  const inboxHead = document.createElement("h1");
  const todayHead = document.createElement("h1");
  const nextWeekHead = document.createElement("h1");

  leftSideSection.setAttribute("id", "leftSide");
  rightSideSection.setAttribute("id", "rightSide");

  inboxDiv.setAttribute("id", "inboxDiv");
  todayDiv.setAttribute("id", "todayDiv");
  nextWeekDiv.setAttribute("id", "nextWeekDiv");
  inboxHead.classList.add("inboxhead");
  todayHead.classList.add("todayHead");
  nextWeekHead.classList.add("nextWeekHead");
  inboxbtn.setAttribute("id", "inbox");
  todaybtn.setAttribute("id", "today");
  nextWeekbtn.setAttribute("id", "nextWeek");
  projectbtn.setAttribute("id", "project");
  addProjectbtn.setAttribute("id", "addprojectbtn");

  inboxHead.textContent = "Inbox";
  todayHead.textContent = "Today";
  nextWeekHead.textContent = "Next 7 days";
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

  inboxDiv.append(inboxHead);
  todayDiv.append(todayHead);
  nextWeekDiv.append(nextWeekHead);
  rightSideSection.append(inboxDiv);
  rightSideSection.append(todayDiv);
  rightSideSection.append(nextWeekDiv);

  contentContainer.append(leftSideSection);
  contentContainer.append(rightSideSection);

  return contentContainer;
};

const Homepage = () => {
  document.body.append(createHeader());
  document.body.append(createContent());
};

export default Homepage;

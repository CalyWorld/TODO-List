// import Logicpage from "./Logicpage";

const createHeader = () => {
  const header = document.createElement("header");
  const navbar = document.createElement("div");
  const iconDiv = document.createElement("div");
  const addTaskbtn = document.createElement("button");

  navbar.setAttribute("id", "navbar");
  iconDiv.classList.add("icon");
  addTaskbtn.classList.add("taskbtn");

  
  navbar.append(iconDiv);
  navbar.append(addTaskbtn);
  header.append(navbar);

  return header;
};

const Homepage = () =>{
    document.body.append(createHeader());
}

export default Homepage;

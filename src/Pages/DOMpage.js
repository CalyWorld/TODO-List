// const DOM = (() => {

//   const title = document.getElementById("titlename").value;
//   const description = document.getElementById("description").value;
//   const dueDate = document.getElementById("dueDate");
//   const priority = document.getElementById("priority").value;
//   const project = document.getElementById("project").value;
// })();

const openForm = () => {
  const formContainer = document.getElementById("form-container");
//   const form = document.getElementById("form");
  const taskbtn = document.querySelector(".taskbtn");
  taskbtn.addEventListener("click", () => {
    if (formContainer.style.display !== "none") {
        formContainer.style.display="block";
    //   formContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
    //   formContainer.style.gridTemplateRows = "1fr 1fr";
    } else {
      formContainer.style.display = "block";
    //   formContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
    //   formContainer.style.gridTemplateRows = "1fr 1fr";
    }
  });
};
const DOMpage = () => {
  openForm();
};

export default DOMpage;

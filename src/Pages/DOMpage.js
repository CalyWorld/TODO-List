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
    const projectList = document.getElementById("projectList")
    btn.forEach((button) => {
        button.addEventListener("click", (e) => {
            if (e.target.id === "inbox") {
                if ((inboxDiv.style.display = "none")) {
                    inboxDiv.style.display = "block";
                    todayDiv.style.display = "none";
                    nextWeekDiv.style.display = "none";
                }
            } else if (e.target.id === "today") {
                if ((todayDiv.style.display = "none")) {
                    todayDiv.style.display = "block";
                    inboxDiv.style.display = "none";
                    nextWeekDiv.style.display = "none";
                }
            } else if (e.target.id === "nextWeek") {
                if ((nextWeekDiv.style.display = "none")) {
                    nextWeekDiv.style.display = "block";
                    inboxDiv.style.display = "none";
                    todayDiv.style.display = "none";
                }
            }
                else if(e.target.id === "project"){
                    if(projectList.style.display = "none"){
                        projectList.style.display = "flex";
                    }
                }
        });
    });
};

// const CollapseCard = () =>{
//     const card = document.querySelectorAll("div");
//     const collapseCard = document.getElementById(".inbox-Collapse");

//     card.forEach((button)=>{
//         button.addEventListener("click", e=>{
//             if(e.target.className === "inbox-Exposed"){
//                 if(collapseCard.style.display="block");
//                 collapseCard.style.display = "none";
//             }else{
//                 collapseCard.style.display = "block";
//             }
//         });
//     });
// };

const DOMpage = () => {
    openForm();
    openInbox();
    // CollapseCard();
};

export default DOMpage;

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
    const btn = document.querySelectorAll("button");
    const inboxDiv = document.getElementById("inboxDiv");
    const todayDiv = document.getElementById("todayDiv");
    const nextWeekDiv = document.getElementById("nextWeekDiv");
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
        });
    });
};

const DOMpage = () => {
    openForm();
    openInbox();
};

export default DOMpage;

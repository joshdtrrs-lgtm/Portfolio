/* =========================
   LIGHT / DARK MODE
========================= */

function changeMode() {

    var modeButton =
        document.getElementById("modeButton");

    document.body.classList.toggle("light-mode");


    if (document.body.classList.contains("light-mode")) {

        modeButton.innerHTML = "☾";

    } else {

        modeButton.innerHTML = "☀";

    }

}



/* =========================
   ASK ME BOT
========================= */

function answerQuestion(question) {

    var answer =
        document.getElementById("answer");


    /* ABOUT JOSH */

    if (question == "about") {

        answer.innerHTML =
            "<strong>ABOUT JOSH</strong>" +
            "<br><br>" +
            "Josh De Torres is a 2nd year " +
            "Computer Science student interested " +
            "in programming, web development, " +
            "and technology.";

    }


    /* SKILLS */

    else if (question == "skills") {

        answer.innerHTML =
            "<strong>JOSH'S SKILLS</strong>" +
            "<br><br>" +
            "Josh's skills include HTML, CSS, " +
            "JavaScript, PHP, Python, and MySQL.";

    }


    /* FUTURE GOALS */

    else if (question == "goal") {

        answer.innerHTML =
            "<strong>FUTURE GOALS</strong>" +
            "<br><br>" +
            "Josh wants to continue improving " +
            "his programming skills and learn " +
            "more about web development, software " +
            "development, and other technologies.";

    }


    /* ACHIEVEMENT */

    else if (question == "achievement") {

        answer.innerHTML =
            "<strong>JOSH'S ACHIEVEMENT</strong>" +
            "<br><br>" +
            "Josh created an Admin Payroll System " +
            "using PHP, MySQL, HTML, and CSS.";

    }


    /* PROJECT */

    else if (question == "project") {

        answer.innerHTML =
            "<strong>JOSH'S PROJECT</strong>" +
            "<br><br>" +
            "Josh created an Admin Payroll System " +
            "using PHP, MySQL, HTML, and CSS. " +
            "The system manages employee information, " +
            "departments, positions, loans, payroll, " +
            "and reports.";

    }

}



/* =========================
   CONTACT FORM
========================= */

function sendMessage(event) {

    event.preventDefault();


    var name =
        document.getElementById("contactName").value;


    var formMessage =
        document.getElementById("formMessage");


    formMessage.innerHTML =
        "Message received. Thank you, " +
        name +
        "!";


    document.getElementById("contactName").value = "";

    document.getElementById("contactEmail").value = "";

    document.getElementById("message").value = "";

}
var page1 = document.querySelector(".Page_1");

var page2 = document.querySelector(".Page_2");

var page3 = document.querySelector(".Page_3");

var page4 = document.querySelector(".Page_4");

var page5 = document.querySelector(".Page_5");

var page6 = document.querySelector(".Page_6");

var page7 = document.querySelector(".Page_7");

var startButton = document.querySelector(".button0");

var question1buttons = document.querySelectorAll(".answers1");

var question2buttons = document.querySelectorAll(".answers2");

var question3buttons = document.querySelectorAll(".answers3");

var question4buttons = document.querySelectorAll(".answers4");

var question5buttons = document.querySelectorAll(".answers5");

var lastButton = document.querySelector(".toStart");

var score = 0;

var save = document.querySelector(".toSave");

var initials = document.querySelector("#initials");

var scores = JSON.parse(localStorage.getItem("Highscores")) || []

var scoreInTheCorner = document.querySelector("div")

var resetScore = document.querySelector(".resetScore")

function goToQuestion1(event) {
    if(event.target.value == "true") {
        score++;
    } else {
        score--;
    }
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
    return;
}

function goToQuestion2(event) {
    if(event.target.value == "true") {
        score++;
    } else {
        score--;
    }
    console.log(score)
    page2.classList.add("hidden");
    page3.classList.remove("hidden");
    return;
}

function goToQuestion3(event) {
    if(event.target.value == "true") {
        score++;
    } else {
        score--;
    }
    page3.classList.add("hidden");
    page4.classList.remove("hidden");
}

function goToQuestion4(event) {
    if(event.target.value == "true") {
        score++;
    } else {
        score--;
    }
    page4.classList.add("hidden");
    page5.classList.remove("hidden");
}

function goToQuestion5(event) {
    if(event.target.value == "true") {
        score++;
    } else {
        score--;
    }
    page5.classList.add("hidden");
    page6.classList.remove("hidden");
}

function setScoreToNothing() {
    localStorage.setItem("Highscores",JSON.stringify([]));
}

function goToLastPage() {
    page6.classList.add("hidden");
    page7.classList.remove("hidden");
}

function backToStart() {
    page7.classList.add("hidden");
    page1.classList.remove("hidden");
}

function saveScore() {
    var userInfo = {
        initials:initials.value,
        score:score
    } 
    console.log(userInfo)
    scores.push(userInfo)
    localStorage.setItem("Highscores",JSON.stringify(scores))
}

startButton.addEventListener("click", goToQuestion1);

for(var i=0;i < question1buttons.length;i++) {
    question1buttons[i].addEventListener("click", goToQuestion2);
}

for(var i=0;i < question1buttons.length;i++) {
    question2buttons[i].addEventListener("click", goToQuestion3);
}

for(var i=0;i < question1buttons.length;i++) {
    question3buttons[i].addEventListener("click", goToQuestion4);
}

for(var i=0;i < question1buttons.length;i++) {
    question4buttons[i].addEventListener("click", goToQuestion5);
}

for(var i=0;i < question1buttons.length;i++) {
    question5buttons[i].addEventListener("click", goToLastPage);
}

lastButton.addEventListener("click", backToStart);

save.addEventListener("click", saveScore);

var scores = JSON.parse(localStorage.getItem("Highscores")) || []

// localStorage.setItem("Highscores",JSON.stringify([])) // 

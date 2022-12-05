var page1 = document.querySelector(".Page_1");

var page2 = document.querySelector(".Page_2");

var page3 = document.querySelector(".Page_3");

var page4 = document.querySelector(".Page_4");

var page5 = document.querySelector(".Page_5");

var page6 = document.querySelector(".Page_6");

var startButton = document.querySelector(".button0");

var question1buttons = document.getElementById("#answers1")

function question1() {
    page1.remove();
    page2.setAttribute("class","display");
    return;
}

function question2() {
    page2.remove();
    page3.setAttribute("class","display");
    return;
}

function question3() {}

function question4() {}

function question5() {}

startButton.addEventListener("click", question1);

question1buttons.addEventListener("click", question2);


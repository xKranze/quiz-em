var wrapper = document.querySelector(".wrapper");
var highscore = [];
var initials = [];
var currentScore = 0;
var state = 0;
var questions = {
    q1: {
        question:"Commonly used data types DO NOT Include:",
        a1:"1. strings",
        a2:"2. booleans",
        a3:"3. alerts",
        a4:"4. numbers",
    }, 
    q2: {
        question:"The condition in an if/else statement is enclosed with _____.",
        a1:"1. quotes",
        a2:"2. curly brackets",
        a3:"3. parenthesis",
        a4:"4. square brackets",
    }, 
    q3: {
        question:"String values must be enclosed within _____ when being assigned to variables.",
        a1:"1. commas",
        a2:"2. curly brackets",
        a3:"3. quotes",
        a4:"4. parenthesis",
    }, 
    q4: {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        a1:"1. JavaScript",
        a2:"2. terminal/bash",
        a3:"3. for loops",
        a4:"4. console.log",
    }, 
    q5: {
        question:"Arrays in JavaScript can be used to store _____.",
        a1:"1. numbers and strings",
        a2:"2. other arrays",
        a3:"3. booleans",
        a4:"4. all of the above",
    }
};

function viewHighScore(){
    currentScore = 0;
    state = 0;
    document.getElementById("timer").textContent = 0;
    document.getElementById("navbar").hidden = true;
    document.getElementById("mainText").textContent = "High Scores";

    document.getElementById("startText").hidden = true;
    document.getElementById("startButton").hidden = true;
    document.getElementById("a1").hidden = true;
    document.getElementById("a2").hidden = true;
    document.getElementById("a3").hidden = true;
    document.getElementById("a4").hidden = true;
    document.getElementById("result").hidden = true;
    document.getElementById("initialsText1").hidden = true;
    document.getElementById("initialsText2").hidden = true;
    document.getElementById("initials").hidden = true;
    document.getElementById("initialsSubmit").hidden = true;


    for(var i = 0; i < highscore.length; i++){
        document.getElementById("scoreList").textContent += initials[i]+": "+highscore[i] + ", ";
    }
    document.getElementById("scoreList").hidden = false;
    document.getElementById("goBack").hidden = false;
    document.getElementById("clearHighScore").hidden = false;
}

function setTime(x,y,z){
    var timeInterval = setInterval(runTime(), 1000);
    console.log(x);

}

function startQuiz(){
    // Hide start panel
    document.getElementById("startText").hidden = true;
    document.getElementById("startButton").hidden = true;

    // Show question panel
    document.getElementById("mainText").textContent = questions.q1.question;
    document.getElementById("a1").textContent = questions.q1.a1;
    document.getElementById("a2").textContent = questions.q1.a2;
    document.getElementById("a3").textContent = questions.q1.a3;
    document.getElementById("a4").textContent = questions.q1.a4;

    document.getElementById("a1").hidden = false;
    document.getElementById("a2").hidden = false;
    document.getElementById("a3").hidden = false;
    document.getElementById("a4").hidden = false;
    state = 1;
}

function answerQuestion1(){
    answerQuestion(1);
}

function answerQuestion2(){
    answerQuestion(2);
}

function answerQuestion3(){
    answerQuestion(3);
}

function answerQuestion4(){
    answerQuestion(4);
}

function answerQuestion(answer){
    if(state == 1){
        document.getElementById("mainText").textContent = questions.q2.question;
        document.getElementById("a1").textContent = questions.q2.a1;
        document.getElementById("a2").textContent = questions.q2.a2;
        document.getElementById("a3").textContent = questions.q2.a3;
        document.getElementById("a4").textContent = questions.q2.a4;
        if(answer == 3){
            currentScore++;
        }else{

        }
        state++;
    }else if(state == 2){
        document.getElementById("mainText").textContent = questions.q3.question;
        document.getElementById("a1").textContent = questions.q3.a1;
        document.getElementById("a2").textContent = questions.q3.a2;
        document.getElementById("a3").textContent = questions.q3.a3;
        document.getElementById("a4").textContent = questions.q3.a4;
        if(answer == 3){
            currentScore++;
        }else{

        }
        state++;
    }else if(state == 3){
        document.getElementById("mainText").textContent = questions.q4.question;
        document.getElementById("a1").textContent = questions.q4.a1;
        document.getElementById("a2").textContent = questions.q4.a2;
        document.getElementById("a3").textContent = questions.q4.a3;
        document.getElementById("a4").textContent = questions.q4.a4;
        if(answer == 4){
            currentScore++;
        }else{

        }
        state++;
    }else if(state == 4){
        document.getElementById("mainText").textContent = questions.q5.question;
        document.getElementById("a1").textContent = questions.q5.a1;
        document.getElementById("a2").textContent = questions.q5.a2;
        document.getElementById("a3").textContent = questions.q5.a3;
        document.getElementById("a4").textContent = questions.q5.a4;
        if(answer == 3){
            currentScore++;
        }else{

        }
        state++;
    }else if(state == 5){
        if(answer == 4){
            currentScore++;
        }else{

        }
        document.getElementById("a1").hidden = true;
        document.getElementById("a2").hidden = true;
        document.getElementById("a3").hidden = true;
        document.getElementById("a4").hidden = true;

        document.getElementById("mainText").textContent = "All Done!";
        document.getElementById("initialsText1").textContent = "Your final score is " + currentScore + ".";
        document.getElementById("initials").textContent = "";

        document.getElementById("initialsText1").hidden = false;
        document.getElementById("initialsText2").hidden = false;
        document.getElementById("initials").value = "";
        document.getElementById("initials").hidden = false;
        document.getElementById("initialsSubmit").hidden = false;
        state= 0;
    }
}

function enterInitials(){
    if(document.getElementById("initials").value.length > 0){
        initials.push(document.getElementById("initials").value);
        highscore.push(currentScore);
        currentScore = 0;

        document.getElementById("navbar").hidden = true;
        document.getElementById("mainText").textContent = "High Scores";
        document.getElementById("initialsText1").hidden = true;
        document.getElementById("initialsText2").hidden = true;
        document.getElementById("initials").hidden = true;
        document.getElementById("initialsSubmit").hidden = true;


        for(var i = 0; i < highscore.length; i++){
            document.getElementById("scoreList").textContent += initials[i]+": "+highscore[i] + ", ";
        }
        document.getElementById("scoreList").hidden = false;
        document.getElementById("goBack").hidden = false;
        document.getElementById("clearHighScore").hidden = false;
    }
}

function clearHighScores(){
    highscore = [];
    initials = [];
    goBack();
}

function goBack(){
    document.getElementById("navbar").hidden = false;
    document.getElementById("scoreList").textContent = "";
    document.getElementById("scoreList").hidden = true;
    document.getElementById("goBack").hidden = true;
    document.getElementById("clearHighScore").hidden = true;
    document.getElementById("mainText").textContent = "Coding Quiz Challenge";
    document.getElementById("startText").hidden = false;
    document.getElementById("startButton").hidden = false;
}
var viewHighScoreButton = document.getElementById("viewHighScore");
var startQuizButton = document.getElementById("startButton");
var a1Button = document.getElementById("a1");
var a2Button = document.getElementById("a2");
var a3Button = document.getElementById("a3");
var a4Button = document.getElementById("a4");
var initialsSubmitButton = document.getElementById("initialsSubmit");
var goBackButton = document.getElementById("goBack");
var clearHighScoreButton = document.getElementById("clearHighScore");
viewHighScoreButton.addEventListener("click", viewHighScore);
startQuizButton.addEventListener("click", startQuiz);
a1Button.addEventListener("click", answerQuestion1);
a2Button.addEventListener("click", answerQuestion2);
a3Button.addEventListener("click", answerQuestion3);
a4Button.addEventListener("click", answerQuestion4);
initialsSubmitButton.addEventListener("click", enterInitials);
goBackButton.addEventListener("click", goBack);
clearHighScoreButton.addEventListener("click", clearHighScores);
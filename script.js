var highscore = [];
var initials = [];
var state = 0;
var timer = 75;
var timeInterval;
const questions = {
    q1: {
        question: "Commonly used data types DO NOT Include:",
        a1: "1. strings",
        a2: "2. booleans",
        a3: "3. alerts",
        a4: "4. numbers",
    },
    q2: {
        question: "The condition in an if/else statement is enclosed with _____.",
        a1: "1. quotes",
        a2: "2. curly brackets",
        a3: "3. parenthesis",
        a4: "4. square brackets",
    },
    q3: {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        a1: "1. commas",
        a2: "2. curly brackets",
        a3: "3. quotes",
        a4: "4. parenthesis",
    },
    q4: {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a1: "1. JavaScript",
        a2: "2. terminal/bash",
        a3: "3. for loops",
        a4: "4. console.log",
    },
    q5: {
        question: "Arrays in JavaScript can be used to store _____.",
        a1: "1. numbers and strings",
        a2: "2. other arrays",
        a3: "3. booleans",
        a4: "4. all of the above",
    }
};
var getId = document.getElementById
var timerEl = document.getElementById("timer");
//var El = document.getElementById("");

// Activates when view high score is clicked on top left of screen.
function viewHighScore() {
    // Reset state of the page
    state = 0;
    timer = 75;
    stopTimer();

    timerEl.textContent = "Timer: " + timer;
    document.getElementById("navbar").hidden = true;
    document.getElementById("mainText").textContent = "High Scores";

    // Hides all other pages just in case
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

    // Update scoreList display and show score page
    for (var i = 0; i < highscore.length; i++) {
        document.getElementById("scoreList").textContent += initials[i] + ": " + highscore[i] + ", ";
    }
    document.getElementById("scoreList").hidden = false;
    document.getElementById("goBack").hidden = false;
    document.getElementById("clearHighScore").hidden = false;
}

// Activates when Start quiz is clicked. Displays first question.
function startQuiz() {
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

    //Start timer 
    startTimer();
}

// Starts the timer when the quiz begins
function startTimer() {
    timeInterval = setInterval(function () {
        // If timer is 0 or negative, stop the timer
        if (timer <= 0) {
            stopTimer();

            // If timer is positive, update timer
        } else {
            timer--;
            document.getElementById("timer").textContent = "Timer: " + timer;
        }
    }, 1000);
}

// Stops the timer, hides questions, displays results page.
function stopTimer() {
    // Stops the timer function
    clearInterval(timeInterval);

    // Hide the question pages
    document.getElementById("a1").hidden = true;
    document.getElementById("a2").hidden = true;
    document.getElementById("a3").hidden = true;
    document.getElementById("a4").hidden = true;
    document.getElementById("result").hidden = true;

    // Display the result page
    document.getElementById("mainText").textContent = "All Done!";
    document.getElementById("initialsText1").textContent = "Your final score is " + timer + ".";
    document.getElementById("initials").textContent = "";

    document.getElementById("initialsText1").hidden = false;
    document.getElementById("initialsText2").hidden = false;
    document.getElementById("initials").value = "";
    document.getElementById("initials").hidden = false;
    document.getElementById("initialsSubmit").hidden = false;
    state = 0;
}

function answerQuestion(answer) {
    // Handles question 1 results and displays question 2
    if (state == 1) {
        document.getElementById("mainText").textContent = questions.q2.question;
        document.getElementById("a1").textContent = questions.q2.a1;
        document.getElementById("a2").textContent = questions.q2.a2;
        document.getElementById("a3").textContent = questions.q2.a3;
        document.getElementById("a4").textContent = questions.q2.a4;
        document.getElementById("result").hidden = false;
        if (answer == 3) {
            document.getElementById("result").textContent = "Correct!";
        } else {
            document.getElementById("result").textContent = "Wrong!";
            timer -= 10;
            document.getElementById("timer").textContent = "Timer: " + timer;
        }
        state++;

        // Handles question 2 results and displays question 3
    } else if (state == 2) {
        document.getElementById("mainText").textContent = questions.q3.question;
        document.getElementById("a1").textContent = questions.q3.a1;
        document.getElementById("a2").textContent = questions.q3.a2;
        document.getElementById("a3").textContent = questions.q3.a3;
        document.getElementById("a4").textContent = questions.q3.a4;
        if (answer == 3) {
            document.getElementById("result").textContent = "Correct!";
        } else {
            document.getElementById("result").textContent = "Wrong!";
            timer -= 10;
            document.getElementById("timer").textContent = "Timer: " + timer;
        }
        state++;

        // Handles question 3 results and displays question 4
    } else if (state == 3) {
        document.getElementById("mainText").textContent = questions.q4.question;
        document.getElementById("a1").textContent = questions.q4.a1;
        document.getElementById("a2").textContent = questions.q4.a2;
        document.getElementById("a3").textContent = questions.q4.a3;
        document.getElementById("a4").textContent = questions.q4.a4;
        if (answer == 4) {
            document.getElementById("result").textContent = "Correct!";
        } else {
            document.getElementById("result").textContent = "Wrong!";
            timer -= 10;
            document.getElementById("timer").textContent = "Timer: " + timer;
        }
        state++;

        // Handles question 4 results and displays question 5
    } else if (state == 4) {
        document.getElementById("mainText").textContent = questions.q5.question;
        document.getElementById("a1").textContent = questions.q5.a1;
        document.getElementById("a2").textContent = questions.q5.a2;
        document.getElementById("a3").textContent = questions.q5.a3;
        document.getElementById("a4").textContent = questions.q5.a4;
        if (answer == 3) {
            document.getElementById("result").textContent = "Correct!";
        } else {
            document.getElementById("result").textContent = "Wrong!";
            timer -= 10;
            document.getElementById("timer").textContent = "Timer: " + timer;
        }
        state++;

        // Handles question 5 results, stops timer, and displays results
    } else if (state == 5) {
        if (answer == 4) {
            document.getElementById("result").textContent = "Correct!";
        } else {
            document.getElementById("result").textContent = "Wrong!";
            timer -= 10; //timer = timer - 10;
            document.getElementById("timer").textContent = "Timer: " + timer;
        }
        stopTimer();
    }
}

// Activates when initials are entered after the quiz
function enterInitials() {
    // Ensures initials are not empty
    if (document.getElementById("initials").value.length > 0) {
        //Updates the initials list and highscore list
        initials.push(document.getElementById("initials").value);
        highscore.push(timer);
        timer = 75;

        // Hides the results page
        document.getElementById("navbar").hidden = true;
        document.getElementById("initialsText1").hidden = true;
        document.getElementById("initialsText2").hidden = true;
        document.getElementById("initials").hidden = true;
        document.getElementById("initialsSubmit").hidden = true;

        // Displays the high score page
        document.getElementById("mainText").textContent = "High Scores";
        for (var i = 0; i < highscore.length; i++) {
            document.getElementById("scoreList").textContent += initials[i] + ": " + highscore[i] + ", ";
        }
        document.getElementById("scoreList").hidden = false;
        document.getElementById("goBack").hidden = false;
        document.getElementById("clearHighScore").hidden = false;
    }
}

// Empties the highscore list, initials list, and displays the start quiz page
function clearHighScores() {
    highscore = [];
    initials = [];
    goBack();
}

// Displays the start quiz page
function goBack() {
    document.getElementById("navbar").hidden = false;
    timer = 75;
    document.getElementById("timer").textContent = "Timer: " + timer;
    document.getElementById("scoreList").textContent = "";
    document.getElementById("scoreList").hidden = true;
    document.getElementById("goBack").hidden = true;
    document.getElementById("clearHighScore").hidden = true;
    document.getElementById("mainText").textContent = "Coding Quiz Challenge";
    document.getElementById("startText").hidden = false;
    document.getElementById("startButton").hidden = false;
}

// Adds eventListeners to the buttons
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
a1Button.addEventListener("click", function () {
    answerQuestion(1);
});
a2Button.addEventListener("click", function () {
    answerQuestion(2);
}
);
a3Button.addEventListener("click", function () {
    answerQuestion(3);
}
);
a4Button.addEventListener("click", function () {
    answerQuestion(4);
}
);
initialsSubmitButton.addEventListener("click", enterInitials);
goBackButton.addEventListener("click", goBack);
clearHighScoreButton.addEventListener("click", clearHighScores);


//set attributes to pTags to style them
var ansBox = document.getElementsByClassName("buttons");
var pTags = document.querySelectorAll("p");
console.log(pTags)
//for loop to target the children in pTags
for (var i = 0; i < pTags.length; i++) {
    pTags[i].children[0].setAttribute("style", "background-color: #d3cce6;border-radius: 10px;padding: 10px;width: 25%;margin: 5px;font-size:20px;");
}

ansBox[0].setAttribute("style", "text-align:center;");
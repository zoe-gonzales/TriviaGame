
// GLOBAL VARIABLES
// Array that includes all game questions and possible answers as objects
var QandAs = [
    // Question 1
    {   question: "Which planet in our solar system is the windiest?",
        a1: "Earth",
        a2: "Saturn",
        a3: "Venus",
        a4: "Neptune",
        correctAnswer: "Neptune",
        text: "Neptune’s winds can reach as high as 1,600 miles per hour.",
        image: "./assets/images/neptune.gif"
    },
    // Question 2
    {   question: "One of the planets in our solar system is lighter than water. Which one is it?",
        a1: "Uranus",
        a2: "Saturn",
        a3: "Jupiter",
        a4: "Neptune",
        correctAnswer: "Saturn",
        image: "./assets/images/saturn.gif"
    },
    // Question 3
    {   question: "What percent of the Universe is made of dark energy and dark matter (everything not including stars and planets)?",
        a1: "99%", 
        a2: "95%",
        a3: "90%",
        a4: "80%",
        correctAnswer: "95%",
        image: "./assets/images/dark-matter.jpg"
    },
    // Question 4
    {   question: "What kind of star is the sun?",
        a1: "Yellow Dwarf",
        a2: "White Dwarf",
        a3: "Red Giant",
        a4: "Neutron",
        correctAnswer: "Yellow Dwarf",
        image: "./assets/images/sun.gif"
    },
    // Question 5
    {   question: "What does the Oort Cloud produce?",
        a1: "Asteriods",
        a2: "Meteorites",
        a3: "Meteors",
        a4: "Comets",
        correctAnswer: "Comets",
        text: "The Oort Cloud contains comets that take more than 200 years to orbit the Sun.",
        image: "./assets/images/comet.jpg"
    },
    // Question 6
    {   question: "All of the stars in the Milky Way (including the Sun) orbit around a supermassive black hole that is ___ times as massive as our sun.",
        a1: "500,000",
        a2: "1.5 million",
        a3: "4 million",
        a4: "7 million",
        correctAnswer: "4 million",
        image: "./assets/images/black-hole.jpg"
    },
    // Question 7
    {   question: "The ancient ___ named our galaxy the “Milky Way.”",
        a1: "Greeks",
        a2: "Romans",
        a3: "Egyptians",
        a4: "Arabs",
        correctAnswer: "Romans",
        image: "./assets/images/romans.jpg"
    },
    // Question 8
    {   question: "Which of these spacecraft has traveled beyond the boundary of our solar system?",
        a1: "New Horizons",
        a2: "Voyager 1",
        a3: "Pioneer 10",
        a4: "Pioneer 11",
        correctAnswer: "Voyager 1",
        text: "Voyager 1 passed beyond our solar system in 2012 and Voyager 2 did the same in 2018.",
        image: "./assets/images/voyager.gif"
    },
    // Question 9
    {   question: "The planet Mercury is named after the Roman god of",
        a1: "War",
        a2: "Lightning",
        a3: "Seas",
        a4: "Commerce",
        correctAnswer: "Commerce",
        image: "./assets/images/mercury.png"
    },
    // Question 10
    {   question: "What lies beyond our solar system?",
        a1: "A whole lot of nothing",
        a2: "Other stars, planets, and galaxies",
        a3: "Plenty of detectable, visible planets capable of supporting life",
        a4: "A & B",
        correctAnswer: "A & B",
        image: "./assets/images/beyond.gif"
    },
];
// Correct answers - counter var starts at 0
var correctAnswers = 0;
// Incorrect answers - counter var starts at 0
var incorrectAnswers = 0;
// Unanswered questions - counter var starts at 0
var unanswered = 0;
// Var set to time remaining to answer question - uses interval to count down
var timeRemaining = 20;
// var to hold interval of each question
var questionTimeout;
// Determines what question user is currently one
var currentQ = 0;
// Saves the user's answer
var userGuess;

// FUNCTIONS
// When function runs, updates DOM and sets interval for remaining time to answer question 
// Runs nextQuestion function if the user doesn't respond within the remaining time
function showQuestion() {
    if (currentQ === QandAs.length) {
        userResults();
    } else {
        var questionEl = $("#questionText");
        questionEl.addClass("question");
        var answer1El = $("#answer1Text");
        answer1El.attr("data-answer", QandAs[currentQ].a1);
        var answer2El = $("#answer2Text");
        answer2El.attr("data-answer", QandAs[currentQ].a2);
        var answer3El = $("#answer3Text");
        answer3El.attr("data-answer", QandAs[currentQ].a3);
        var answer4El = $("#answer4Text");
        answer4El.attr("data-answer", QandAs[currentQ].a4);
        // Removes start button
        $("#start-button").remove();
        // Adds text for first question to the game
        // Displays question and possible answers of first index in array. currentQ will increment in later function
        questionEl.text(QandAs[currentQ].question);
        answer1El.text(QandAs[currentQ].a1);
        answer2El.text(QandAs[currentQ].a2);
        answer3El.text(QandAs[currentQ].a3);
        answer4El.text(QandAs[currentQ].a4);   
        $("#time").text(`Time remaining for this question: ${timeRemaining}`);
        // Sets the remaining about of time left for this question to 20 seconds
        // Increments down by one each seconds
        // Shows the user how many seconds they have left on the div with id "time"
        questionTimeout = setInterval(function() {
                $("#time").text(`Time remaining for this question: ${timeRemaining}`);
                timeRemaining--;
                if (timeRemaining === 0 && userGuess === undefined) {
                    // unanswered increments
                    unanswered++;
                    clearInterval(questionTimeout);
                    // show result text
                    if (QandAs[currentQ].hasOwnProperty("text")) {
                        $(".answer, #time").empty();
                        $("#questionText").html(`Out of time! The correct answer was ${QandAs[currentQ].correctAnswer}. ${QandAs[currentQ].text} <br> <img src='${QandAs[currentQ].image}' >`);
                    } else {
                        $(".answer, #time").empty();
                        $("#questionText").html(`Out of time! The correct answer was ${QandAs[currentQ].correctAnswer}. <br> <img src='${QandAs[currentQ].image}' >`);
                    }
                    // After 5 seconds, automatically runs nextQuestion
                    setTimeout(nextQuestion, 5000);
                }
        }, 1000);    
    }
}

// When function runs, increments the currentQ value and reruns showQuestion
function nextQuestion() {
    userGuess = undefined;
    timeRemaining = 20;
    currentQ++;
    showQuestion();
}

// If condition inside showQuestion above (line 115) met, this function runs, displaying the user's results
function userResults() {
    $("#questionText").text(`Your results: `);
    // total of correct answers
    $("#answer1Text").text(`Correct answers: ${correctAnswers}`);
    // total of incorrect answers
    $("#answer2Text").text(`Incorrect answers: ${incorrectAnswers}`);
    // total of unanswered questions
    $("#answer3Text").text(`Unanswered questions: ${unanswered}`);
    $("#answer4Text, #time").empty();
    var playAgainButton = $("<button>");
    playAgainButton.attr("id", "reset-game");
    playAgainButton.addClass("btn btn-primary");
    playAgainButton.text(`Click to play again`);
    playAgainButton.insertAfter("#answer3Text");
}
        
// Runs when the use clicks on the div with id of reset-game is clicked
// Resets variables to start game again from question one
function reset() {
    // Resetting variables that increment to 0 & user guess to undefined
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
    timeRemaining = 20;
    currentQ = 0;
    userGuess = undefined;
    // Running function to show questions
    showQuestion();
    $("#reset-game").remove();
}

// CLICK EVENTS
// When clicked runs showQuestion, starts game
$("#start-button").on("click", showQuestion);
// When clicked runs function to show question
$("#game").on("click", ".answer", function() {
    userGuess = $(this).attr("data-answer");
    // if the the correct answer is clicked 
    if(userGuess === QandAs[currentQ].correctAnswer) {
        // correct answers var increments
        correctAnswers++;
        // clearing interval so countdown doesn't speed up
        clearInterval(questionTimeout);
        // show result text
        if (QandAs[currentQ].hasOwnProperty("text")) {
            $(".answer, #time").empty();
            $("#questionText").html(`That's right! ${QandAs[currentQ].text} <br> <img src='${QandAs[currentQ].image}' >`);
        } else {
            $(".answer, #time").empty();
            $("#questionText").html(`That's right! <br> <img src='${QandAs[currentQ].image}' >`);
        }
        // After 5 seconds, automatically runs nextQuestion
        setTimeout(nextQuestion, 5000);
        // else if incorrect answer is clicked
        } else if (userGuess !== QandAs[currentQ].correctAnswer) {
        // incorrect answers var increments
            incorrectAnswers++;
            // clearing interval so countdown doesn't speed up
            clearInterval(questionTimeout);
            // show result text
            if (QandAs[currentQ].hasOwnProperty("text")) {
                $(".answer, #time").empty();
                $("#questionText").html(`Good guess! The correct answer was ${QandAs[currentQ].correctAnswer}. ${QandAs[currentQ].text} <br> <img src='${QandAs[currentQ].image}' >`);

            } else {
                $(".answer, #time").empty();
                $("#questionText").html(`Good guess! The correct answer was ${QandAs[currentQ].correctAnswer}. <br> <img src='${QandAs[currentQ].image}' >`);
            }
            // After 5 seconds, automatically runs nextQuestion
            setTimeout(nextQuestion, 5000);        
        }
});
// When clicked runs reset function to play game again
$("#game").on("click", "#reset-game", reset);
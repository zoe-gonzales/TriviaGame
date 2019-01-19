
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
        text: "Neptune’s winds can reach as high as 1,600 miles per hour."
    },
    // Question 2
    {   question: "One of the planets in our solar system is lighter than water. Which one is it?",
        a1: "Uranus",
        a2: "Saturn",
        a3: "Jupiter",
        a4: "Neptune",
        correctAnswer: "Saturn",
        text: false
    },
    // Question 3
    {   question: "What percent of the Universe is made of dark energy and dark matter (everything not including stars and planets)?",
        a1: "99%", 
        a2: "95%",
        a3: "90%",
        a4: "80%",
        correctAnswer: "95%",
        text: false
    },
    // Question 4
    {   question: "What kind of star is the sun?",
        a1: "Yellow Dwarf",
        a2: "White Dwarf",
        a3: "Red Giant",
        a4: "Neutron",
        correctAnswer: "Yellow Dwarf",
        text: false
    },
    // Question 5
    {   question: "What does the Oort Cloud produce?",
        a1: "Asteriods",
        a2: "Meteorites",
        a3: "Meteors",
        a4: "Comets",
        correctAnswer: "Comets",
        text: "The Oort Cloud contains comets that take more than 200 years to orbit the Sun."
    },
    // Question 6
    {   question: "All of the stars in the Milky Way (including the Sun) orbit around a supermassive black hole that is ___ times as massive as our sun.",
        a1: "500,000",
        a2: "1.5 million",
        a3: "4 million",
        a4: "7 million",
        correctAnswer: "4 million",
        text: false
    },
    // Question 7
    {   question: "Who came up with the  name “Milky Way”?",
        a1: "Greeks",
        a2: "Romans",
        a3: "ancient Egyptians",
        a4: "ancient Arabs",
        correctAnswer: "Romans",
        text: false
    },
    // Question 8
    {   question: "Which of these spacecraft has gone beyond the boundary of our solar system?",
        a1: "New Horizons",
        a2: "Voyager 1",
        a3: "Pioneer 10",
        a4: "Pioneer 11",
        correctAnswer: "Voyager 1",
        text: "Voyager 1 passed beyond our solar system in 2012 and Voyager 2 joined it in 2018."
    },
    // Question 9
    {   question: "The planet Mercury is named after the Roman god of",
        a1: "War",
        a2: "Lightning",
        a3: "Seas",
        a4: "Commerce",
        correctAnswer: "Commerce",
        text: false
    },
    // Question 10
    {   question: "What lies beyond our solar system?",
        a1: "A whole lot of nothing",
        a2: "Other stars, planets, and galaxies",
        a3: "Plenty of detectable, visible planets capable of supporting life",
        a4: "A & B",
        correctAnswer: "A & B",
        text: false
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

// FUNCTIONS
// Function to show question
function showQuestion() {
    $("#start-button").remove();
    // Loops through array of questions
    for (var i=0; i < QandAs.length; i++) {
        // For each question, shows question and all possible answers
        $("#game").html(
            QandAs[0].question +
            "<br>" + 
            QandAs[0].a1 + 
            "<br>" + 
            QandAs[0].a2 + 
            "<br>" + 
            QandAs[0].a3 + 
            "<br>" + 
            QandAs[0].a4 +
            "<br>"
        );
        


        // $("#game").append(
        //     QandAs[i].question + 
        //     "<br>" + 
        //     QandAs[i].a1 + 
        //     "<br>" + 
        //     QandAs[i].a2 + 
        //     "<br>" + 
        //     QandAs[i].a3 + 
        //     "<br>" + 
        //     QandAs[i].a4 +
        //     "<br>"
        // );
    }
}
    
        
        // Remaining time counts down on interval
        // Show questions & possible answers in div with #game
        // if the the correct answer is clicked 
            // correct answers var increments
            // setTimeout on correct page - 5 sec
            // show correct page
        // else if incorrect answer is clicked            
            // incorrect answers var increments
            // setTimeout on correct page - 5 sec
            // show incorrect page
        // else if remaining time = 0
            // unanswered questions var increments
            // setTimeout on incorrect page - 5 sec
            // show incorrect page
    // If questions array is finished, shows results page with:
        // Message that game is over
        // # of correct answers
        // # of incorrect answers
        // # of unanswered questions
        
// Function to play again
    // When 'play again' is clicked
        // Empty #game div
        // Reset counter variables to 0
        // Run function to show questions

// TO START GAME
// Click event when user clicks div that says "start game"
$("#start-button").on("click", showQuestion);
// When clicked runs function to show question
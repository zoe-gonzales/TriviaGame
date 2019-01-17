
// GLOBAL VARIABLES
// Array that includes all game questions and possible answers as objects
// Correct answers - counter var starts at 0
// Incorrect answers - counter var starts at 0
// Unanswered questions - counter var starts at 0
// Var set to time remaining to answer question - uses interval to count down

// FUNCTIONS
// Function to show question
    // Loops through array of questions
        // For each question, shows question and all possible answers
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
// When clicked runs function to show question

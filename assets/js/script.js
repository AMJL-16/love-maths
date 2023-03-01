// wait for the DOM to finish loading before running the game 
// get the button elements and add event listeners to them

// 1st eventlistener: code to be executed when the page has finished loading 
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByName("button");

// So  we have five buttons in our  HTML file. four game buttons, one submit button 
// we are using the getElementsbyTagName method to return all of those  buttons.
    
    //  iterate through an array, more modern then using indexing we use let..of..
    for (let button of buttons) {
        button.addEventListener("click", function() {

        }))

    }
})

// 2nd eventlistener; code to be executed when the user clicks a button
//to run game
function runGame() {

}
// to check answer
function checkAnswer() {

}

// to calculate answer
function calculateCorrectAnswer() {

}

// to increment score
function incrementScore() {

}

// to increment wrong anwer
function incrementWrongAnswer() {

}

// addition question
function displayAdditionQuestion() {

}
// subtract question
function displaySubtractQuestion() {

}
// multiply question
function displayMultiplyQuestion() {

}
// division question
function displayDivideQuestion() {

}
// wait for the DOM to finish loading before running the game 
// get the button elements and add event listeners to them

// 1st eventlistener: code to be executed when the page has finished loading 
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

// So  we have five buttons in our  HTML file. four game buttons, one submit button 
// we are using the getElementsbyTagName method to return all of those  buttons.
    
    //  iterate through an array, more modern then using indexing we use let..of..
    for (let button of buttons) {  // 2nd eventlistener; code to be executed when the user clicks a button
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })

    }
})

//to run game

/**
 *  The main game "loop", called when the script is first loaded
 *  and after the user's asnwer has been processed
 */
function runGame() {
    // creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

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
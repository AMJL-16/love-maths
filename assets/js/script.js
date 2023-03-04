// wait for the DOM to finish loading before running the game 
// get the button elements and add event listeners to them

// 1st eventlistener: code to be executed when the page has finished loading 
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

// So  we have five buttons in our  HTML file. four game buttons, one submit button 
// we are using the getElementsbyTagName method to return all of those  buttons.
    
    //  iterate through an array, more modern then using indexing we use let..of..
    for (let button of buttons) {  // 2nd eventlistener; code to be executed when the user clicks a button
        // make some changes to both of our event listeners.
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        }) // our default game is an addition  game to start as soon as the page is loaded.  
           /*  we need to  add that to our dom content loaded event listener.
               So inside that event listener  but outside of the for loop 
               we're going to run game and the  game type is going to be addition.  
           */ 
    }

    runGame("addition");
})

//to run game

/**
 *  The main game "loop", called when the script is first loaded
 *  and after the user's asnwer has been processed
 */
function runGame(gameType) {
    // creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivideQuestion(num1, num2);
    }else {  /* we're also going to use  the JavaScript throw keyword.
    This throw statement will stop the game  from running and whatever we supply as  
    an error message here it will print  that in the console for debugging.   */
        alert(`unknown gwm type: ${gameType}`); 
        throw `unknown game type: ${gameType}. Aborting!`;
    }

}

// to check answer

/** 
 * what needs to go in our currently  empty check answer function?
 *  we need to get the user's guess.  
 * checks the answer agaisnt the first element in
 * the returned calculateCorrectAnswer array
*/
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}

// to calculate answer

/**
 * gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById(`operand1`).innerText);
    let operand2 = parseInt(document.getElementById(`operand2`).innerText);
    let operator = document.getElementById(`operator`).innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
         return [operand1 * operand2, "multiply"];
    } else {
        alert(`Uninmplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

// to increment score

/**
 * gets the current score from the DOM and increments it by 1jj
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

// to increment wrong anwer

/**
 * gets the current tally of incorrect answers from the DOM and increments it by 1jj
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

// addition question
function displayAdditionQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

// subtract question
function displaySubtractQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "-";

}
// multiply question
function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";

}
// division question
function displayDivideQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";

}
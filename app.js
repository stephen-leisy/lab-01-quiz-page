// import functions and grab DOM elements
import { answerIsYes, getTestPercentage } from './utils.js';

// initialize state
const quizButton = document.getElementById('quiz-button');
const displaySpace = document.getElementById('secret-magic-space');
const testPercentDisplay = document.getElementById('percentage-spot')

// set event listeners to update state and DOM


quizButton.addEventListener('click', () => {
    alert('Welcome to the made-up Sloth knowledge quiz!');

    const confirmation = confirm('would you like to begin the quiz?');

    if (!confirmation) return;

    let numberOfCorrectAnswers = 0;
    const numberOfQuestions = 3;

    const firstName = prompt('What is your first name, pal?');
    const lastName = prompt('Say, what be your last name, my new aquaintance?');

    const firstQuestion = prompt('If you stacked sloths on top of each other would they maybe reach the moon and back? Yes or No.');

    if (answerIsYes(firstQuestion)) numberOfCorrectAnswers++;

    const secondQuestion = prompt('Do sloths love banana cream pie? Yes or No.');

    if (!answerIsYes(secondQuestion)) numberOfCorrectAnswers++;

    const thirdQuestion = prompt('Do sloths make eye contact to read human thoughts? Yes or No.');

    if (answerIsYes(thirdQuestion)) ++numberOfCorrectAnswers;




    displaySpace.textContent = `You are a human named ${firstName} ${lastName} and you answered ${numberOfCorrectAnswers} questions correctly with your nifty human brain.`;

    const testPercent = getTestPercentage(numberOfCorrectAnswers, numberOfQuestions);
    testPercentDisplay.textContent = `${testPercent} %`;
});
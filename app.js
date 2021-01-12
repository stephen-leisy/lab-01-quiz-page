// import functions and grab DOM elements
import { AnswerIsYes } from './utils.js';

// initialize state
const quizButton = document.getElementById('quiz-button');
const displaySpace = document.getElementById('secret-magic-space');
// set event listeners to update state and DOM

quizButton.addEventListener('click', () => {
    alert('Welcome to the made-up Sloth knowledge quiz!');

    const confirmation = confirm('would you like to begin the quiz?');

    if (!confirmation) return;

    let numberOfCorrectAnswers = 0;

    const firstName = prompt('What is your first name, pal?');
    const lastName = prompt('Say, what be your last name, my new aquaintance?');

    const firstQuestion = prompt('If you stacked sloths on top of each other would they maybe reach the moon and back? Yes or No.');

    if (AnswerIsYes(firstQuestion)) numberOfCorrectAnswers++;

    const secondQuestion = prompt('Do sloths love banana cream pie? Yes or No.');

    if (!AnswerIsYes(secondQuestion)) numberOfCorrectAnswers++;

    const thirdQuestion = prompt('Do sloths make eye contact to read human thoughts? Yes or No.');

    if (AnswerIsYes(thirdQuestion)) ++numberOfCorrectAnswers;


    displaySpace.textContent = `You are a human named ${firstName} ${lastName} and you answered ${numberOfCorrectAnswers} questions correctly with your nifty human brain.`;


});
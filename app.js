// import functions and grab DOM elements
const quizButton = document.getElementById('quiz-button');
const displaySpace = document.getElementById('secret-magic-space');

// initialize state
console.log(quizButton);
console.log(displaySpace);
// set event listeners to update state and DOM

quizButton.addEventListener('click', () => {
    alert('Welcome to the made-up Sloth knowledge quiz!');

    const confirmation = confirm('would you like to begin the quiz?');

    if (!confirmation) return;

    let numberOfCorrectAnswers = 0;

    const firstName = prompt('What is your first name, pal?');
    const lastName = prompt('Say, what be your last name, my new aquaintance?');

    console.log(firstName);
    console.log(lastName);


    const firstQuestion = prompt('If you stacked sloths on top of each other would they maybe reach the moon and back? Yes or No.');

    if (firstQuestion.charAt(0).toUpperCase() === "Y") {
        console.log('You got it!');
    } else {
        console.log('nope!');
    }

    prompt('Do sloths love banana cream pie? Yes or No.');

    if (firstQuestion.charAt(0).toUpperCase() === "Y") {
        console.log('You got it!');
    } else {
        console.log('nope');
    }

    prompt('Do sloths make eye contact to read human thoughts? Yes or No.');

    if (firstQuestion.charAt(0).toUpperCase() === "Y") {
        console.log('You got it!');
    } else {
        console.log('no way');
    }


})
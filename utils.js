
export function answerIsYes(answerString) {
    return answerString.charAt(0).toUpperCase() === 'Y';
    console.log('yes');

};

export function testPercentage(correct, questions) {
    return Math.round((correct / questions) * 100);

    // Math.round(percentage) = scoreAsPercentage;

};
console.log(testPercentage(2, 3));


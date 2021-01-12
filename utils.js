
export function answerIsYes(answerString) {
    return answerString.charAt(0).toUpperCase() === 'Y';
    console.log('yes');

};

export function getTestPercentage(correct, questions) {
    return Math.round((correct / questions) * 100);



};



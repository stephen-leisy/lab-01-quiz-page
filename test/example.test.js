// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { AnswerIsYes } from '../utils.js';

const test = QUnit.test;

test('it should return true if the word starts with y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = AnswerIsYes('yesh');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return false if the word starts with n', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = AnswerIsYes('nah');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
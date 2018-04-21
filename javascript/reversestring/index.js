// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

reverse('asdf');

module.exports = reverse;


// const splitString = str.split("");
// const reverseArray = splitString.reverse();
// const joinArray = reverseArray.join("");

// return joinArray;


// let reversed = '';

// for (let character of str) {
//     reversed = character + reversed;
// }
// return reversed;


// return str.split('').reduce((reversed, character) => {
//     return character + reversed; 
// }, '');


// return str.split('').reduce((rev, char) => char + rev, '');

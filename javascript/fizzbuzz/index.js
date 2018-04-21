/* 
    Write a program that console logs the numbers
    from 1 to n. But for multilpes of three print
    "fizz" instead of the number and for multilpes
    of five print "buzz"

    For numbers which are multiples of both three 
    and five print "fizzbuzz"

    fizzBuzz(5);
    1
    2
    fizz
    4
    buzz
*/

// test if a given number:  11 % 3 === 0

// 1. make sure we can iterate from 1 to n
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
         // is number is multiple of 3 and 5.
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')

        // is number a multiple of 3?
        } else if (i % 3 === 0) {
            console.log('fizz')

        // is number multiple of 5?
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i);
        }
    }
}

module.export = fizzBuzz
console.log('Looping a triangle') // log statement declaring the exercise
for (let i = 'x'; i.length < 11; i += 'x') { // for loop that declares a var 'x' and runs until the length is less than 11 adding a 'x' each time
    console.log(i) // log statement that prints the var i
} // end of for loop

console.log('\n') // log statement which adds an extra space
console.log('FizzBuzz') // log statement declaring the exercise
for (let i = 1; i < 101; i++) { // for loop that counts from 1 to 100 
    if (i % 4 == 0 && i % 7 == 0) { // if statement that checks if modulus is equal to 0 for 4 and 7
        console.log('Divisible by both 4 and 7'); // log statement that prints if modulus is equal to 0 for 4 and 7
    } else if (i % 7 == 0){ // if statement that checks if modulus is equal to 0 for 7
        console.log('Divisible by 7 but not 4'); // log statement that prints if modulus is equal to 0 for 7
    } else if (i % 4 == 0) { // if statement that checks if modulus is equal to 0 for 4
        console.log('Divisible by 4'); // log statement that prints if modulus is equal to 0 for 4
    } else { // else statement if everything else is not valid
        console.log(i) // log statement that prints the current number
    } // end of if statement
} // end of for loop

console.log('\n') // log statement which adds an extra space
console.log('n-by-n Grid') // log statement declaring the exercise
const size = 8 // declares a var for how many lines we should print
for (let i = 0; i < size; i++) {
    if (i % 2 == 0) { // if statement that uses modulus to determine if the number is even
        console.log(' * * * *') //log statement that prints if number is even
    } else { // else statement that prints if the number is odd
        console.log('* * * * ') //log statement that prints if number is odd
    } // end of if statement
} // end of for loop
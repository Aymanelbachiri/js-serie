//Greetings
function greet(name) {
    console.log('hello ' + name);
}
greet('ana')

// Exercise 2: Sum of Numbers
function sumNumbers(array) {
    let sum = 0
    array.forEach(element => {
        sum += parseInt(element)
    });
    console.log(sum);
}
sumNumbers([1, 3, 4, 6, 3, 2])

// Exercise 4: Even or Odd
function isEven(number) {
    if (number % 2 === 0) {
        console.log("even");
    } else {
        console.log('odd');
    }
}
isEven(4)

// Exercise 6: Palindrome Check
function isPalindrome(word) {
    let input = word.split('')
    let rev_input = []
    input.forEach(element => {
        rev_input.unshift(element);
    })
    if (word == rev_input.join('')) {
        console.log(`${word} is a palindrome : ${rev_input.join('')}`);
    }
    else {
        console.log(`${word} is not a palindrome : ${rev_input.join('')}`);
    }
}
isPalindrome('pop')

// Exercise 7: Maximum of Two Numbers
function maxOfTwo(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + ' is bigger than ' + num2);
    } else {
        console.log(num2 + ' is bigger than ' + num1);
    }
}
maxOfTwo(34, 342)

// Exercise 8: Array Sum
function arraySum(array) {
    let sum = 0
    for (number of array) {
        sum += number
    }
    console.log(sum);
}
arraySum([2, 5, 6, 2, 2, 5])

// Exercise 9: Factorial Without Recursion
function factorial(number) {
    for (let i = number - 1; i > 1; i--) {
        number *= i
    }
    console.log(number);
}
factorial(3)

// Exercise 10: Vowel Checker
function isVowel(character) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    if (vowels.includes(character)) {
        console.log(character + 'is a vowel');
    } else {
        console.log(character + ' is not a vowel');
    }
}
isVowel('f')

// Exercise 11: Largest in Array
function largestInArray(array) {
    console.log(Math.max(...array));
}
largestInArray([3, 6, 7, 3, 2, 7, 0, 98, 8])

// Exercise 12: Prime Number Checker
function isPrime(number) {
    let status = "prime"
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            status = "not prime"
        }
    }
    console.log(status)
}
isPrime(8)

// Exercise 13: Sum of Digits
function sumOfDigits(number) {
    let sum = 0;
    for (let i = 0; i < String(number).length; i++) {
        sum += parseInt(String(number).split("")[i]);
    }
    console.log(`Sum of digits = : ${sum}`);
}
sumOfDigits(25674334567)

// array Intersection
function arrayIntersection(array1, array2) {
    return array1.filter(element => array2.includes(element));
}
console.log(arrayIntersection([6, 5, 1, 7], [5, 6, 8, 0]));

//Fibonacci

function Fibonacci(number) {
    let num1 = 0, num2 = 1, num3;
    for (let i = 1; i <= number; i++) {
        console.log(num1);
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
}
Fibonacci(14);
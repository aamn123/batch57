
let greetings:string = "Hello World";
console.log(greetings);


/* Q2 Instructions: Define two variables with integer values and calculate their sum,
 difference, product, and quotient.*/
let num1 = 6;
let num2 = 2;
console.log("sum", num1 + num2);
console.log("subtraction", num1 - num2);
console.log("division", num1 / num2);
console.log("multiplication", num1 * num2);
console.log("exponent", (num1** num2));


/* Q3 Instructions: Swap the values of two variables without
using a third variable.*/
let a = 2;
let b = 1;
[a,b]=[b,a]
console.log(a, b);

/*Q4  This applies to TypeScript. Create a string variable
and try changing its type.*/
let message = "hello";
console.log("Q4", message);
// This will cause an error: Type 'number' is not assignable to type 'string'.
// message = 123;


// Q5 : Use the modulus operator to find the remainder of two numbers.
let Num1 = 2;
let Num2 = 2;
console.log("remainder", num1 % num2);


//Q6 : Increment a variable's value by 1 using two different methods.
let counter = 0;
counter++; //method1
counter = counter + 1; //method 2
console.log(counter);


//Q7: Given three boolean variables, write expressions for AND, OR, and NOT gates.
let x = true;
let y = false;
let z = true;
console.log("And", x && y);
console.log("OR", x || y);
console.log("NOT", !x);
console.log("And", x && z);
console.log("OR", x || z);
console.log("NOT", !z);
console.log("NOT", !y);

//Q8 :Instructions: Show examples of using compound assignment operators.
let num = 10;
num += 6; // equivalent to num = num + 6;
console.log('add', num);
num -= 4; // equivalent to num = num - 4;
console.log('sub', num);
num *= 3; // equivalent to num = num *3;
console.log('multiplication', num);
num /= 2; // equivalent to num = num / 2;
console.log('division', num);

//Q9 :Instructions: Write a program to check if a number is even or odd.
let n = 2;
if (n % 2 == 0)
    console.log("num is even");
else
    console.log("num is odd");

//Q10 :nstructions: Check if a person is eligible to vote.
let  ag = 18;
if (ag > 18)
    console.log("ELIGIBLE TO VOTE");
else
    console.log("NOT ELIGIBLE TO VOTE");

//Q11:Instructions: Assign a grade based on a numerical score.
let score = 93;
if (score >= 90)
    console.log("GRADE is A");
else if (score >= 70)
    console.log("GRADE is B");
else if (score >= 60)
    console.log("GRADE is C");
else if (score >= 40)
    console.log("GRADE is D");
else
    console.log("GRADE is F");

//Q12: Instructions: Find the maximum of three numbers.
let c = 2;
let d = 4;
let e = 16;
if (c > d && c > e)
    console.log("Greater :c");
else if (d > c && d > e)
    console.log("Greater :d");
else
    (e > c && e > d);
console.log("Greater :e");

//Q13 : Instructions: Check if a given year is a leap year.
var year = 2000;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap Year");
}
else {
    console.log("Not a Leap Year");
}

//Q14: Instructions: Write a program that converts temperature from Fahrenheit to Celsius.
var Fahrenheit = 180;
var Celsius = (Fahrenheit - 32) * 5 / 9;
console.log(`${Fahrenheit} f is equal to ${Celsius} is C`)

//Q15: Instructions: Check if a number is positive, negative, or zero.
let number = 23;
if (number > 0)
    console.log('number is positive');
else if (number < 0)
    console.log("number is negative");
else
    console.log("number is zero");



 /*Q16:   Instructions: Write a program that prints the multiplication
  table of a given number up to 10.*/
    
    
    let numbers = 5;

   const  maxMultiplier = 10;
    
    
    for (let i = 1; i <= maxMultiplier; i++) {
    
      console.log(`${numbers} * ${i} = ${numbers * i}`);
    
    }
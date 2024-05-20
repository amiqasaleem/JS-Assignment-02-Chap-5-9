//Task 01
//Q. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

let a = 2;
let b = 5;
let c = a + b;
console.log(c);
document.write("Sum of " + a + " and " + b + " is " + c);

//Task 02
//Q. Repeat task1 for subtraction, multiplication, division & modulus.
 
//Subtraction

let a1 = 2;
let b1 = 5;
let c1 = a1 - b1;
console.log(c1);
document.write("</br>Subtraction of " + a1 + " from " + b1 + " is " + c1);

//Multiplication

let a2 = 2;
let b2 = 5;
let c2 = a2 * b2;
console.log(c2);
document.write("</br> " + a2 + " multiply by " + b2 + " is " + c2);

//Division

let a3 = 2;
let b3 = 5;
let c3 = a3 / b3;
console.log(c3);
document.write("</br> " + a3 + " divided by " + b3 + " is " + c3);

//Modulus

let a4 = 2;
let b4 = 5;
let c4 = a4 % b4;
console.log(c4);
document.write("</br>Modulus of " + a4 + " and " + b4 + " is " + c4);

//Task 03

//Do the following using JS Mathematic Expressions:

//a. Declare a variable.
//b. Show the value of variable in your browser like “Value after variable declaration is: ??”.

let x;
document.write("</br>Value after variable declaration is " + x);

//c. Initialize the variable with some number.
x = 5;

//d. Show the value of variable in your browser like “Initial value: 5”.
document.write("</br>Initial Value: " + x);

//e. Increment the variable.

x++;

//f. Show the value of variable in your browser like “Value after increment is: 6”.

document.write("</br>Value after increment is " + x);

//g. Add 7 to the variable.

let y = x + 7;
//h. Show the value of variable in your browser like “Value after addition is: 13”.

document.write("</br>Value after addition is " + y);

//i. Decrement the variable.

y--;

//j. Show the value of variable in your browser like “Value after decrement is: 12”.

document.write("</br>Value after decrement is " + y);

//k. Show the remainder after dividing the variable’s value by 3.

z = y % 3;

document.write("</br>The remainder is: " + z);


//Task 04 

let ticketPrice = 600;
let fiveTicketPrice = ticketPrice * 5;

document.write("</br>Total cost to buy 5 tickets to a movie is " + fiveTicketPrice + " PKR");

//Task 05 
//Write a script to display multiplication table of any number in your browser.

let num = 2;
document.write("</br>Table of " + num);
document.write("</br>" + num + " x 1 =" + num*1);
document.write("</br>" + num + " x 2 =" + num*2);
document.write("</br>" + num + " x 3 =" + num*3);
document.write("</br>" + num + " x 4 =" + num*4);
document.write("</br>" + num + " x 5 =" + num*5);
document.write("</br>" + num + " x 6 =" + num*6);
document.write("</br>" + num + " x 7 =" + num*7);
document.write("</br>" + num + " x 8 =" + num*8);
document.write("</br>" + num + " x 9 =" + num*9);
document.write("</br>" + num + " x 10 =" + num*10);

//Task 06
//The Temperature Converter.

var celciusTemp = 25;
var conversionC = (celciusTemp* 9/5) +32;

document.write("</br>25°C is ", conversionC, "°F");

var fahrenheitTemp = 70;
var conversionF = (fahrenheitTemp- 32) *5/9;

document.write("<br/>70°F is ", conversionF, "°C" )

//Task 07
//Write a program to implement checkout process of a shopping cart system for an e-commerce website.

var itemOnePrice = 300;
var itemOneOrderQuantity = 5;
var itemTwoPrice = 800;
var itemTwoOrderQuantity = 2;
var shippingCharges = 200;

var totalCost = (itemOnePrice * itemOneOrderQuantity) + (itemTwoPrice * itemTwoOrderQuantity);
document.write("<br/><h1>" + "Shopping Cart" + "</h1>");
document.write("<br/>Price of item 1 is: " + itemOnePrice);
document.write("<br/>Quantity of item 1 is: " + itemOneOrderQuantity);
document.write("<br/>Price of item 2 is: " + itemTwoPrice);
document.write("<br/>Quantity of item 2 is: " + itemTwoOrderQuantity);

document.write("<br/>Total Cost of your order is: " + totalCost);

//Task 08
//Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

var totalMarks = 550;
var obtainedMarks = 486;
var percentage = (obtainedMarks * 100) / totalMarks;

document.write("<br/><h1>" + "Marks Sheet" + "</h1>");
document.write("<br/>Total Marks: " + totalMarks);
document.write("<br/>Marks Obtained: " + obtainedMarks);
document.write("<br/>Percentage: " + percentage);

//Task 09
//Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

var usDollars = 10;
var saudiRiyals = 25;


var totalPakCurrency = (usDollars*155) + (saudiRiyals*41);
document.write("<br/><h1>" + "Currency in PKR" + "</h1>");
document.write("Total currency in PKR: ",totalPakCurrency);

//Task 10

var number = 8;

document.write("<br/>"+((number + 5) * 10) / 2 );

//Task 11

var currentYear = 2024;
var birthYear = 1937;
var personAge = currentYear - birthYear;
document.write("<br/><h1>" + "Age Calculator" + "</h1>");
document.write("<br/> Your age is: " + personAge);

//Task 12
//The Geometrizer: Calculate properties of a circle.
//area = πr²

var radius = 4;
var dia = 8;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius * radius);

document.write("<br/><h1>" + "The Geometrizer" + "</h1>");

document.write("<br/>The radius of a circle: " + radius);
document.write("<br/>The circumference is: " + circumference);
document.write("<br/>The Area is: " + area);

//Task 13

var favoriteSnack = "Ice cream";
var currentAge = 23;
var maximumAge = 62;
var estimatedAmount = 2;

var totalAmountOfSnack = (maximumAge - currentAge) * estimatedAmount;

document.write("<br/><h1>" + "The Lifetime Supply Calculator" + "</h1>");
document.write("<br/>You will need " + totalAmountOfSnack +" " + favoriteSnack + " to last you until the ripe olg age of 62.");

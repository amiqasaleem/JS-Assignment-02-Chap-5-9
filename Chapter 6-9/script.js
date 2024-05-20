//Task 01
//Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

var a = 10;
document.write("Result:");
document.write("</br>The value if a is: ", a);

// ++a;
document.write("</br></br>The value of ++a is: ", ++a);
document.write("</br> Now the value of a is: ", a);

// a++;
document.write("</br></br> The Value of a++ is: ", a++);
document.write("</br> Now the value of a is: ", a);

document.write("</br></br>The value of --a is: ", --a);
document.write("</br> Now the value of a is: ", a);

document.write("</br></br>The value of a-- is: ", a--);
document.write("</br> Now the value of a is: ", a);

//Task 02

var a = 2;          
var b = 1;
var result = --a - --b + ++b + b--;     //1 - 0 + 1 + 1 = 3

// Explain the output at each stage: 
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--; 

document.write("</br> --a = ", --a);                                       //1
document.write("</br> --a - --b = ", --a - --b);                           //1      //1 - 0
document.write("<br/> --a - --b + ++b = ", --a - --b + ++b);               //2      //1 - 0 + 1 
document.write("</br> --a - --b + ++b + b-- = ", --a - --b + ++b + b--);   //3      //1 - 0 + 1 + 1

document.write("</br> a =", a);
document.write("</br> b = ", b);
document.write("</br> Result = ", result);

//Task 03
//Write a program that takes input a name from user & greet the user.

var userInput = prompt("Enter your name?");
alert("Hello " + userInput + ", Welcome to our Website");

//Task 05

//Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

var numberInput = +prompt("Enter a number", 5);

document.write(`</br><h2>Table of ${numberInput} </h2>`);
document.write("</br>" + numberInput + " x 1 =" + numberInput * 1);
document.write("</br>" + numberInput + " x 2 =" + numberInput * 2);
document.write("</br>" + numberInput + " x 3 =" + numberInput * 3);
document.write("</br>" + numberInput + " x 4 =" + numberInput * 4);
document.write("</br>" + numberInput + " x 5 =" + numberInput * 5);
document.write("</br>" + numberInput + " x 6 =" + numberInput * 6);
document.write("</br>" + numberInput + " x 7 =" + numberInput * 7);
document.write("</br>" + numberInput + " x 8 =" + numberInput * 8);
document.write("</br>" + numberInput + " x 9 =" + numberInput * 9);
document.write("</br>" + numberInput + " x 10 =" + numberInput * 10);

//Task 06

var subject01 = prompt("Enter subject 01");
var subject02 = prompt("Enter subject 02");
var subject03 = prompt("Enter subject 03");
var obtainedSubject01 = +prompt("Enter obtained marks in subject 01");
var obtainedSubject02 = +prompt("Enter obtained marks in subject 02");
var obtainedSubject03 = +prompt("Enter obtained marks in subject 03");
var eachSubjectMark = 100;
 
var totalMarks = eachSubjectMark * 3;
var totalObtainedMarks = obtainedSubject01 + obtainedSubject02 + obtainedSubject03;
var percentage1 = (obtainedSubject01 * 100) / 100;
var percentage2 = (obtainedSubject02 * 100) / 100;
var percentage3 = (obtainedSubject03 * 100) / 100;
var totalPercentage = (totalObtainedMarks * 100 ) / totalMarks;

document.write("<br/><table border = '4' style ='border-collapse: collapse; text-align:center; width:600px;'>" + "<tr>"+ "<td>" + "Subject" + "</td>" + "<td>" + "Total Marks" + "</td>" + "<td>" + "Obtained Marks" + "</td>" + "<td>"+"Percentage"+ "</td>"+"</tr>" + "<tr>"+ "<td>" + subject01 + "</td>" + "<td>" + eachSubjectMark + "</td>" + "<td>" + obtainedSubject01 + "</td>" + "<td>"+ percentage1 + "%" + "</td>"+"</tr>" + "<tr>" + "<td>" + subject02 + "</td>" + "<td>" + eachSubjectMark + "</td>" + "<td>" + obtainedSubject02 + "</td>" + "<td>"+ percentage2 + "%" + "</td>"+"</tr>" + "<tr>" + "<td>" + subject03 + "</td>" + "<td>" + eachSubjectMark + "</td>" + "<td>" + obtainedSubject03 + "</td>" + "<td>"+ percentage3 + "%" + "</td>"+"</tr>" + "<tr>"+ "<td>" + "" + "</td>" + "<td>" + totalMarks + "</td>" + "<td>" + totalObtainedMarks + "</td>" + "<td>"+ totalPercentage + "%" + "</td>"+"</tr>" + "</table>");

/* Tasks of Chapter - 9-11 */

/* task-01 */
var city = prompt("Enter the city name: ");
if (city.toLowerCase == "karachi"){
    alert("Welcome to city of lights");
}

/* task-02 */
var gender = prompt("Enter your gender: ");
if (gender.toLowerCase == "male"){
    alert("Good Morning Sir");
}
else if (gender.toLowerCase == "female"){
    alert("Good Morning Ma'am");
}

/* task-03 */
var color = prompt("Enter the color of traffic signal: ");
if (color.toLowerCase == "red"){
    alert("Must Stop");
}
else if (color.toLowerCase == "yellow"){
    alert("Ready to move");
}
else if (color.toLowerCase == "green"){
    alert("Move Now");
}

/* task-04 */
var remFuel = +prompt("Enter the remaining fuel in car (in litres): ");
if (remFuel < 0.25){
    alert("Please refill the fuel in your car");
}

/* task-05 */
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true");
}
/* output: alert will be displayed */

var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true");
}
/* output: alert will not be displayed */

var c = 12; 
if (c++ === 13){ 
    alert("condition 1 is true");
}
if (c === 13){ 
    alert("condition 2 is true"); 
} 
if (++c < 14){ 
    alert("condition 3 is true"); 
} 
if (c === 14){ 
    alert("condition 4 is true"); 
}
/* output: condition 2 is true and condition 4 is true (two alerts will be displyed) */

var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals");
}
/* output: alert will be displayed */

if (true){ 
    alert("True"); 
} 
if (false){ 
    alert("False");
}
/* output: true (this alert will be displayed) */

if ("car" < "cat"){ 
    alert("car is smaller than cat");
}
/* output: alert will be displayed */

/* task-06 */
var obtMar1 = +prompt("Enter marks obtained in first subject: ");
var obtMar2 = +prompt("Enter marks obtained in second subject: ");
var obtMar3 = +prompt("Enter marks obtained in third subject: ");
var totalMar = +prompt("Enter total marks: ");
var per = ((obtMar1 + obtMar2 + obtMar3)/totalMar)*100;
var remarks = "";
var grade = "";
if (per >= 80){
    remarks = "Excellent";
    grade = "A1";
}
else if (per >= 70){
    remarks = "Good";
    grade = "A";
}
else if (per >= 60){
    remarks = "You need to improve";
    grade = "B";
}
else if (per < 60){
    remarks = "Sorry";
    grade = "Fail";
}
document.write("<br><h1>Marks Sheet</h1>");
document.write("<br><br><br> Total Marks: " + totalMar);
document.write("<br> Marks obtained: " + (obtMar1 + obtMar2 + obtMar3));
document.write("<br> Percentage: " + per);
document.write("<br> Grade: " + grade);
document.write("<br> Remarks: " + remarks);

/* task-07 */
var secNum = 8;
var guess = +prompt("Guess the secret number (ranging from 1 to 10): ");
if (guess == secNum){
    document.write("<br> Bingo! Correct answer");
}
else if ((guess + 1) == secNum){
    document.write("<br> Close enough to the correct answer");
}

/* task-08 */
var val = +prompt("Enter any number to check if it is divisible by 3: ");
if ((val%3) == 0){
    document.write("<br>" + val + " is divisible by 3");
}

/* task-09 */
var val = +prompt("Enter any number to check if it is even or odd: ");
if ((val%2) == 0){
    document.write("<br>" + val + " is an even number");
}
else{
    document.write("<br>" + val + " is an odd number");
}

/* task-10 */
var temp = +prompt("Enter the temperature: ");
if (temp > 40){
    document.write("<br> It is too hot outside.");
}
else if (temp > 30){
    document.write("<br> The Weather today is Normal.");
}
else if (temp > 20){
    document.write("<br> Today's Weather is cool.");
}
else if (temp > 10){
    document.write("<br> OMG! Today's weather is so Cool.");
}

/* task-11 */
var val1 = +prompt("Enter the first number: ");
var val2 = +prompt("Enter the second number: ");
var sign = prompt("Enter the operator (+, -, *, /, %): ");
var result;
if (sign == "+"){
    result = val1 + val2;
    document.write("<br>" + val1 + " + " + val2 + " = " + result);
}
else if (sign == "-"){
    result = val1 - val2;
    document.write("<br>" + val1 + " - " + val2 + " = " + result);
}
else if (sign == "*"){
    result = val1 * val2;
    document.write("<br>" + val1 + " * " + val2 + " = " + result);
}
else if (sign == "/"){
    result = val1 / val2;
    document.write("<br>" + val1 + " / " + val2 + " = " + result);
}
else if (sign == "%"){
    result = val1 % val2;
    document.write("<br>" + val1 + " % " + val2 + " = " + result);
}
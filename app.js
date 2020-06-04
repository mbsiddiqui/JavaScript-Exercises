/* Tasks of Chapters 1-20 */

/* Tasks of Chapter - 01 */
/* task-01 */
alert("Welcome to the website. This popup is generated through JavaScript.");

/* task-02 */
alert("Error! Please enter a valid password.");

/* task-03 */
alert("Welcome to JS Land... \n Happy Coding!");

/* task-04 */
alert("Welcome to JS Land...");
alert("Happy Coding!");

/* task-05 */
/* picture of console code included in images folder with name=chapter-01*/

/* task-06 */
/* Alerts were generated in my existing project */

/* task-07 */
/* i have done practice of adding script tags in all the mentioned locations of my code. It was just like placing style tag in all these areas of my html file. */




/* Tasks of Chapter-02 */

/* task-01 */
var username;

/* task-02 */
var myName = "Muhammad Bilal Siddiqui";

/* task-03 */
var message;
message = "Hello World";
alert(message);

/* task-04 */
var name = "Jhone Doe";
var age = "15 years old";
var qualif = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(qualif);

/* task-05 */
var a = "PIZZA";
alert(a + "\n" + a.slice(0, 4) + "\n" + a.slice(0, 3) + "\n" + a.slice(0, 2) + "\n" + a.slice(0, 1) + "\n")

/* task-06 */
var email = "muhammad.bilal.siddiqui.11@gmail.com";
alert("My email address is " + email);

/* task-07 */
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

/* task-08 */
document.write("Yah! I can write HTML content through JavaScript");

/* task-09 */
var string = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(string);
document.write("<br>" + string);




/* Tasks of chapter-03 */

/* task-01 */
var age;
age = 21;
alert("I am " + age + " years old");

/* task-02 */
var visit = "";
visit += 1;
alert("You have visited this site " + visit + " time(s)");

/* task-03 */
var birthYear;
birthYear = 1999;
document.write("My birth year is " + birthYear + "\n Data type of my declared variable is number");

/* task-04 */
var vis_name;
var prod_tit;
var prod_quant;
vis_name = "John Doe";
prod_tit = "T-Shirt";
prod_quant = 5;
document.write("<br>" + vis_name + " ordered " + prod_quant + " " + prod_tit + "(s) on XYZ Clothing store");




/* Tasks of Chapter-04 */

/* task-01 */
var alpha, beta, gama;

/* task-02 */
var lower, camelCase, UPPER, _underscore, $Legal; /* legal */
/* var 1lower, @name, name-age, .name, 2age; /* illegal */

/* task-03 */
document.write("<h1> Rules for naming JS variable </h1>");
document.write("<br> Variable names can only contain numbers, $ and _. For example: $my_1stVariable");
document.write("<br> Variables must begin with a letter, $ or _. For example: $home, _name or name");
document.write("<br> Variable names are case sensitive.");
document.write("<br> Variable names should not be JS keywords.");




/* Tasks of Chapter-05 */

/* task-01 */
var val1 = +prompt("Enter first number:");
var val2 = +prompt("Enter second number:");
var sum = val1 + val2;
document.write("Sum of " + val1 + " and " + val2 + " is " + sum);

/* task-02 */
var val1 = +prompt("Enter first number:");
var val2 = +prompt("Enter second number:");
var diff = val1 - val2;
var mul = val1 * val2;
var div = val1/val2;
document.write("<br> Difference of " + val1 + " and " + val2 + " is " + diff);
document.write("<br> Product of " + val1 + " and " + val2 + " is " + mul);
document.write("<br> Division of " + val1 + " by " + val2 + " gives " + div);

/* task-03 */
var val;
document.write("<br> Value after variable declaration is " + val);
val = 5;
document.write("<br> Initial value: " + val);
val++;
document.write("<br> Value after increment is: " + val);
val += 7;
document.write("<br> Value after addition is: " + val);
val--;
document.write("<br> Value after decrement is: " + val);
var rem = val%3;
document.write("<br> The remainder is: " + rem);

/* task-04 */
var price = 600;
var quan = 5;
var cost = price*quan;
document.write("<br> Total cost to buy " + quan + " tickets to a movie is " + cost + " PKR");

/* task-05 */
var num = +prompt("Enter the number to get the its table:")
document.write("<br> Table of " + num)
for(var i = 1; i <= 10; i++){
    document.write("<br>" + num + "x" + i + "=" + num*i);
}

/* task-06 */
var cel = 25;
fah = (cel * (9/5)) + 32;
document.write("<br>" + cel + "<sup>o</sup> C is " + fah + "<sup>o</sup> C");
var fah = 70;
cel = (fah - 32) * (5/9);
document.write("<br>" + fah + "<sup>o</sup> C is " + cel + "<sup>o</sup> C");

/* task-07 */
var pri1 = 650;
var pri2 = 100;
var quan1 = 3;
var quan2 = 7;
var ship = 100;
var total = (pri1*quan1) + (pri2*quan2) + ship;
document.write("<br><h1>Shopping Cart</h1>")
document.write("<br><br><br> Price of item 1 is " + pri1);
document.write("<br> Quantity of item 1 is " + quan1);
document.write("<br> Price of item 2 is " + pri2);
document.write("<br> Quantity of item 1 is " + quan2);
document.write("<br> Shipping Charges " + ship);
document.write("<br><br> Total cost of your order is " + total);

/* task-08 */
var totMar = 980;
var obtMar = 804;
var per = (obtMar/totMar)*100;
document.write("<br><h1>Marks Sheet</h1>");
document.write("<br><br><br> Total marks: " + totMar);
document.write("<br> Marks obtained: " + obtMar);
document.write("<br> Percentage: " + per + "%");

/* task-09 */
var dol = 10;
var riyal = 25;
var pkr = (dol*104.80) + (riyal*28);
document.write("<br><h1>Currency in PKR</h1>");
document.write("<br> Total Currency in PKR: " + pkr);

/* task-10 */
var dum = 1;
dum = (((dum + 5) * 10) / 2);

/* task-11 */
var currYear = 2020;
var birthYear = 1999;
var age = currYear-birthYear;
document.write("<br><h1>Age Calculator</h1>");
document.write("<br><br><br> Current Year: " + currYear);
document.write("<br> Birth Year: " + birthYear);
document.write("<br> Your Age is: " + age);

/* task-12 */
var radius = 20;
const pi = 3.142;
var circum = 2*pi*radius;
var area = pi*radius*radius;
document.write("<br><h1>The Geometrizer</h1>");
document.write("<br><br><br> Radius of a circle: " + radius);
document.write("<br> The circumference is: " + circum);
document.write("<br> The area is: " + area);

/* task-13 */
var favSnk = "Chocolate Chip";
var curAge = 21;
var maxAge = 100;
var APD = 5;
var snkNeed = (maxAge-curAge)*APD;
document.write("<br><h1>The Lifetime Supply Calculator</h1>");
document.write("<br><br><br> Favourite Snack: " + favSnk);
document.write("<br> Current age: " + curAge);
document.write("<br> Estimated Maximum Age: " + maxAge);
document.write("<br> Amount os snacks per day: " + APD);
document.write("<br> You will need " + snkNeed + " " + favSnk + " to last you until the ripe old age of " + maxAge);




/* Tasks of Chapters 6-9 */

/* task-01 */
var val = 10;
document.write("<br><h3>Result</h3>");
document.write("<br> The value of val is: " + val);
document.write("<hr>")
document.write("<br><br> The value of ++val is: " + (++val));
document.write("<br> Now the value of val is: " + val);
document.write("<br><br><br> The value of val++ is: " + (val++));
document.write("<br> Now the value of val is: " + val);
document.write("<br><br><br> The value of --val is: " + (--val));
document.write("<br> Now the value of val is: " + val);
document.write("<br><br><br> The value of val-- is: " + (val--));
document.write("<br> Now the value of val is: " + val);

/* task-02 */
var a = 2, b= 1;
var result = --a - --b + ++b + b--;
document.write("<br> a is: " + a);
document.write("<br> b is: " + b);
document.write("<br> result is: " + result);
/* Explaination of the whole process */
/* --a  --> first a is decremented by 1 and then a is reupdated with value of 1 */
/* --a - --b  --> a had the value of 1(as discussed above), similarly b is first decremented by 1 and then b is reupdated with value of 0. So, 1 - 0 gives value of 1 (uptil this step)*/
/* --a - --b + ++b  --> we have the value of 1 (uptil --a - --b). Now, b is first incremented by 1 and holds the new value of 1. So, we get the final value of this expression as 1 - 0 + 1 = 2 */
/* --a - --b + ++b + b--  --> we have the value of 2 (uptil --a - --b + ++b). Now, value of b was 1 and it was used in the expression and the value of b is updated after that by 1. So, the final value that the result variable holds can be calculated as 1 - 0 + 1 + 1 = 3. */

/* task-03 */
var name = prompt("Enter your name: ");
alert("Welcome to the website " + name);

/* task-04 */
/* there wasn't any task-04 in the chapter */

/* task-05 */
var num;
/* if user enters a number */
if (num = +prompt("Enter a number to see its multiplication table: ")){
    document.write("<br><br> <h2>Table of " + num + "</h2>");
    for(var i = 1; i <= 10; i++){
        document.write("<br> " + num + "x" + i + "=" + num*i);
    }
}
/* if user give invalid or no input */
else{
    document.write("<br><br> <h2>Table of 5 (Default)</h2>");
    for(var i = 1; i <= 10; i++){
        document.write("<br> 5x" + i + "=" + 5*i);
    }
}

/* task-06 */
var sub1 = prompt("Enter the name of first subject: ");
var sub2 = prompt("Enter the name of second subject: ");
var sub3 = prompt("Enter the name of third subject: ");
var total = 100;
var obtMar1 = +prompt("Enter obtained marks in first subject: ");
var obtMar2 = +prompt("Enter obtained marks in second subject: ");
var obtMar3 = +prompt("Enter obtained marks in third subject: ");
var per1 = (obtMar1/total)*100;
var per2 = (obtMar2/total)*100;
var per3 = (obtMar3/total)*100;
var overallPer = ((obtMar1 + obtMar2 + obtMar3)/300)*100;
document.write("<br><br><h4> Subject &emsp; Total Marks &emsp; Obtained Marks &emsp; Percentage</h4>");
document.write("<br>&emsp;" + sub1 + "&emsp;&emsp;&emsp;&emsp;" + total + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + obtMar1 + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + per1);
document.write("<br>&emsp;" + sub2 + "&emsp;&emsp;&emsp;&emsp;" + total + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + obtMar2 + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + per2);
document.write("<br>&emsp;" + sub3 + "&emsp;&emsp;&emsp;&emsp;" + total + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + obtMar3 + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + per3);
document.write("<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 300 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + (obtMar1 + obtMar2 + obtMar3) + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + overallPer + "</h4>");

/* task-07 */
/* there wasn't any task-07 in the chapter */




/* Tasks of Chapters - 9-11 */

/* task-01 */
var city = prompt("Enter the city name: ");
if (city.toLowerCase() == "karachi"){
    alert("Welcome to city of lights");
}

/* task-02 */
var gender = prompt("Enter your gender: ");
if (gender.toLowerCase() == "male"){
    alert("Good Morning Sir");
}
else if (gender.toLowerCase() == "female"){
    alert("Good Morning Ma'am");
}

/* task-03 */
var color = prompt("Enter the color of traffic signal: ");
if (color.toLowerCase() == "red"){
    alert("Must Stop");
}
else if (color.toLowerCase() == "yellow"){
    alert("Ready to move");
}
else if (color.toLowerCase() == "green"){
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




/* Tasks of Chapters 12-13 */

/* task-01 */
var char = prompt("Enter a character: ");
/* charCodeAt(0) checks the ASCII code of first character */
/* uppercase ranges from 65-90 */
if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
    alert(char + " is an uppercase letter");
}
/* lowercase ranges from 97-122 */
else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
    alert(char + " is a lowercase letter");
}
/* numbers ranges from 48-57 */
else if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57){
    alert(char + " is a number");
}

/* task-02 */
var val1 = +prompt("Enter the first number: ");
var val2 = +prompt("Enter the second number: ");
if (val1 > val2){
    alert(val1 + " is greater than " + val2);
}
else if (val2 > val1){
    alert(val2 + " is greater than " + val1);
}
else if (val1 == val2){
    alert(val1 + " is equal to " + val2);
}

/* task-03 */
var num = +prompt("Enter a number: ");
if (num > 0){
    alert(num + " is a positive number");
}
else if (num < 0){
    alert(num + " is a negative number");
}
else if (num == 0){
    alert(num + " is equal to 0");
}

/* task-04 */
var vow = prompt("Enter a character: ");
if (vow.toLowerCase() === "a" || vow.toLowerCase() === "e" || vow.toLowerCase() === "i" || vow.toLowerCase() === "o" || vow.toLowerCase() === "u"){
    alert(vow + " is a vowel");
}
else{
    alert(vow + " is not a vowel")
}

/* task-05 */
var pass = "q1w2e3r4t5y6";
if (entPass = prompt("Enter your password: ")){
    if (entPass === pass){
        alert("Correct! The password you entered matches the original password");
    }
    else{
        alert("Incorrect password");
    }
}
else{
    alert("Please enter your password");
}

/* task-06 */
var greeting;
var hour = 13;
if (hour < 18){
    greeting = "Good day";
    alert(greeting);
}
else{
    greeting = "Good evening";
    alert(greeting);
}

/* task-07 */
var time = +prompt("Enter the time (in 24 hour format e.g. 1300): ");
if (time >= 0000 && time < 1200){
    alert("Good morning");
}
else if (time >= 1200 && time < 1700){
    alert("Good afternoon");
}
else if (time >= 1700 && time < 2100){
    alert("Good evening");
}
else if (time >= 2100 && time <= 2359){
    alert("Good night");
}





/* Tasks of Chapters 14-16 */

/* task-01 */
var empArr1 = [];

/* task-02 */
var empArr2 = new Array(6);

/* task-03 */
var strArr = ["name", "age", "qualif"];

/* task-04 */
var numArr = [1, 2, 3];

/* task-05 */
var boolArr = [true, false, true];

/* task-06 */
var mixArr = ["name", 1, "true", 5];

/* task-07 */
var eduQualif = ["SSC", "HSC", "BCS", "BS", "BE", "BCom", "MS", "M Phil.", "PhD"];
document.write("<br><h1>Qualifications:</h1>");
document.write("<br>");
for (var i = 0; i < eduQualif.length; i++){
    document.write("<br>" + (i+1) + ") " + eduQualif[i]);
}

/* task-08 */
var names = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var total = 500;
document.write("<br><br><br>");
for (var i = 0; i < scores.length; i++){
    document.write("<br> Score of " + names[i] + " is " + scores[i] + ". Percentage: " + ((scores[i]/total)*100) + "%");
}

/* task-09 */
var colors = ["Red", "Yellow", "Blue", "Green"];
document.write("<br><br><br> The original array");
for (var i = 0; i < colors.length; i++){
    document.write(colors[i] + " ");
}
/* element added in start */
var colorAddS = prompt("Enter the name of color which you want to add (in the beginning): ");
colors.unshift(colorAddS);
document.write("<br> The updated array (with elements added in the beginning): ")
for (var i = 0; i < colors.length; i++){
    document.write(colors[i] + " ");
}
/* element added in end */
var colorAddE = prompt("Enter the name of color which you want to add (in the end): ");
colors.push(colorAddE);
document.write("<br> The updated array (with elements added in the end): ")
for (var i = 0; i < colors.length; i++){
    document.write(colors[i] + " ");
}
/* elements added in the start */
colors.unshift("Magenta", "Baby Pink");
document.write("<br> The updated array (with elements added in the beginning): ")
for (var i = 0; i < colors.length; i++){
    document.write(colors[i] + " ");
}
/* element removed from start */
colors.shift();
document.write("<br> The updated array (with elements removed from beginning): ")
for (var i = 0; i < colors.length; i++){
    document.write(colors[i] + " ");
}
/* element removed from end */
colors.pop();
document.write("<br> The updated array (with elements removed from end): ")
for (var i = 0; i < colors.length; i++){
    document.write(colors[i] + " ");
}
/* element added at the user's decided index */
var colorAddM = prompt("Enter the name of color that you want to be added: ");
var indexAddM = +prompt("Enter the index number at which it should be added (should be between 0 - " + colors.length + " ): ");
colors.splice(indexAddM, 0, colorAddM);
document.write("<br> The updated array (with elements added at the user's decided index): ")
for (var i = 0; i < colors.length; i++){
    document.write(colors[i] + " ");
}
/* elements removed from user's decided index */
var indexDelM = +prompt("Enter the index number from which color should be removed (should be between 0 - " + colors.length + " ): ");
var numOfColors = +prompt("Enter the number of colors to be deleted: ");
colors.splice(indexDelM, numOfColors);
document.write("<br> The updated array (with elements removed from the user's decided index): ")
for (var i = 0; i < colors.length; i++){
    document.write(colors[i] + " ");
}

/* task-10 */
var stuScores = [320, 230, 480, 120];
document.write("<br><br><br> Scores of Students: ");
for(var i = 0; i < stuScores.length; i++){
    document.write(stuScores[i] + " ");
}
/* sort() sorts the array in acsending order by default */
stuScores.sort();
document.write("<br> Ordered Scores of Students: ");
for(var i = 0; i < stuScores.length; i++){
    document.write(stuScores[i] + " ");
}

/* task-11 */
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<br><br><br> Cities list: ")
for (var i = 0; i < cities.length; i++){
    document.write(cities[i] + ",")
}
var selectedCities = [];
selectedCities = cities.slice(2, 4);
document.write("<br> Selected cities list: ")
for (var i = 0; i < selectedCities.length; i++){
    document.write(selectedCities[i] + ",")
}

/* task-12 */
var arr = ["This", "is", "my", "cat"];
document.write("<br><br><br> Array: ");
for (var i = 0; i < arr.length; i++){
    document.write(arr[i] + ",");
}
/* the argument of join() should be the seperator with which you want to seperate your string elements */
var str = arr.join(" ");
document.write("<br> String: " + str);

/* task-13 */
var fifo = ["keyboard", "mouse", "printer", "monitor"];
document.write("<br><br><br> Devices: ")
for (var i = 0; i < fifo.length; i++){
    document.write(fifo[i] + ",")
}
for (var i = 0; i < fifo.length; i++){
    document.write("<br> Out: <br>" + fifo[i]);
}

/* task-14 */
var lifo = ["keyboard", "mouse", "printer", "monitor"];
document.write("<br><br><br> Devices: ")
for (var i = 0; i < lifo.length; i++){
    document.write(lifo[i] + ",")
}
for (var i = lifo.length - 1; i >= 0; i--){
    document.write("<br> Out: <br>" + lifo[i]);
}

/* task-15 */
var phoneManuf = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<br><br><br><select>");
for (var i = 0; i < phoneManuf.length; i++){
    document.write("<br><option>" + phoneManuf[i] + "</option>");
}
document.write("</select>")




/* Tasks of Chapters 17-20 */

/* task-01 */
var multiArr = [[]];

/* task-02 */
var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
document.write("<br><br><br>");
for (var i = 0; i < matrix.length; i++){
    for (var j = 0; j < 4; j++){
        document.write(" " + matrix[i][j] + " ");
    }
    document.write("<br>")
}

/* task-03 */
var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write("<br><br><br>");
for (var i = 0; i < counting.length; i++){
    document.write("<br>" + counting[i]);
}

/* task-04 */
var num = +prompt("Enter a number to show its multiplication table: ");
var times = +prompt("Enter the length of multiplication table: ");
document.write("<br><br><br> Multiplication table of " + num);
document.write("<br> Length " + times);
for (var i = 1; i <= times; i++){
    document.write("<br>" + num + " x " + i + " = " + num*i);
}

/* task-05 */
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<br><br><br>");
for (var i = 0; i < fruits.length; i++){
    document.write("<br>" + fruits[i]);
}
document.write("<br>");
for (var i = 0; i < fruits.length; i++){
    document.write("<br> Element at index " + i + " is "+ fruits[i]);
}

/* task-06 */
document.write("<br><br><br> <h4>Counting</h4><br>");
for (var i = 1; i <= 15; i++){
    document.write(i + ", ");
}
document.write("<br><h4>Reverse counting</h4><br>");
for (var i = 10; i > 0; i--){
    document.write(i + ", ");
}
document.write("<br><h4>Even</h4><br>");
for (var i = 0; i <= 20; i++){
    if (i%2 == 0){
        document.write(i + ", ");
    }
}
document.write("<br><h4>Odd</h4>");
for (var i = 0; i <= 20; i++){
    if (i%2 != 0){
        document.write(i + ", ");
    }
}
document.write("<br><h4>Series</h4><br>");
for (var i = 2; i <= 20; i++){
    if (i%2 == 0){
        document.write(i + "k, ");
    }
}

/* task-07 */
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am? ");
var flag = false;
var index;
for (var i = 0; i < A.length; i++){
    if (A[i] == search){
        flag = true;
        index = i;
    }
}
if (flag){
    alert(search + " is available at index " + index + " in our bakery");
}
else{
    alert("We are sorry. " + search + " is not available in our bakery");
}

/* task-08 */
var B = [24, 53, 78, 91, 12];
var larg;
document.write("<br><br><br> Array items: ")
for (var i = 0; i < B.length; i++){
    document.write(B[i] + ", ");
    if (B[i] > B[i-1]){
        larg = B[i];
    }
}
document.write("<br> The largest number is " + larg);

/* task-09 */
var C = [24, 53, 78, 91, 12];
var small;
document.write("<br><br><br> Array items: ")
for (var i = 0; i < C.length; i++){
    document.write(C[i] + ", ");
    if (C[i] < C[i-1]){
        small = C[i];
    }
}
document.write("<br> The smallest number is " + small);

/* task-10 */
document.write("<br><br><br>");
for (var i = 5; i <= 100; i++){
    if (i%5 == 0){
        document.write(i + ", ");
    }
}
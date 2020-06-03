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
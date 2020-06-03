/* Tasks of Chapter 6-9 */

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
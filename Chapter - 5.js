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
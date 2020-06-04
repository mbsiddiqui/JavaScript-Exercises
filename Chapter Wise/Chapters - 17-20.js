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
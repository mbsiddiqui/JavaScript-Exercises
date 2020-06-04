
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
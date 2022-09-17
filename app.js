








//Chapter no 31-34








// var currentDate = new Date()
// alert(currentDate);

// var date = new Date();
// var month = date.getMonth();
// alert(getMonthName(month));

// function getMonthName(monthNumber){
//     var monthname = ["January ", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     return monthname[monthNumber];
// }

// var date = new Date();
// var day = date.getDay();

// function getDayName(dayNumber){
//     var dayName =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
//     return dayName[dayNumber];
// }
// alert(getDayName(day));

// var date = new Date();
// var day = date.getDay();

// if (day == 0) {
//     alert("Its Fun day");
// }
// if (day == 6) {
//     alert("Its Fun day");
// }

// var date = new Date();
// var currentDate = date.getDate();

// if (currentDate <= 14) {
//     alert("First fifteendays of the month")
// } else {
//     alert("Last days of the month");
// }


// var date = new Date();
// var mili = date.getMilliseconds();
// var time = date.getTime();
// var min = date.getMinutes();
// document.write("Current Date: "+ date +"<br>");
// document.write("Elapsed milliseconds since January 1, 1970: "+mili * time +"<br>");
// document.write( "Elapsed minutes since January 1, 1970: "+ min * time  + "<br>");


// var time = new Date();
// var currentTime = time.getHours();
// if (currentTime <= 12){
//     alert("It is AM");
// }
// if (currentTime <= 24){
//     alert("It is PM");
// }

// var laterDate = new Date("Thu,Dec 31,2020");
// document.write(laterDate);


// var time = new Date("June 18, 2015");
// document.write("171 days have passed since 1st Ramadan, 2015");

// var time = new Date();
// document.write("On reference date" + time);

// var age = prompt("What is your age: ");
// document.write("<br>"+"Your age is " + age);
// var current = new Date();
// var currentTime = current.getFullYear();
// document.write("<br>Your birth year is ");
// document.write(currentTime - age);

// document.write("<h1>K-Electric Bill</h1><br><br>");
// document.write("Customer Name:ABC Customer");
// document.write("<br>Number of Units: 410");
// document.write("<br>Charges per unit: 16<br><br>")
// document.write("Net Amount Payable(within Due Date)<br>");
// document.write("Late payment surcharge:360<br>")
// document.write("Gross amount Payable (after due date): 6910");







//Chapter No 35-38







// function currentTime(time){
//     time=new Date();
//     document.write(time);
// }
// currentTime();

// var fName = prompt("Enter your first name");
// var lName = prompt("Enter your last name");
// function getInput(name) {
//     alert("wellcome " + fName +" " + lName);
// }
// getInput();


// var fSum = prompt("Enter first number for addition");
// var sSum = prompt("Enter second number for addtion");
// var tot = parseInt(fSum) + parseInt(sSum);
// function getSum(sum){
//     alert(tot);
// }
// getSum();


// function sum() {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum;
// }
// var tot = sum(parseInt(prompt("enter any number")),parseInt(prompt("enter any number")),parseInt(prompt("enter any number")));
// alert(tot);

// var num = prompt("Enter any number for square");
// var sq = num ** 2; 
// function square() {
//     alert(sq);
// }
// square();

// function factorial(x) {
//     if (x == 0){
//         return 1;
//     }
//     else {
//         return x * factorial(x - 1);
//     }
// }

// var num = prompt('Enter a positive number: ');
// if (num >= 0){
//     var result = factorial(num);
//     document.write('The factorial of '+ num + ' is ' + result);
// } 
// else{
//     alert('Enter a positive number: ');
// }
// var fNum = prompt("Enter your first number");
// var lNum = prompt("Enter yourlast number");

// function getCount() {
//     for(var i = fNum; i <= lNum; i++){
//         document.write(i + "<br>");
//     }
// }
// getCount();

// var base = parseFloat(prompt("Enter base in a number"));
// var per = parseInt(prompt("Enter perpendicular"));
// var tot = base + per;
// function hypo(tot) {
//     var tot = base + per;
//     function pow(){
//         var sum = tot ** 2;
//         alert(sum);
//     }
//     pow();
// }
// hypo(tot);

// var wid =parseInt(prompt("Enter a width"));
// var hei = parseInt(prompt("Enter a height"));
// var tot = wid * hei;
// function area(tot) {
//     alert(tot);
// }
// area("Area of right angle triangle "+tot);
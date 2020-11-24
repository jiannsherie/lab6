var today= new Date();
var hourNow = today.getHours();
var greeting;
let confirmation;

let firstname = prompt("first name?");
confirm("Are you sure your name is "+firstname+"?")

if (hourNow > 18 && confirmation == true) {
greeting= 'Good evening! ' +firstname;
}
else if (hourNow > 18 && confirmation != true) {
greeting= 'Hello Human!'
}
else if (hourNow > 12) {
greeting = 'Good afternoon! ' +firstname;
}
else if (hourNow > 0) {
greeting = 'Good morning! ' +firstname;
}
else {
greeting = 'Welcome! ' +firstname;
}
document.write( '<h3>' + greeting + '</h3>');
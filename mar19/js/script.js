document.getElementById('btn2').style.color = "red";

// console.log("Here is my first console message");
// console.info("This is info");
// console.warn("Danger Will Robinson!");
// console.error("Uh Uh uh. You didn't say the magic word")

//Browser Alert Box
// alert('Here is my popup.');

//Browser Confirm Box
// var userResult = confirm("Did you remmeber to lock your car?");
// console.log(userResult);

//Browser Prompt Box
// var userName = prompt("What is your name?");
// console.log(userName);


/*
Variables
    Must start with a lowercase!
    Must start with a letter.
    can contain underscore.
    May use camelCasing.
*/
var username;
var room1;
var user_name;
var userName;
var theUsersFirstNameOnly;


// Math
var age = 27;
var decade = 10;
var double = 2; // * (asterisk)
var divide = 4; // / (forward slash)
//divide result by 4
var newAge = (age + decade) * double / divide;
//PEMDAS matters!
console.log(newAge);


//concatination
// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// alert(firstName + " " +lastName);

/* String Interpolation
     $ {variable}
 */
// alert(`${firstName} ${lastName}`);

// Prompt user for
// the make of vehicle
// the year
// the color
// alert the result

// 3 new variable
// formatting: color, year, make.

function getUserVehicle () {
    var color = prompt("what is the color of your vehicle?")
    var year = prompt("What is the year of your vehicle?")
    var make = prompt("What is the make of your Vehicle?")
    alert(`${color} , ${year} ${make}`);
}


// function primaryUser() {
//     var first = prompt("What is your first name?");
//     var last = prompt("What is your last name?");
//     var place = prompt("where were you born?");

//     document.getElementById('primaryUser').innerHTML = first + " " + last + ", born in" + place;
// }

function Usersports() {
    var football = prompt("Who is your favorite football team?")
    var basketball = prompt(" who is your favorite basketball team?")
    var baseball = prompt("Who is your favorite baseball team?")

    document.getElementById('Usersports').innerHTML = football + "," + basketball + "," + baseball;
}

function CarsUser() {
    var Ford = prompt("What is your favorite Ford muscle car?")
    var Dodge = prompt(" What is your favorite Dodge muscle car?")
    var Chevrolet = prompt("What is your favorite Chevrolet muscle car?")

    document.getElementById('CarsUser').innerHTML = Ford + "," + Dodge + "," + Chevrolet;
}
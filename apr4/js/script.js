// function getUserName(){
//     var username = prompt ("Please enter your full name");
//     var splitUsername = username.split(" ");
//     // console.log(username);
//     outputUsername(username)
// }

// function outputUsername(nameArray){
    // document.getElementById('firstname').innerHTML = nameArray[0];
    // document.getElementById('lastname').innerHTML = nameArray[1];
//     for(var i = 0; i < nameArray.length; i++) {
//         if( i == 0 || i == nameArray.length - 1) {
//             // console.log("we got the zeroth element!", nameArray[1]);
//             document.getElementById('firstname').innerHTML += nameArray[i] + " ";
//         }else{
//             console.log("not the zeroth");
//         }
//     }
// }

// getUserName();



/** 
 * Arrays
 */
// var stuff = ["mustang", "camero", "charger"];
// console.log(stuff[1]); //get the second element
// console.log(stuff.length); //how many elements

// // push method
// stuff.push("bmw"); // add to array
// console.log(stuff);

// stuff.pop();
// console.log(stuff);

// stuff.pop();
// console.log(stuff);

// var removedCar = stuff.pop();
// console.log(stuff);
// console.log(removedCar);

// //Unshift Method
// stuff.unshift("chevy");
// console.log(stuff);

// stuff.shift();
// console.log(stuff);

// //splice method
// stuff.splice(1, 1, "red", "green");
// console.log(stuff);

// stuff.splice(1, 1, "grape", "kiwi");
// console.log(stuff);

// stuff.splice(2, 1)
// console.log(stuff);

// // slice method
// stuff.slice(4);
// var removed = stuff.slice (4, 1);
// console.log(stuff);
// console.log(removed);



// array of movies
var movies = ["Undisputed", "Balto", "Blood Sport", "Open Range", "Lion King"];
console.log(movies);
console.log(movies.lenght);

movies.push("Die Hard");
console.log(movies);
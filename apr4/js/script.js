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
// var movies = ["Undisputed", "Balto", "Blood Sport", "Open Range", "Lion King"];
// console.log(movies);
// console.log(movies.lenght);

// movies.push("Die Hard");
// console.log(movies);
var button = document.querySelector("#story");
button.addEventListener("click", story);

function story(){
    var question1 = prompt ("Do you go throught the forest or through the mountain?");
    if (question1 == "forest") {
        forest();
    } else if (question1 == "mountain") {
        mountain();
    }
}

function forest() {
    var question2 = prompt ("Do you climb the trees or swim in the river?");
    if (question2 == "trees") {
        trees();
    } else if (question2 == "river") {
        river();
    }
}

function mountain() {
var question3 = prompt ("Do you light a fire or use a flash light?");
    if (question3 == "fire") {
        fire();
    } else if (question3 == "flashlight") {
        flashlight();
    }
}

function trees() {
var question1 = prompt ("Do you go throught the forest or through the mountain?");
    if (question1 == "forest") {
        forest();
    } else if (question1 == "mountain") {
        console.log ("moutain")
    }
}
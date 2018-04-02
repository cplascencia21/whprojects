// var p1 = document.getElementById('p1');
// console.log(p1);

// var p1q = document.querySelector('#p2');
// console.log(p1q);

// var pClass = document.querySelector('.p');
// console.log(pClass);

// var pLast = document.querySelector('.p:last-of-type');
// console.log(pLast);
// pLast.style.fontSize = '28px';

// var pClasses = document.querySelectorAll('.p');
// console.log(pClasses);
// pClasses[2].style.fontSize = '8px';
// pClasses[1].style.color = 'red';
// pClasses[3].style.fontWeight = 'boldest';

// var pByClassname = document.getElementsByClassName('p');
// console.log(pByClassname);
// pByClassname[0].style.fontSize = '32px';

// var pByTagname = document.getElementsByTagName('p');
// console.log(pByTagname);
// // pByTagname[9].style.color = 'yellow';
// console.log(pByTagname.length);


// For Loop
// |-------------| Arguments
// |-------| New Variable
//          |------| number of loops
//                  |-| Incrementor
// for(var i = 0; i < 10; i ++) {
//     pByTagname[i].style.color = 'red';
//     console.log(i);
// // }

// var myName = "Carlos"
// console.log(myName.length);

// for(var i = 0; i < myName.length; i ++) {
//     console.log(myName[i]);
//     console.log(i);
// }

// function getUsername() {
//     var username = prompt("your name");
//     console.log(username) + 'from inside the fuction';
//     printUsername(username);
// }

// getUsername(); 
// function printUsername(x) {
//     for(var i = 0; i < x.length; i++) {
//         console.log(x[i]);
//     }
// }

//get users two numbers
// function getUsernums() {
//     var num1 = prompt('Please enter a number');
//     var num2 = prompt('Please enter another number');
//     addUserNums(num1, num2);
// }


// // alert adde3d numbers
// function addUserNums(x,y) {
//     alert( parseInt(x) + parseInt(y) );
// }

// getUsernums();

// ['p', 'p', 'p']
// ['red', 'blue', 'green']

// p1.color = red
// P2.color = blue
// p3.color = green

// get users three colors

var paragraphs = document.querySelectorAll('p');

function getUsercolors() {
    var color1 = prompt('Please pick a color');
    var color2 = prompt('please pick a second color');
    var color3 = prompt('please pick a third color');

    assignUserColors(color1, color2, color3);
}

function assignUserColors(x, y, z) {
    for(var i = 0; i < arguments.length; i++) {
        paragraphs[i].style.colors = arguments[i];
    }
}

getUsercolors();





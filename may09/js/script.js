// var firstname = 'Carlos';

// function whatsName(){
//     var lastname = 'Plascencia';
//     console.log(firstname);
//     whatsLastName(lastname);
// }

// whatsName();

// //console.log(lastname);

// //var
// //let
// //const

// const name = 'carlos';
// let color = 'grey';

// for(let i = 0; i < 5; i ++){
//     console.log('running' + 1 + 'times');
// }

// function whatsLastName(str){
//     console.log(str);
//     console.log(i);
// }

// console.log(name, color);
// color = 'red';

// console.log(color);

// console.log(i);

// for(i; i < 10; i++){
//     console.log('running again' + i +'times');
// }

// let firstName = 'Carlos';
// let lastName = 'Plascencia';
// let nameCombined = `${firstName} Daniel ${lastName}`;
// console.log(nameCombined);

let btn = document.querySelector('button');
console.log(btn);
// btn.addEventListener('click', function(evt){
//     console.log(this);
//     var colorizer = () => this.style.color = 'red';
//     colorizer();
// });

// var logCase = function(str){
//     console.log(str);
//     console.log(this);
//     return () => console.log(this);
// }

var colors = ['red', 'orange', 'green', 'blue'];

for (let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

colors.forEach(function(x, y){
    console.log(x, y);
})

//for of loop
var nums = [10, 20, 30, 40];
for(let num of nums){
    num += 1;
    console.log(num);
}

let myName = 'Carlos Plascencia';
for(let letter of myName){
    console.log(letter);
}



//this - context based. look to the left of the dot.

// var btns = document.querySelector('button');

// for(var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', function(evt){
//         console.log(evt.target);
//         console.log(this);
//     });
// }

window.addEventListener('click', function(evt){
    console.log(evt.target.nodeName);
    if(evt.target.nodeName == 'BUTTON'){
        console.log(evt.target);
        console.log(this);
    }
});


var cars = ['jeep', 'honda', 'jeep', 'subaru'];
// var types = ['string', true, 5, [1, 2, 3], Carlos];
// console.log(types[3][1]);

// objects

var car = {
    type: 'jeep', 
    model: 'wrangler',
    color: 'black',
    offroad: true,
    trim: ['sunroof', 'hardtop', '4 wheel drive']
};
// console.log(car.trim);

var Carlos = {
    firstname: 'Carlos',
    lastname: 'Plascencia',
    age: '26',
    height: "6'1",
    hair: true,
    haircolor: 'black',
    facialhair: true,
    facialhaircolor: 'black',
    greeting: function(msg){
        console.log(this.firstname);
        console.log(msg + this.firstname);
    }
}

// var types = ['string', true, 5, [1, 2, 3], Carlos];
// console.log(types);

// console.log(Carlos.lastname);
// MutationEvent.middlename = 'Cruz';
// console.log(Carlos);

// Carlos.greeting("Hey there!");

// Carlos.firstname = "Daniel";
// Carlos.greeting("I'm now");


// object constructor function
// function Person(first, last, age, eye){
//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
//     this.eyecolor = eye;
// }

// var myDad = new Person('Lupe', 'Plascencia', 52, 'brown');
// console.log(myDad.eyecolor);

// var myMom = new Person('Monica', 'Cruz', 49, 'brown');
// console.log(myMom.age);

// var mySis = new Person('Caroline', 'Martinez', 8, 'green');
// console.log(mySis.firstname);


/*
    username
    email
    password
*/

var form = document.querySelector('form');

var users = [];
var user = 0;

function UserAcc(user, email, password){
    this.username = user;
    this.email = email;
    this.password = password;
}

var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    users.push(
        new UserAcc(
            form.elements[0].value,
            form.elements[1].value,
            form.elements[2].value
        )
    );
    // user++;
    console.log(users);
    
});

// console.log(submitBtn);


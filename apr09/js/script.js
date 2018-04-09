// function welcomeMsg(str){
    // console.log(str);
    // return "Welcome" + str;
// }


// consoleInfo('Carlos');
// console.log( welcomeMsg('Carlos') );

// function calcNums(x,y) {
    // console.log(x + y);
    // return x + y;
// }

// console.log( calcNums(3, 2) );

// var h3 = document.querySelector('h3');
// var user = document.querySelector('#user');

function concatStrings(str1, str2) {
    return str1 + " " + str2;
}

// function getFirstname() {
//     return prompt('What is your first name?');
// }

// function getLastname() {
//     return prompt('What is your last name?');
// }

// user.textContent = concatStrings( getFirstname(), getLastname() );

// function welcomeUser() {
//     h3.innerHTML = concatStrings( getFirstname(), getLastname() );
// }

// welcomeUser();

var spans = document.querySelectorAll('span');
var occupation = ['janitor', 'teacher', 'developer', 'plumber', 'cashier', 'bus driver'];
var plural = ['fish', 'monkeys', 'shoes', 'cactii'];
var adjective = ['cold', 'hot', 'scorching', 'tiring'];
var number = ['21', '36', '20', '22'];
var nationality = ['american', 'mexican', 'italian', 'french'];
var verb = ['drowned', 'thrown', 'dropped', 'tackled'];

for(var i = 0; i < spans.length; i++){
    //switch statement\
    var s = spans[i];
    switch (s.className){
        case 'occupation':
            spans[i].textContent = occupation[getRandNum( occupation.length )];
            break;
        case 'plural':
            spans[i].textContent = plural[getRandNum( plural.length )];
            break;
        case 'adjective':
            spans[i].textContent = adjective[getRandNum( adjective.length )];
            break;
        case 'number':
            spans[i].textContent = number[getRandNum( number.length )];
            break;
        case 'nationality':
            setText(s, nationality);
            break;
        case 'verb':
            setText(s, verb);
            break;
        default:
            

    }
}

function getRandNum(num){
    return Math.floor(Math.random() * num);
}

function setText(currSpan, testArray) {
    currSpan.textContent = testArray[getRandNum(testArray.length)];
}
// var paras = document.querySelectorAll('p');
// paras.classList.contains('classname');

// for(var i = 0; i < paras.length; i++) {
    // console.log(paras[i].classList.contains('para'));
    // if(!0){
        // console.log('thats not true');
    // }
// }

// console.log(3 == '3');

// console.log(typeof(3));
// console.log(typeof('3'));

// == loose comparison
// === strict comparison

// var usernum = prompt ('pick a number');
// console.log(3 + usernum);


//XMLHTTP Request
var weatherKey = '29be1483f01e8962344bd069b172a5ef';
var myUl = document.querySelector('ul')

console.log(new XMLHttpRequest());
var req = new XMLHttpRequest();
req.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=29be1483f01e8962344bd069b172a5ef');
req.onload = function() {
    if(req.readyState === 4){
        var apiData = JSON.parse(req.responseText);
        // console.log(apiData.emojis_url);
        processData(apiData);
    }
}
req.send(null);
// console.log(req.responseText);

function processData(data){
    for(var i = 0; i < data.list.length; i++){
        var weatherDesc = data.list[i].weather[0].description;
        var timeOfDay;
        var myLi = `
        <li>
            <p>${weatherDesc}</p>
        </li>
        `;
        myUl.innerHTML += myLi;
    }
}
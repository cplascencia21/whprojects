function welcome () {
    var username = prompt("What is your name?");
    document.getElementById('welcome').innerHTML = username;
}

//welcome();

function fireworks () {
    document.getElementById('h1').style.backgroundImage = "url('.img/fireworks.gif')";
    document.getElementById('h1').style.backgroundColor = "white";
    function toggleColor ();
}
    

function toggleColor () {
    document.body.classList.add('colorize'); //add a classname

    // document.body.classList.toggle('colorize'); //toggle a classname
}
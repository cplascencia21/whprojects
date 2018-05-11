const value = 5;

document.getElementById('text').innerHTML = 'live in the house' + value;

const warn = document.querySelector('#warning');

if (value < 10)(
  warn.innerHTML = "Warning: Too Low!!!!"
)

const colors = ['red', 'orange', 'yellow', 'green'];

let result = '';

colors.forEach(eachColor => (
  result = result + ' ' + eachColor;
));

document.getElementById('colors').innerHTML = result;

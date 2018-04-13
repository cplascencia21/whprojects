var items = document.querySelector('#items');
var photos = document.querySelectorAll('li');

var selectedArray = [];

var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=100",
        alt: "unsplash",
        title: "Beach Day",
        cost: 100,
        desc: "People enjoying the beach on summer vacation"
    },
    {
        img: "http://unsplash.it/256/256?image=206",
        alt: "image 206",
        title: "Outdoor Sunlight",
        cost: 75,
        desc: "Sunlight hitting the country Side."
    },
    {
        img: "http://unsplash.it/256/256?image=208",
        alt: "image 208",
        title: "Window View of Spring",
        cost: 68,
        desc: "Seeing spring from a ice covered window"
    },
    {
        img: "http://unsplash.it/256/256?image=211",
        alt: "image 211",
        title: "Tug Boat Docked",
        cost: 85,
        desc: "View a tug boat docked in a port"
    },
    {
        img: "http://unsplash.it/256/256?image=214",
        alt: "image 204",
        title: "New York at its best",
        cost: 95,
        desc: "Captured New York from a high point!"
    }
];

function displayItems(arr) {
    for(var i = 0; i < arr.length; i++){
        var item = `
        <li data-sku="${i}">
            <input type="checkbox">
            <img src="${arr[i].img}" alt="${arr[i].alt}">
            <h3>${arr[i].title}</h3>
            <p>$${arr[i].cost}</p>
            <p>${arr[i].desc}</p>
        </li>`;
        items.innerHTML += item;
    }
}

displayItems(itemArray);



function addListener(arr, objArr){
    for(var i = 0; i < arr.length; i++){
        arr[i].addEventListener('click', function(evt){
            this.classList.toggle('selected');
        
            //ternary operator // aka super awesome if statement
            (this.firstElementChild.checked) ?
                this.firstElementChild.checked = false : 
                this.firstElementChild.checked = true;

        
            selectedArray.push(objArr.slice(this.dataset.sku, parseInt(this.dataset.sku) + 1)[0]);
            console.log(selectedArray);
        });
    }
    
}

addListener(items.children, itemArray);


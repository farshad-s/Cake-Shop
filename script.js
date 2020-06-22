const sweets = document.getElementsByClassName('sweet-box');
const cupcakes = document.getElementsByClassName('cupcake-box');
const cakes = document.getElementsByClassName('cake-box');
const doughnuts = document.getElementsByClassName('doughnut-box');

const sweetButton = document.getElementById('sweet-button');
const cupcakeButton = document.getElementById('cupcake-button');
const cakeButton = document.getElementById('cake-button');
const doughnutButton = document.getElementById('doughnut-button');
const displayAllButton = document.getElementById('all');

const searchBar = document.getElementById('search-bar');

function cakeDisplay() {
    for (let i = 0; i < cakes.length; i++) {
        cakes[i].style.display = 'block';
    };
}

function cupcakeDisplay() {
    for (let i = 0; i < cupcakes.length; i++) {
        cupcakes[i].style.display = 'block';
    };
}

function sweetDisplay() {
    for (let i = 0; i < sweets.length; i++) {
        sweets[i].style.display = 'block';
    };
}

function doughnutDisplay() {
    for (let i = 0; i < doughnuts.length; i++) {
        doughnuts[i].style.display = 'block';
    };
}

function noCakeDisplay() {
    for (let i = 0; i < cakes.length; i++) {
        cakes[i].style.display = 'none';
    };
}

function noCupcakeDisplay() {
    for (let i = 0; i < cupcakes.length; i++) {
        cupcakes[i].style.display = 'none';
    };
}

function noSweetDisplay() {
    for (let i = 0; i < sweets.length; i++) {
        sweets[i].style.display = 'none';
    };
}

function noDoughnutDisplay() {
    for (let i = 0; i < doughnuts.length; i++) {
        doughnuts[i].style.display = 'none';
    };
}

function cakeFilter() {    
    cakeDisplay();
    noCupcakeDisplay();
    noSweetDisplay();
    noDoughnutDisplay();
}

function cupcakeFilter() {
    noCakeDisplay();
    cupcakeDisplay();
    noSweetDisplay();
    noDoughnutDisplay();
}

function sweetFilter() {
    noCakeDisplay();
    noCupcakeDisplay();
    sweetDisplay();
    noDoughnutDisplay();
}

function doughnutFilter() {
    noCakeDisplay();
    noCupcakeDisplay();
    noSweetDisplay();
    doughnutDisplay();
}

function allFilter() {
    cakeDisplay();
    cupcakeDisplay();
    sweetDisplay();
    doughnutDisplay();
}

function cakesOnly() {
    cakeButton.addEventListener('click', cakeFilter)
}

function cupcakesOnly() {
    cupcakeButton.addEventListener('click', cupcakeFilter)
}

function sweetsOnly() {
    sweetButton.addEventListener('click', sweetFilter)
}

function doughnutsOnly() {
    doughnutButton.addEventListener('click', doughnutFilter)
}

function displayAll() {
    displayAllButton.addEventListener('click', allFilter)
};

function textBarSearch() {
    if (searchBar.value === 'cakes') {
        return cakeFilter();
    }
    else if (searchBar.value === 'cupcakes') {
        return cupcakeFilter();
    }
    else if (searchBar.value === 'sweets') {
        return sweetFilter();
    }
    else if (searchBar.value === 'doughnuts') {
        return doughnutFilter();
    }
    else if (searchBar.value === 'all') {
        return allFilter();
    }
}

cakesOnly();
cupcakesOnly();
sweetsOnly();
doughnutsOnly();
displayAll();
textBarSearch();






const sweets = document.getElementsByClassName('sweet-box');
const cupcakes = document.getElementsByClassName('cupcake-box');
const cakes = document.getElementsByClassName('cake-box');
const doughnuts = document.getElementsByClassName('doughnut-box');
const confecHolder = document.getElementsByClassName('confec-holder')[0];

const sweetButton = document.getElementById('sweet-button');
const cupcakeButton = document.getElementById('cupcake-button');
const cakeButton = document.getElementById('cake-button');
const doughnutButton = document.getElementById('doughnut-button');
const displayAllButton = document.getElementById('all');

const searchBar = document.getElementById('search-bar');

function cakesOnly() {
    cakeButton.addEventListener('click', function() {
        for (let i = 0; i < cakes.length; i++) {
            cakes[i].style.display = 'block';
        };
        for (let i = 0; i < cupcakes.length; i++) {
            cupcakes[i].style.display = 'none';
        };
        for (let i = 0; i < sweets.length; i++) {
            sweets[i].style.display = 'none';
        };
        for (let i = 0; i < doughnuts.length; i++) {
            doughnuts[i].style.display = 'none';
        };
    })
}

function cupcakesOnly() {
    cupcakeButton.addEventListener('click', function() {
        for (let i = 0; i < cakes.length; i++) {
            cakes[i].style.display = 'none';
        };
        for (let i = 0; i < cupcakes.length; i++) {
            cupcakes[i].style.display = 'block';
        };
        for (let i = 0; i < sweets.length; i++) {
            sweets[i].style.display = 'none';
        };
        for (let i = 0; i < doughnuts.length; i++) {
            doughnuts[i].style.display = 'none';
        };
    })
};

function sweetsOnly() {
    sweetButton.addEventListener('click', function() {
        for (let i = 0; i < cakes.length; i++) {
            cakes[i].style.display = 'none';
        };
        for (let i = 0; i < cupcakes.length; i++) {
            cupcakes[i].style.display = 'none';
        };
        for (let i = 0; i < sweets.length; i++) {
            sweets[i].style.display = 'block';
        };
        for (let i = 0; i < doughnuts.length; i++) {
            doughnuts[i].style.display = 'none';
        };
    })
};

function doughnutsOnly() {
    doughnutButton.addEventListener('click', function() {
        for (let i = 0; i < cakes.length; i++) {
            cakes[i].style.display = 'none';
        };
        for (let i = 0; i < cupcakes.length; i++) {
            cupcakes[i].style.display = 'none';
        };
        for (let i = 0; i < sweets.length; i++) {
            sweets[i].style.display = 'none';
        };
        for (let i = 0; i < doughnuts.length; i++) {
            doughnuts[i].style.display = 'block';
        };
    })
};

function displayAll() {
    displayAllButton.addEventListener('click', function() {
        for (let i = 0; i < cakes.length; i++) {
            cakes[i].style.display = 'block';
        };
        for (let i = 0; i < cupcakes.length; i++) {
            cupcakes[i].style.display = 'block';
        };
        for (let i = 0; i < sweets.length; i++) {
            sweets[i].style.display = 'block';
        };
        for (let i = 0; i < doughnuts.length; i++) {
            doughnuts[i].style.display = 'block';
        };
    })
};

cakesOnly();
cupcakesOnly();
sweetsOnly();
doughnutsOnly();
displayAll();
textboxFilter();
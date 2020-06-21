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

function cakesOnly() {
    cakeButton.addEventListener('click', function() {
        sweets[0].style.display = 'none';
        sweets[1].style.display = 'none';
        sweets[2].style.display = 'none';
        cupcakes[0].style.display = 'none';
        cupcakes[1].style.display = 'none';
        cupcakes[2].style.display = 'none';
        doughnuts[0].style.display = 'none';
        doughnuts[1].style.display = 'none';
        doughnuts[2].style.display = 'none'; 
        cakes[0].style.display = 'block';
        cakes[1].style.display = 'block';
        cakes[2].style.display = 'block';
    })
}

function cupcakesOnly() {
    cupcakeButton.addEventListener('click', function() {
        sweets[0].style.display = 'none';
        sweets[1].style.display = 'none';
        sweets[2].style.display = 'none';
        cakes[0].style.display = 'none';
        cakes[1].style.display = 'none';
        cakes[2].style.display = 'none';
        doughnuts[0].style.display = 'none';
        doughnuts[1].style.display = 'none';
        doughnuts[2].style.display = 'none'; 
        cupcakes[0].style.display = 'block';
        cupcakes[1].style.display = 'block';
        cupcakes[2].style.display = 'block';
    })
}

function sweetsOnly() {
    sweetButton.addEventListener('click', function() {
        cupcakes[0].style.display = 'none';
        cupcakes[1].style.display = 'none';
        cupcakes[2].style.display = 'none';
        cakes[0].style.display = 'none';
        cakes[1].style.display = 'none';
        cakes[2].style.display = 'none';
        doughnuts[0].style.display = 'none';
        doughnuts[1].style.display = 'none';
        doughnuts[2].style.display = 'none'; 
        sweets[0].style.display = 'block';
        sweets[1].style.display = 'block';
        sweets[2].style.display = 'block';
    })
}

function doughnutsOnly() {
    doughnutButton.addEventListener('click', function() {
        cupcakes[0].style.display = 'none';
        cupcakes[1].style.display = 'none';
        cupcakes[2].style.display = 'none';
        cakes[0].style.display = 'none';
        cakes[1].style.display = 'none';
        cakes[2].style.display = 'none';
        sweets[0].style.display = 'none';
        sweets[1].style.display = 'none';
        sweets[2].style.display = 'none'; 
        doughnuts[0].style.display = 'block';
        doughnuts[1].style.display = 'block';
        doughnuts[2].style.display = 'block';
    })
}

function displayAll() {
    displayAllButton.addEventListener('click', function() {
        cupcakes[0].style.display = 'block';
        cupcakes[1].style.display = 'block';
        cupcakes[2].style.display = 'block';
        cakes[0].style.display = 'block';
        cakes[1].style.display = 'block';
        cakes[2].style.display = 'block';
        sweets[0].style.display = 'block';
        sweets[1].style.display = 'block';
        sweets[2].style.display = 'block'; 
        doughnuts[0].style.display = 'block';
        doughnuts[1].style.display = 'block';
        doughnuts[2].style.display = 'block';
    })
}

cakesOnly();
cupcakesOnly();
sweetsOnly();
doughnutsOnly();
displayAll();
const sweets = document.getElementsByClassName("sweet-box");
const cupcakes = document.getElementsByClassName("cupcake-box");
const cakes = document.getElementsByClassName("cake-box");
const doughnuts = document.getElementsByClassName("doughnut-box");

const sweetButton = document.getElementById("sweet-button");
const cupcakeButton = document.getElementById("cupcake-button");
const cakeButton = document.getElementById("cake-button");
const doughnutButton = document.getElementById("doughnut-button");
const displayAllButton = document.getElementById("all");

const searchBar = document.getElementById("search-bar");

const addToCart = document.getElementsByClassName("add-to-cart");
const price = document.getElementsByClassName("price");
const cart = document.getElementsByClassName("cart")[0];
const clearCart = document.getElementsByClassName("clear")[0];

// functions for the filters //

function cakeDisplay() {
  for (let i = 0; i < cakes.length; i++) {
    cakes[i].style.display = "block";
  }
}

function cupcakeDisplay() {
  for (let i = 0; i < cupcakes.length; i++) {
    cupcakes[i].style.display = "block";
  }
}

function sweetDisplay() {
  for (let i = 0; i < sweets.length; i++) {
    sweets[i].style.display = "block";
  }
}

function doughnutDisplay() {
  for (let i = 0; i < doughnuts.length; i++) {
    doughnuts[i].style.display = "block";
  }
}

function noCakeDisplay() {
  for (let i = 0; i < cakes.length; i++) {
    cakes[i].style.display = "none";
  }
}

function noCupcakeDisplay() {
  for (let i = 0; i < cupcakes.length; i++) {
    cupcakes[i].style.display = "none";
  }
}

function noSweetDisplay() {
  for (let i = 0; i < sweets.length; i++) {
    sweets[i].style.display = "none";
  }
}

function noDoughnutDisplay() {
  for (let i = 0; i < doughnuts.length; i++) {
    doughnuts[i].style.display = "none";
  }
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

// displaying the different filters via the buttons //

function cakesOnly() {
  cakeButton.addEventListener("click", cakeFilter);
}

function cupcakesOnly() {
  cupcakeButton.addEventListener("click", cupcakeFilter);
}

function sweetsOnly() {
  sweetButton.addEventListener("click", sweetFilter);
}

function doughnutsOnly() {
  doughnutButton.addEventListener("click", doughnutFilter);
}

function displayAll() {
  displayAllButton.addEventListener("click", allFilter);
}

// displaying the different filters via the search bar //

function textBarSearch() {
  if (searchBar.value === "cakes") {
    return cakeFilter();
  } else if (searchBar.value === "cupcakes") {
    return cupcakeFilter();
  } else if (searchBar.value === "sweets") {
    return sweetFilter();
  } else if (searchBar.value === "doughnuts") {
    return doughnutFilter();
  } else if (searchBar.value === "all") {
    return allFilter();
  }
}

// adding items to basket and clearing it + alert when an item is added to basket//

var itemNumber = 0;
var items = " items - £";
var totalPrice = 0;

function itemName() {
  itemNumber === 1 ? (items = " item - £") : (items = " items - £");
}

function updateCart() {
  return (cart.innerText = itemNumber + items + totalPrice);
}

function alertTotal() {
  return alert(
    "Your Shopping Basket Total is " +
      "£" +
      totalPrice +
      "\n You have " +
      itemNumber +
      " item(s) in your Basket"
  );
}

function addToBasket() {
  addToCart[0].addEventListener("click", function () {
    itemNumber++;
    totalPrice = totalPrice + parseFloat(price[0].innerText);
    itemName();
    updateCart();
    alertTotal();
  });

  addToCart[1].addEventListener("click", function () {
    itemNumber++;
    totalPrice = totalPrice + parseFloat(price[1].innerText);
    itemName();
    updateCart();
    alertTotal();
  });

  addToCart[2].addEventListener("click", function () {
    itemNumber++;
    totalPrice = totalPrice + parseFloat(price[2].innerText);
    itemName();
    updateCart();
    alertTotal();
  });

  addToCart[3].addEventListener("click", function () {
    itemNumber++;
    totalPrice = totalPrice + parseFloat(price[3].innerText);
    itemName();
    updateCart();
    alertTotal();
  });

  addToCart[4].addEventListener("click", function () {
    itemNumber++;
    totalPrice = totalPrice + parseFloat(price[4].innerText);
    itemName();
    updateCart();
    alertTotal();
  });

  addToCart[5].addEventListener("click", function () {
    itemNumber++;
    totalPrice = totalPrice + parseFloat(price[5].innerText);
    itemName();
    updateCart();
    alertTotal();
  });

  addToCart[6].addEventListener("click", function () {
    itemNumber++;
    totalPrice = totalPrice + parseFloat(price[6].innerText);
    itemName();
    updateCart();
    alertTotal();
  });

  addToCart[7].addEventListener("click", function () {
    itemNumber++;
    totalPrice = totalPrice + parseFloat(price[7].innerText);
    itemName();
    updateCart();
    alertTotal();
  });

  addToCart[8].addEventListener("click", function () {
    itemNumber++;
    totalPrice = totalPrice + parseFloat(price[8].innerText);
    itemName();
    updateCart();
    alertTotal();
  });

  addToCart[9].addEventListener("click", function () {
    itemNumber++;
    totalPrice = totalPrice + parseFloat(price[9].innerText);
    itemName();
    updateCart();
    alertTotal();
  });

  addToCart[10].addEventListener("click", function () {
    itemNumber++;
    totalPrice = totalPrice + parseFloat(price[10].innerText);
    itemName();
    updateCart();
    alertTotal();
  });

  addToCart[11].addEventListener("click", function () {
    itemNumber++;
    totalPrice = totalPrice + parseFloat(price[11].innerText);
    itemName();
    updateCart();
    alertTotal();
  });
}

function clearShoppingCart() {
  clearCart.addEventListener("click", function () {
    cart.innerText = "0 Items";
    itemNumber = 0;
    totalPrice = 0;
  });
}

// calling the functions //

cakesOnly();
cupcakesOnly();
sweetsOnly();
doughnutsOnly();
displayAll();
textBarSearch();
addToBasket();
clearShoppingCart();
itemName();

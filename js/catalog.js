/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the product options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODONE: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    // 1. grab window into the DOM (parent is selectElement)
    // 2. create child element
    const optionElem = document.createElement('option');
    // 3. give content
    optionElem.textContent = Product.allProducts[i].name;
    // 4. append child to parent
    selectElement.appendChild(optionElem);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODONE: Prevent the page from reloading
  event.preventDefault();

  // console.log(event.target.items.value);

  // Do all the things ...
  addSelectedItemToCart(event.target.items.value, parseInt(event.target.quantity.value));
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODONE: Add the selected item and quantity to the cart
function addSelectedItemToCart(item, quantity) {
  // TODONE: suss out the item picked from the select list
  // TODONE: get the quantity
  // TODONE: using those, add one item to the Cart
  cart.addItem(item, quantity);
}

// TODONE: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  const counterElem = document.getElementById('itemCount');
  const cartCount = document.createElement('cartCount');
  cartCount.textContent = `Items in cart: ${parseInt(event.target.quantity.value)}`;
  counterElem.appendChild(cartCount);
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();

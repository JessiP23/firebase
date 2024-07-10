import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {getDatabase, ref, push} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';


const appSettings = {
    databaseURL: 'https://overview-1eaad-default-rtdb.firebaseio.com/'
}

const app = initializeApp(appSettings);
const database = getDatabase(app)
const shoppingListInDB = ref(database, 'shoppingList')

// Console firebase, Realtime database, create database, select region, and copy the url into the databaseURL

const inputForm = document.getElementById('input-field');
const buttonEvent = document.getElementById("add-button");
const list = document.getElementById("shopping-list");

buttonEvent.addEventListener("click", function() {
    let inputValue = inputForm.value;
    push(shoppingListInDB, inputValue);

    // Challenge: Clear the input field when button is pressed
    // inputForm.value = ''
    clearInputFieldEl()

    // list.innerHTML += `<li>${inputValue}</li>`
    appendItemToShoppingListEl(inputValue)
})

function clearInputFieldEl() {
    inputForm.value=''
}

function appendItemToShoppingListEl(itemValue) {
    list.innerHTML += `<li>${itemValue}</li>`
}
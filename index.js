import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {getDatabase, ref, push, onValue} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';


const appSettings = {
    databaseURL: 'https://overview-1eaad-default-rtdb.firebaseio.com/'
}

const app = initializeApp(appSettings);
const database = getDatabase(app)
const shoppingListInDB = ref(database, 'shoppingList')


//Example
const booksInDB = ref(database, 'books');


// Console firebase, Realtime database, create database, select region, and copy the url into the databaseURL

const inputForm = document.getElementById('input-field');
const buttonEvent = document.getElementById("add-button");
const list = document.getElementById("shopping-list");

onValue(booksInDB, function(snapshot) {
    let booksArray = Object.values(snapshot.val())

    clearBooksListEl()
    
    for (let i = 0; i < booksArray.length; i++) {
        let currentBook = booksArray[i]
        appendItemToShoppingListEl(currentBook)
    }

})

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

function clearBooksListEl() {
    booksInDB.innerHTML = ''
}

function appendItemToShoppingListEl(itemValue) {
    list.innerHTML += `<li>${itemValue}</li>`
}

function appendBooksToList(bookValue) {
    booksInDB.innerHTML += `<li>${bookValue}</li>`
}

/*
let scrimbaUsers = {
    "00": "sindre@scrimba.com",
    "01": "per@scrimba.com",
    "02": "frode@scrimba.com"
}


let scrimbaUsersEmails = Object.values(scrimbaUsers)
console.log(scrimbaUsersEmails);

let scribaUsersIds = Object.keys(scrimbaUsers);
console.log(scribaUsersIds);

let scrimbaUsersEntries = Object.entries(scrimbaUsers);
console.log(scrimbaUsersEntries);
*/
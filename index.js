import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {getDatabase, ref, push, onValue, remove} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';


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

buttonEvent.addEventListener("click", function() {
    let inputValue = inputForm.value;
    push(shoppingListInDB, inputValue);

    // Challenge: Clear the input field when button is pressed
    // inputForm.value = ''
    clearInputFieldEl()

    // list.innerHTML += `<li>${inputValue}</li>`
})

onValue(shoppingListInDB, function(snapshot) {
    let shoppingList = Object.entries(snapshot.val())

    clearShoppingListEl()
    
    for (let i = 0; i < shoppingList.length; i++) {
        let currentList = shoppingList[i]

        // Challenge: Make two let variables:
        //currentItemID anc currentItemValue and use currentItem to set both of them equal to the correct values.

        let currentItemID = currentList[0]
        let currentItemValue = currentList[1]
        appendItemToShoppingListEl(currentList)
    }

})

function clearShoppingListEl() {
    list.innerHTML = ''
}


function clearInputFieldEl() {
    inputForm.value = ''
}

function appendItemToShoppingListEl(item) {

    let itemID = item[0]
    let itemValue = item[1]
    // list.innerHTML += `<li>${itemValue}</li>`
    let newEl = document.createElement("li")

    newEl.textContent = itemValue

    // removing an item when clicked
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)

        remove(exactLocationOfItemInDB)
    })

    list.append(newEl)
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

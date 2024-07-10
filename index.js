import { add } from "./function.js";
import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {getDatabase, ref, push} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

// Challenge: Make sure that add is working by console logging. add with two number arguments.
console.log(add(1,1));

const appSettings = {
    databaseURL: 'https://overview-1eaad-default-rtdb.firebaseio.com/'
}

const app = initializeApp(appSettings);
const database = getDatabase(app)
const moviesInDB = ref(database, 'movies')

console.log(app);

// Console firebase, Realtime database, create database, select region, and copy the url into the databaseURL

const inputForm = document.getElementById('input-field');
const buttonEvent = document.getElementById("add-button");

buttonEvent.addEventListener("click", function() {
    let inputValue = inputForm.value;
    push(moviesInDB, inputValue)
    console.log(inputValue);
})
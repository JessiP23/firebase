const appSettings = {
    databaseURL: 'https://overview-1eaad-default-rtdb.firebaseio.com/'
}

// Console firebase, Realtime database, create database, select region, and copy the url into the databaseURL

const inputForm = document.getElementById('input-field');
const buttonEvent = document.getElementById("add-button");

buttonEvent.addEventListener("click", function() {
    let inputValue = inputForm.value;
    console.log(inputValue);
})
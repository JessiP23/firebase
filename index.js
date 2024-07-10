const inputForm = document.getElementById('input-field');
const buttonEvent = document.getElementById("add-button");

buttonEvent.addEventListener("click", function() {
    let inputValue = inputForm.value;
    console.log(inputValue);
})
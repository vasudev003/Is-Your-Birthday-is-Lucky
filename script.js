const DateOfBirth = document.querySelector("#date-of-birth");
const LuckyNumber = document.querySelector("#lucky-number");
const CheckNumberButton = document.querySelector("#check-number");

CheckNumberButton.addEventListener('click', function getvalues() {
    console.log(DateOfBirth.value, LuckyNumber.value );
} )
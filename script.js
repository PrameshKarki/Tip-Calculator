// Grabbing the elements from the DOM
const billAmount = document.getElementById('bill-amount');
const tipPercentage = document.getElementById('percentage');
const totalTip = document.getElementById('total-tip');
const totalAmount = document.getElementById('total-amount');
const numberOfPeople = document.getElementById('person-number');
const amountEach = document.getElementById('each-amount');
const tipEach = document.getElementById('each-tip');

//Function for populating data
let populateTotal = (amount) => {
    let billAmount = Number(amount);
    let percentage = Number(tipPercentage.value);
    let totalTipAmount = (billAmount * percentage) / 100;
    let totalBillAmount = billAmount + totalTipAmount;
    totalTip.innerText = totalTipAmount.toFixed(2);
    totalAmount.innerText = totalBillAmount.toFixed(2);
}

//Function for resetting data
let resetData = () => {
    totalTip.innerText = 0;
    totalAmount.innerText = 0;
    if (numberOfPeople.value !== '') {
        numberOfPeople.value = 0;
        amountEach.innerText = 0;
        tipEach.innerText = 0;
    }

}
//Function for populating data
let populateEach = (numberOfPerson) => {
    let person = Number(numberOfPerson);
    let totalAmountForEachPerson = Number(totalAmount.innerText) / person;
    let totalTipForEachPerson = Number(totalTip.innerText) / person;
    amountEach.innerText = totalAmountForEachPerson.toFixed(2);
    tipEach.innerText = totalTipForEachPerson.toFixed(2);

}
//Function for validating bill amount
let validateBillAmount = () => {
    let value = billAmount.value;
    if (value === '' || Number(value) <= 0)
        return false;
    else
        return true;
}
//Function for validating number of person
let validateNumberOfPerson = () => {
    let value = numberOfPeople.value;
    if (value === '' || Number(value) <= 0) {
        return false;

    }
    else {
        if (validateBillAmount())
            return true;
        else
            return false;
    }

}
// Function for calculating bill amount
let calculateBillAmount = () => {
    if (validateBillAmount()) {
        populateTotal(billAmount.value);
        if (validateNumberOfPerson()) {
            populateEach(numberOfPeople.value);
        }
    }
    else {
        resetData();
    }

}

//Listening event
billAmount.addEventListener('keyup', calculateBillAmount);
tipPercentage.addEventListener('change',calculateBillAmount)

numberOfPeople.addEventListener('keyup', () => {
    let value = numberOfPeople.value;
    if (validateNumberOfPerson()) {
        populateEach(value);
    }
    else {
        amountEach.innerText = 0.00;
        tipEach.innerText = 0.00;
    }
})
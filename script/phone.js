function updatePhoneNumber(isIncrease) {
    const phoneNumberFeild = document.getElementById('phone-number-feild');
    const previousPhoneNumberString = phoneNumberFeild.value;
    const previousPhoneNumber = parseInt(previousPhoneNumberString);


    let newPhoneNumber;


    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }


    phoneNumberFeild.value = newPhoneNumber;

    return newPhoneNumber;

}

//  phone Price Function  //

function updatePhonePrice(newPhoneNumber) {
    const phonePrice = newPhoneNumber * 1219;
    const phoneElement = document.getElementById('phone-total');
    phoneElement.innerText = phonePrice;
}


function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function getTextValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    // calculate total 
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    getTextValueById('sub-total', currentSubTotal);


    // tax 

    const taxTotalString = (currentSubTotal * 0.07).toFixed(2);
    const taxTotal = parseFloat(taxTotalString);
    getTextValueById('tax-total', taxTotal);


    const finalTotal = taxTotal + currentSubTotal;
    getTextValueById('final-total', finalTotal);
}

document.getElementById('phone-btn-plus').addEventListener('click', function () {

    const newPhoneNumber = updatePhoneNumber(true);
    updatePhonePrice(newPhoneNumber);

    calculateSubTotal();




})
document.getElementById('phone-btn-minus').addEventListener('click', function () {

    const newPhoneNumber = updatePhoneNumber(false);
    updatePhonePrice(newPhoneNumber);

    calculateSubTotal();

})
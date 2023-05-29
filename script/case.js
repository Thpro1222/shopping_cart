function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-feild');
    const previousCaseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(previousCaseNumberString);

    let newCaseNumber;

    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;

}


function updateCasePrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}



document.getElementById('case-btn-plus').addEventListener('click', function () {

    const newCaseNumber = updateCaseNumber(true);

    updateCasePrice(newCaseNumber);

    calculateSubTotal();

});



document.getElementById('case-btn-minus').addEventListener('click', function () {

    const newCaseNumber = updateCaseNumber(false);

    updateCasePrice(newCaseNumber);

    calculateSubTotal();
});







        // const caseNumberField = document.getElementById('case-number-feild');
        // const previousCaseNumberString = caseNumberField.value;
        // const previousCaseNumber = parseInt(previousCaseNumberString);

        // const newCaseNumber = previousCaseNumber + 1;
        // caseNumberField.value = newCaseNumber;

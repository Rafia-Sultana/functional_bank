function getInputValue(fieldId) {
    const getTextFromField = document.getElementById(fieldId);
    const getValueFromField = getTextFromField.value;
    const floatGetValueFromField = parseFloat(getValueFromField);
    getTextFromField.value = ' ';

    //console.log(getValueFromField);
    return floatGetValueFromField;
}
function getUpdateValue(fieldId, amount) {
    // const textTotal = document.getElementById(fieldId);
    // const valueTotal = textTotal.innerText;
    // const floatValueTotal = parseFloat(valueTotal);
    const floatValueTotal = getInnerTextValue(fieldId);
    const totalCalc = amount + floatValueTotal;
    document.getElementById(fieldId).innerText = totalCalc;
    return totalCalc;


}

function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInTax = fieldTag.innerText;
    const value = parseFloat(fieldValueInTax);
    return value;

}




function updateBalance(fieldId, amount, isAdd) {

    const floatBalanceTag = getInnerTextValue(fieldId);
    if (isAdd == true) {
        let updateBalance = amount + floatBalanceTag;
        document.getElementById(fieldId).innerText = updateBalance;
    }
    else {
        let updateBalance = floatBalanceTag - amount;
        document.getElementById(fieldId).innerText = updateBalance;
    }




}







document.getElementById('depositeButton').addEventListener('click', function () {
    const amount = getInputValue('depositeInput');
    if (amount > 0) {
        getUpdateValue('depositeTotal', amount);
        updateBalance('balance-total', amount, true);
    }

});
document.getElementById('withdrawButton').addEventListener('click', function () {
    const amount = getInputValue('withdrawInput');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && balance >= amount) {
        getUpdateValue('withdrawTotal', amount);
        updateBalance('balance-total', amount, false);

    }
});
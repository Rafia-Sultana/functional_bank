//handle deposite button event
document.getElementById('depositeButton').addEventListener('click', function () {
    // console.log('deposite button clicked');
    //get the amount deposited
    const depositeInput = document.getElementById('depositeInput');
    const newDepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText);
    //console.log(depositeAmount);
    const deposite_Total = document.getElementById('depositeTotal');
    //console.log(currentDeposite.innerText);
    const previousDepositeText = deposite_Total.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);
    const newDepositTotal = (previousDepositeAmount + newDepositeAmount);

    deposite_Total.innerText = newDepositTotal;
    //console.log(currentDeposite.innerText);


    //eta ami kortesi..dekhi ki hoy...
    //balance adding
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = (previousbalanceTotal + newDepositeAmount);
    balanceTotal.innerText = newBalanceTotal;
    depositeInput.value = '';

});

//withdraw
document.getElementById('withdrawButton').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdrawInput');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);

    const withdraw_Total = document.getElementById('withdrawTotal');
    const previousWithdrawText = withdraw_Total.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);


    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);

    const newWithdrawTotal = (previousWithdrawAmount + newWithdrawAmount);
    withdraw_Total.innerText = newWithdrawTotal;


    const newWithdrawTotalInBalance = (previousbalanceTotal - newWithdrawAmount);
    balanceTotal.innerText = newWithdrawTotalInBalance;
    withdrawInput.value = '';


});
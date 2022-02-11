function getAmount(id) {
  const amount = document.getElementById(id);
  const previousAmount = amount.value;
  const newTotalAmount = parseFloat(previousAmount);
  amount.value = "";
  return newTotalAmount;
}

function updateAmount(id, newTotalAmount) {
  const currentAmount = document.getElementById(id);
  const currentAmountText = currentAmount.innerText;
  const newAmount = parseFloat(currentAmountText);
  const newTotal = newAmount + newTotalAmount;
  currentAmount.innerText = newTotal;
}
function getCurrentBalance() {
  const currentBalance = document.getElementById("balance");
  const currentBalanceText = currentBalance.innerText;
  const newBalance = parseFloat(currentBalanceText);
  return newBalance;
}
function balanceAdd(newTotalAmount, isAdd) {
  const balanceTotal = document.getElementById("balance");
  const previouseBalance = getCurrentBalance();

  if (isAdd === true) {
    balanceTotal.innerText = previouseBalance + newTotalAmount;
  } else {
    balanceTotal.innerText = previouseBalance - newTotalAmount;
  }
}

document.getElementById("deposit-btn").addEventListener("click", function () {
  //get amount
  const newTotalAmount = getAmount("d-amount");

  //update amount
  if (newTotalAmount > 0) {
    updateAmount("d-balance", newTotalAmount);
    //add balance
    balanceAdd(newTotalAmount, true);
  }
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  //get amount
  const newTotalAmount = getAmount("w-amount");

  if (newTotalAmount > 0) {
    //update amount
    updateAmount("w-balance", newTotalAmount);
    //minus balance
    balanceAdd(newTotalAmount, false);
  }
});

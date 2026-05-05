const validPin = 1234;
//function to get input values
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

// function to get innertext
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  //   console.log(elementValueNumber);
  return elementValueNumber;
}
//function to set innerText
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}
//addMoney feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    //value access from form
    const bank = getInputValue("bank");
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = getInputValueNumber("add-amount");
    const addPin = getInputValueNumber("add-pin");
    // console.log(bank,accountNumber, addAmount,addPin);

    //addMoney to main balance
    const availableBalance = getInnerText("available-balance");
    // console.log(availableBalance)

    if (accountNumber.length < 11) {
      alert("please provide valid account number");
      return;
    }
    if (addPin !== validPin) {
      alert("Please provide valid pin number");
      return;
    }

    const totalNewAvailableBalance = addAmount + availableBalance;
    setInnerText(totalNewAvailableBalance);
  });

// toggling feature
document.getElementById("add-btn").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById("CashOut-btn").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "block";
});

// cashOut feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const amountWithdraw = getInputValueNumber("withdraw-amount");
  const AvailableBalance = getInnerText("available-balance");
  const NewBalance = AvailableBalance - amountWithdraw;
  // console.log(NewBalance)
  setInnerText(NewBalance);
});

const validPin = 1234;
const transactionData = [];
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
//function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
//function to toggle buttons
function handleToggleButton(id) {
  const formBtn = document.getElementsByClassName("form-btn");
  for (const btn of formBtn) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
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
    const data = {
      name: "Add Money",
      date: new Date().toLocaleString(),
    };
    transactionData.push(data);
  });

// toggling feature
document.getElementById("add-btn").addEventListener("click", function () {
  handleToggle("add-money-parent");
  handleToggleButton("add-btn");
});

document.getElementById("CashOut-btn").addEventListener("click", function () {
  handleToggle("cash-out-parent");
  handleToggleButton("CashOut-btn");
});
document.getElementById("transfer-btn").addEventListener("click", function () {
  handleToggle("transfer-money-parent");
  handleToggleButton("transfer-btn");
});
document.getElementById("get-bonus-btn").addEventListener("click", function () {
  handleToggle("get-bonus-parent");
  handleToggleButton("get-bonus-btn");
});
document.getElementById("bill-btn").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
  handleToggleButton("bill-btn");
});
document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    handleToggle("transaction-parent");
    handleToggleButton("transaction-btn");
  });

// cashOut feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const amountWithdraw = getInputValueNumber("withdraw-amount");
  const AvailableBalance = getInnerText("available-balance");
  const NewBalance = AvailableBalance - amountWithdraw;
  // console.log(NewBalance)
  setInnerText(NewBalance);
  const data = {
    name: "Cash Out",
    date: new Date().toLocaleString(),
  };
  transactionData.push(data);
  // console.log(transactionData)
});

//transaction
document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    // console.log('clicked')
    // console.log(transactionData);
    const transactionContainer = document.getElementById('transaction-container')
    for(const data of transactionData){
        const div = document.createElement('div')
        div.innerHTML=`
          <div class="bg-white rounded-xl p-3 flex justify-between items-center">
                    <div class="flex items-center">
                        <div class="bg-[#f4f5f7] p-3 rounded-full">
                            <img src="assets/wallet1.png" alt="">
                        </div>
                        <div class="ml-3">
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
        `
        transactionContainer.appendChild=div;
    }
  });

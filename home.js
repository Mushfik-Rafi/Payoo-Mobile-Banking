const validPin = 1234;

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    //value access from form
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const addPin = parseInt(document.getElementById("add-pin").value);
    // console.log(bank,accountNumber, addAmount,addPin);
    
    //addMoney to main balance
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    // console.log(availableBalance)

    if(accountNumber.length <11){
        alert("please provide valid account number")
        return;
    }
    if(addPin!==validPin){
        alert('Please provide valid pin number')
        return;
    }

    const totalNewAvailableBalance =  addAmount+availableBalance;
    document.getElementById('available-balance').innerText=totalNewAvailableBalance

  });

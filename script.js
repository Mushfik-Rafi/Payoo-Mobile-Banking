//login button functionality

document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 12345678910;
  const pinNumber = 1234;
  //get mobile number
  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);
  //get pin number
  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberConverted = parseInt(pinNumberValue);

  console.log(mobileNumberValueConverted);
  console.log(pinNumberConverted);

  //pin and mobile number matching
  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberConverted === pinNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert("invalid credentials");
  }
});

//Business Logic 

// Convert the input string into an array of digits
//  var digits = cardNumber.split('').map(function(digit) {
//   return parseInt(digit);
// });

// //Double numbers
// function creditNum(n) {
//   for (let i = 1; i < doubleNum.length; i+=1) {
//     doubleNum[i] *= 2;
// }
// return doubleNum;
// }
// //Doubles every other number 
// function creditNum(n) {
//   for (let i = 1; i < doubleNum.length; i+=2) {
//     doubleNum[i] *= 2;
// }
// return doubleNum;
// }

function validateCreditCard(cardNumber) {
  // Convert the input string into an array of digits
  var digits = cardNumber.split('').map(function(digit) {
    return parseInt(digit);
  });

  // Start from the rightmost digit, double every second digit
  for (var i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] *= 2;
    if (digits[i] > 9) {
      digits[i] -= 9;
    }
  }

  // Sum all the digits
  var sum = digits.reduce(function(acc, cur) {
    return acc + cur;
  });

  // Check if the sum is a multiple of 10
  return sum % 10 === 0;
}

//UI Logic 

function handleForm(event) {
  event.preventDefault();

  var cardNumber = document.getElementById("cardNumber").value;
  var result = document.getElementById("result");
  if (validateCreditCard(cardNumber)) {
    result.innerHTML = "Valid credit card number";
  } else {
    result.innerHTML = "Invalid credit card number";
  }
}

window.addEventListener("load", function() {
  document.querySelector("form")
addEventListener("submit", handleForm)
});
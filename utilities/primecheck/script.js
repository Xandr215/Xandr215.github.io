// function to check if a number is prime or not
function isPrime(num) {
  // check if number is equal to 1
  if (num === 1) {
    return false;
  }
  // check if number is greater than 1
  else if (num > 1) {
    // looping through 2 to square root of number
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // check if number is divisible by any number other than 1 and itself
      if (num % i == 0) {
        return false;
      }
    }
    // if number is not divisible by any number, it is prime
    return true;
  }
  // check if number is less than 1
  else {
    return false;
  }
}

// get the input element from the webpage
let input = document.getElementById("input");

// get the button element from the webpage
let button = document.getElementById("button");

// get the output element from the webpage
let output = document.getElementById("output");

// add a click event listener to the button
button.addEventListener("click", function() {
  // get the value of the input
  let number = parseInt(input.value);

  // check if the input is a valid number
  if (isNaN(number)) {
    // display an error message
    output.textContent = "Please enter a valid number.";
  }
  else {
    // call the isPrime function and store the result
    let result = isPrime(number);

    // display the result
    if (result) {
      output.textContent = number + " is a prime number.";
    }
    else {
      output.textContent = number + " is not a prime number.";
    }
  }
});
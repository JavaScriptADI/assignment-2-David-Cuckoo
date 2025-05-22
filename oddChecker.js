function checkEvenOrOdd() {
      let userInput = document.getElementById("numberInput").value;
      let number = parseInt(userInput);
      let result = document.getElementById("result");

      if (isNaN(number)) {
        result.textContent = "Please enter a valid number.";
      } else if (number % 2 === 0) {
        result.textContent = "That number is even.";
      } else {
        result.textContent = "That number is odd.";
      }
    }
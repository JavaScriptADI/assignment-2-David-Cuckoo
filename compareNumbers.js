function compareNumbers() {
      let input1 = document.getElementById("num1").value;
      let input2 = document.getElementById("num2").value;

      let number1 = parseFloat(input1);
      let number2 = parseFloat(input2);
      let result = document.getElementById("comparisonResult");

      if (isNaN(number1) || isNaN(number2)) {
        result.textContent = "Please enter valid numbers.";
        return;
      }

      if (number1 > number2) {
        result.textContent = "First number is greater.";
      } else if (number2 > number1) {
        result.textContent = "Second number is greater.";
      } else {
        result.textContent = "Both numbers are equal.";
      }
    }
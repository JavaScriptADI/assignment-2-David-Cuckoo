function evaluateGrade() {
      let userInput = document.getElementById("scoreInput").value;
      let score = parseInt(userInput);
      let result = document.getElementById("gradeResult");

      if (isNaN(score) || score < 0 || score > 100) {
        result.textContent = "Please enter a valid score between 0 and 100.";
        return;
      }

      if (score >= 90) {
        result.textContent = "You got an A!";
      } else if (score >= 80) {
        result.textContent = "You got a B!";
      } else if (score >= 70) {
        result.textContent = "You got a C!";
      } else if (score >= 60) {
        result.textContent = "You got a D!";
      } else {
        result.textContent = "You got an F!";
      }
    }
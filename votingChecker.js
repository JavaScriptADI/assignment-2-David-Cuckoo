function checkVotingEligibility() {
      let ageValue = document.getElementById("ageInput").value;
      let age = parseInt(ageValue);
      let result = document.getElementById("eligibilityResult");

      if (isNaN(age) || age < 0) {
        result.textContent = "Please enter a valid age.";
        return;
      }

      if (age >= 18) {
        result.textContent = "You are eligible to vote!";
      } else {
        let yearsLeft = 18 - age;
        result.textContent = `You can vote in ${yearsLeft} year${yearsLeft > 1 ? 's' : ''}.`;
      }
    }
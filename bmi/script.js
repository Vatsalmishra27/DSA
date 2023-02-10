function calculateBMI() {
    var weight = document.querySelector("#weight").value;
    var height = document.querySelector("#height").value;
    height = height / 100;
    var bmi = weight / (height * height);
    var result = "Your BMI is " + bmi.toFixed(2) + " ";
    if (bmi < 18.5) {
      result += "(Underweight)";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result += "(Healthy weight)";
      document.querySelector("#unhealthy-weight-button").style.display = "none";
    } else if (bmi >= 25 && bmi <= 29.9) {
      result += "(Overweight)";
      document.querySelector("#unhealthy-weight-button").style.display = "inline-block";
    } else {
      result += "(Obese)";
      document.querySelector("#unhealthy-weight-button").style.display = "inline-block";

    }
    document.querySelector("#result").innerHTML = result;
    
    document.querySelector("#unhealthy-weight-button").addEventListener("click", function() {
        window.open("unhealthy-weight.html", "_self");
      });
      
  }
  
// 18. Classify people according to their Body Mass Index(BMI)
function calculateBmi(weight, height) {
    // Check for valid input types
    if (typeof weight !== "number" || typeof height !== "number") {
      return "Invalid input. Please enter weight and height as numbers.";
    }
  
    // Calculate BMI
    const bmi = weight / (height * height);
  
    // Determine classification based on BMI
    if (bmi < 18.5) {
      return `BMI: ${bmi.toFixed()} - Classification: Underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return `BMI: ${bmi.toFixed()} - Classification: Normal weight`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      return `BMI: ${bmi.toFixed()} - Classification: Overweight`;
    } else if (bmi >= 30) {
      return `BMI: ${bmi.toFixed()} - Classification: Obese`;
    }
  }
  
  console.log(calculateBmi(70, 1.75));
  console.log(calculateBmi(50, 1.5)); 
  console.log(calculateBmi("invalid", 1.8)); 
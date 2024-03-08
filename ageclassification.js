// 17. Age classification
function ageClassification(age) {
    if (age >= 0 && age <= 12) {
      return "MIMICRY";
    } else if (age >= 13 && age <= 19) {
      return "SELF-DISCOVERY";
    } else if (age >= 20 && age <= 45) {
      return "COMMITMENT";
    } else {
      return "LEGACY";
    }
  }
   // dissiplaying classification of age accordingly
  console.log(ageClassification(10)); 
  console.log(ageClassification(25)); 
  console.log(ageClassification(60)); 
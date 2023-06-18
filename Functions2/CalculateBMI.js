function calculateBMI(height,weight) {
  // bmi = weightInKilograms / heightInMeters**2;
  height /= 100;
  let bmi = weight / (height**2);
  return bmi.toFixed(2);

}

console.log(calculateBMI(180, 80)); // "24.69"
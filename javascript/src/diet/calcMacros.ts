import calcCalories from "./calcCalories";
import calcFat from "./calcFat";

export default function calcMacros(weight: number, percentage = 0.7) {
  let carbohydrates = 0
  let protein = Math.round(weight);
  let fat = calcFat(protein, percentage)
  let calories = calcCalories(carbohydrates, fat, protein)
  
  return {
    carbohydrates: carbohydrates,
    protein: protein,
    fat: fat,
    calories: calories
  }
}
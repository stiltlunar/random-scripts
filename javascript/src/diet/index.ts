import calcMacros from "./calcMacros";
import calcMeal from "./calcMeal";
import { food } from './calcMeal'

let recFood = calcMeal(calcMacros(150), 'protein')
let needFood = calcMeal(calcMacros(150), 'protein')

console.log(calcMacros(150))
console.log(calcMeal(calcMacros(150), 'protein'))

console.log('Fat: ' + ((food.burger.fat * recFood.burgers) + (food.egg.fat * recFood.eggs) + (food.bacon.fat * recFood.eggs)))
console.log('Protein: ' + ((food.burger.protein * recFood.burgers) + (food.egg.protein * recFood.eggs) + (food.bacon.protein * recFood.eggs)))
console.log('Calories: ' + ((food.burger.calories * recFood.burgers)  + (food.egg.calories * recFood.eggs) + (food.bacon.calories * recFood.eggs)))
import calcCalories from "./calcCalories"

export const food = {
  egg: {
    serving: '1 egg',
    carbohydrates: 0.7,
    protein: 6.3,
    fat: 5.2,
    calories: calcCalories(0.7, 6.3, 5.2)
  },
  bacon: {
    serving: '1 slice',
    carbohydrates: 0,
    protein: 3,
    fat: 4.5,
    calories: calcCalories(0, 3, 4.5)
  },
  burger: {
    serbing: '1/4 lb',
    carbohydrates: 0,
    protein: 17,
    fat: 30,
    calories: calcCalories(0, 17, 30)
  }
}

export default function calcMeal(macros: any, priority: 'carbohydrates'|'protein'|'fat'|'calories') {
  let burgers = (macros[priority] / food.burger[priority]) * 0.8
  let eggs = (macros[priority] / food.egg[priority]) * 0.12
  let bacon = (macros[priority] / food.bacon[priority]) * 0.08
  
  return {
    eggs: eggs,
    bacon: bacon,
    burgers: burgers
  }
}
export default function calcCalories(carbohydrates: number, protein: number, fat: number): number {
  return Math.round((carbohydrates * 4) + (protein * 4) + (fat * 9));
}
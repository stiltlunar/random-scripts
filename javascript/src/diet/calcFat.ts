export default function calcFat(protein: number, percentage = 0.7) {
  let protCals = protein * 4;
  let totalCals = protCals / (1 - percentage)
  let fatCals = totalCals - protCals
  
  return Math.round(fatCals / 9);
}
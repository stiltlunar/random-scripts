// ! Will remove all digits within the text

export default function removeVersification(text: string): string {
  return text.replace(/[\d]/g, '').trim().replace(/\s+/g, ' ')
}
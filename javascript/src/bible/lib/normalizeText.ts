export default function normalizeText(text: string, lang: 'english'|'hebrew'|'greek' = 'english'): string {
  let normalizedText = text.normalize('NFD')
  
  // English remove all punctuation.
  if (lang === 'english') {
    // punctuation
    // TODO: Replace only necessary double and single quotes. Contractions should not be removed
    normalizedText = normalizedText.replace(/[.!?,;:]/g, '')
  }

  // Hebrew remove all punctuation and accent markings. Leave the vowels
  if (lang === 'hebrew') {
    // cantillation
    normalizedText = normalizedText.replace(/[\u0591-\u05af]/g, '')
    // punctuation
    normalizedText = normalizedText.replace(/\u05c3/g, '')
    // maqef
    normalizedText = normalizedText.replace(/\u05be/g, ' ')

    // TODO: reverse string, PROBLEM: all pointing is off by 1
    // normalizedText = normalizedText.split('').reverse().join('')
  }

  // Greek remove all punctuation and accents markings.
  if (lang === 'greek') {
    // accents, but should not remove iota subscript
    normalizedText = normalizedText.replace(/[\u0300-\u0344\u0346\u036f]/g, '')

    // punctuation
    normalizedText = normalizedText.replace(/[.;,·]/g, '')
  }

  return normalizedText
}
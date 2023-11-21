export default function getUniqueWordCount(text: string): number {
  let splitText = text.split(' ');
  let uniqueWords: string[] = [];

  splitText.forEach(word => {
    if (!uniqueWords.includes(word)) {
      uniqueWords.push(word);
    }
  })

  return uniqueWords.length;
}
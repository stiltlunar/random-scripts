export default function getWordList(text: string, ):string[] {
  let splitText = text.split(' ');
  let wordList: string[] = [];

  splitText.forEach(word => {
    if (!wordList.includes(word)) {
      wordList.push(word);
    }
  })
  
  return wordList;
}
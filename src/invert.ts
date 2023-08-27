const words = {}

export function getInvertedWord(word: keyof typeof words): string {
  return words[word]
}

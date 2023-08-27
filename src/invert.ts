import { HoverProvider } from "vscode"
import { general, maths, python, rust, typescript } from "./languages"

const words = {
  ...rust,
  ...general,
  ...maths,
  ...python,
  ...typescript,
}

const input = Object.keys(words)

export function getInvertedWord(word: string): string {
  if (isRealWord(word)) {
    return words[word]
  } else {
    throw Error("Not a real word")
  }
}

function isRealWord(word: string): word is keyof typeof words {
  return input.includes(word)
}

export const hoverProvider: HoverProvider = {
  provideHover(document, position, token) {
    const range = document.getWordRangeAtPosition(position)
    const word = document.getText(range)

    return {
      contents: ["Hover Content"],
    }
  },
}

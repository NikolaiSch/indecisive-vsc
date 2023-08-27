import * as vscode from "vscode"
import { general, maths, python, rust, typescript } from "./languages"

function isValid(name: string, ins: object): object {
  if (vscode.window.activeTextEditor?.document.languageId == name) {
    console.log("Language is " + name)
    return ins
  }

  return {}
}

function isValidLanguage(name: string): boolean {
  return vscode.window.activeTextEditor?.document.languageId == name
}

const words = {
  ...isValid("rust", rust),
  ...general,
  ...maths,
  ...isValid("python", python),
  ...isValid("typescript", typescript),
  ...isValid("javascript", typescript),
}

const activeLanguages: string[] = ["general", "maths"]

if (isValidLanguage("rust")) {
  activeLanguages.push("rust")
} else if (isValidLanguage("python")) {
  activeLanguages.push("python")
} else if (isValidLanguage("typescript")) {
  activeLanguages.push("typescript")
} else if (isValidLanguage("javascript")) {
  activeLanguages.push("typescript")
}

export { activeLanguages }

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

// export const hoverProvider: HoverProvider = {
//   provideHover(document, position, token) {
//     const range = document.getWordRangeAtPosition(position)
//     const word = document.getText(range)

//     console.log(range, word)

//     if (!isRealWord(word)) {
//       return
//     }

//     vscode.window.activeTextEditor?.setDecorations(hoverDesign, [range!])

//     token.onCancellationRequested(() => {
//       vscode.window.activeTextEditor?.setDecorations(
//         vscode.window.createTextEditorDecorationType({}),
//         []
//       )
//     })
//     return {
//       contents: ["Hover Content"],
//     }
//   },
// }

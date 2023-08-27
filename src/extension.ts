import * as vscode from "vscode"
import { activeLanguages, getInvertedWord } from "./invert"

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  // vscode.languages.registerHoverProvider("javascript", hoverProvider)

  let counterAdd = vscode.commands.registerCommand(
    "indecisive.counterIncrement",
    (symbol: string) => {
      let count = context.globalState.get(symbol, 0) + 1

      context.globalState.update(symbol, count).then(() => console.log(count))
    }
  )

  let counterStats = vscode.commands.registerCommand(
    "indecisive.counterStats",
    () => {
      let symbols: { key: string; val: number }[] = []
      vscode.commands.executeCommand("work")
      for (const [key] of context.globalState.keys()) {
        let val = context.globalState.get(key, 0) as number
        if (val > 0) {
          symbols.push({ key, val })
        }
      }

      return symbols
    }
  )

  let langs = vscode.commands.registerCommand("indecisive.activeLangs", () => {
    vscode.window.showInformationMessage(
      [...activeLanguages].join(", ") + " are active"
    )
  })

  let invert = vscode.commands.registerCommand("indecisive.invert", () => {
    const editor = vscode.window.activeTextEditor

    if (!editor) {
      vscode.window.showWarningMessage("No active text editor")
      return // No open text editor
    }

    const word = editor.selection.anchor

    let range = editor.document.getWordRangeAtPosition(word)
    let text = editor.document.getText(range)

    if (typeof range === undefined) {
      vscode.window.showWarningMessage("No word selected")
      return
    }

    const t = getInvertedWord(text)

    editor
      .edit((e) => {
        e.replace(range!, t)
      })
      .then(console.log, console.error)

    vscode.commands
      .executeCommand("indecisive.counterIncrement", text)
      .then(console.log, console.error)

    vscode.window.showInformationMessage(text)

    vscode.commands
      .executeCommand("indecisive.counterStats")
      .then(JSON.stringify)
      .then(vscode.window.showInformationMessage)
  })

  context.subscriptions.push(invert, langs, counterAdd, counterStats)
}

// This method is called when your extension is deactivated
export function deactivate() {}

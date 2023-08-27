// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode"
import { activeLanguages, getInvertedWord } from "./invert"

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  // vscode.languages.registerHoverProvider("javascript", hoverProvider)
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

    editor.edit((e) => {
      e.replace(range!, t)
    })

    vscode.window.showInformationMessage(text)
  })

  context.subscriptions.push(invert, langs)
}

// This method is called when your extension is deactivated
export function deactivate() {}

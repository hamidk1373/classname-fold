const vscode = require('vscode')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'classname-fold.foldAllClassNameTag',
      foldAllClassNames
    )
  )
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'classname-fold.unfoldAllClassNameTag',
      unfoldAllClassNames
    )
  )
}

function foldAllClassNames() {
  const document = vscode.window.activeTextEditor.document
  const openingClassNameRegex = /className={/g
  let classNameOpeningLineNumbers = []

  for (let lineNumber = 0; lineNumber < document.lineCount; lineNumber++) {
    let line = document.lineAt(lineNumber)

    if (openingClassNameRegex.test(line.text)) {
      classNameOpeningLineNumbers.push(lineNumber)
    }
  }

  vscode.commands.executeCommand('editor.fold', {
    level: 1,
    direction: 'up',
    selectionLines: classNameOpeningLineNumbers,
  })
}

function unfoldAllClassNames() {
  const document = vscode.window.activeTextEditor.document
  const openingClassNameRegex = /className={/g
  let classNameOpeningLineNumbers = []

  for (let lineNumber = 0; lineNumber < document.lineCount; lineNumber++) {
    let line = document.lineAt(lineNumber)

    if (openingClassNameRegex.test(line.text)) {
      classNameOpeningLineNumbers.push(lineNumber)
    }
  }

  vscode.commands.executeCommand('editor.unfold', {
    level: 1,
    direction: 'up',
    selectionLines: classNameOpeningLineNumbers,
  })
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
}

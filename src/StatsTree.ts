import * as path from "path"
import * as vscode from "vscode"

// export class StatsProvider implements vscode.TreeDataProvider<Stat> {
//   getChildren(element?: Stat | undefined): vscode.ProviderResult<Stat[]> {
//       throw new Error("Method not implemented.")
//   }
//   getParent?(element: Stat): vscode.ProviderResult<Stat> {
//       throw new Error("Method not implemented.")
//   }
//   resolveTreeItem?(item: vscode.TreeItem, element: Stat, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TreeItem> {
//       throw new Error("Method not implemented.")
//   }

//   private _onDidChangeTreeData: vscode.EventEmitter<
//     Stat | undefined | void
//   > = new vscode.EventEmitter<Stat | undefined | void>()
//   readonly onDidChangeTreeData: vscode.Event<Stat | undefined | void> =
//     this._onDidChangeTreeData.event

//   refresh(): void {
//     this._onDidChangeTreeData.fire()
//   }

//   getTreeItem(element: Stat): vscode.TreeItem {
//     return element
//   }

//   }

//   /**
//    * Given the path to package.json, read all its dependencies and devDependencies.
//    */
//   private getDepsInPackageJson(packageJsonPath: string): Stat[] {
//     const workspaceRoot = this.workspaceRoot
//     if (this.pathExists(packageJsonPath) && workspaceRoot) {
//       const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"))

//       const toDep = (moduleName: string, version: string): Stat => {
//         if (
//           this.pathExists(path.join(workspaceRoot, "node_modules", moduleName))
//         ) {
//           return new Stat(
//             moduleName,
//             version,
//             vscode.TreeItemCollapsibleState.Collapsed
//           )
//         } else {
//           return new Stat(
//             moduleName,
//             version,
//             vscode.TreeItemCollapsibleState.None,
//             {
//               command: "extension.openPackageOnNpm",
//               title: "",
//               arguments: [moduleName],
//             }
//           )
//         }
//       }

//       const deps = packageJson.dependencies
//         ? Object.keys(packageJson.dependencies).map((dep) =>
//             toDep(dep, packageJson.dependencies[dep])
//           )
//         : []
//       const devDeps = packageJson.devDependencies
//         ? Object.keys(packageJson.devDependencies).map((dep) =>
//             toDep(dep, packageJson.devDependencies[dep])
//           )
//         : []
//       return deps.concat(devDeps)
//     } else {
//       return []
//     }
//   }

//   private statExists(p: string): boolean {

// }

export class Stat extends vscode.TreeItem {
  constructor(
    public readonly name: string,
    private readonly count: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly command?: vscode.Command
  ) {
    super(name, collapsibleState)

    this.tooltip = `${this.name}-${this.count}`
    this.description = this.count
  }

  iconPath = {
    light: path.join(__filename, "..", "stats.svg"),
    dark: path.join(__filename, "..", "stats.svg"),
  }

  contextValue = "stats"
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlantumlPath = void 0;
const vscode = require("vscode");
class GetPlantumlPath {
    constructor() {
        this.getPlantUmlPath = function () {
            var currentlyOpenTabfilePath = vscode.window.activeTextEditor?.document.uri.fsPath;
            if (currentlyOpenTabfilePath === undefined || !currentlyOpenTabfilePath.endsWith("PlantUMLText.txt")) {
                vscode.window.showInformationMessage('PlantUML file was not found.');
            }
            else {
                return currentlyOpenTabfilePath;
            }
        };
    }
}
exports.GetPlantumlPath = GetPlantumlPath;
//# sourceMappingURL=get-plantuml-path.js.map
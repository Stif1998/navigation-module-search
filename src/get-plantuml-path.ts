import * as vscode from 'vscode';

export class GetPlantumlPath
{
    getPlantUmlPath = function () {
        var currentlyOpenTabfilePath = vscode.window.activeTextEditor?.document.uri.fsPath;
        if (currentlyOpenTabfilePath === undefined || !currentlyOpenTabfilePath.endsWith("PlantUMLText.txt")) {
            vscode.window.showInformationMessage('PlantUML file was not found.');
        } else {
            return currentlyOpenTabfilePath;
        }
    }
}
        

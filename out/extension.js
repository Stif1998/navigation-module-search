"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const get_search_results_1 = require("./get-search-results");
const group_results_1 = require("./group-results");
const get_plantuml_path_1 = require("./get-plantuml-path");
const get_component_names_1 = require("./get-component-names");
const create_modified_plantuml_file_1 = require("./create-modified-plantuml-file");
function activate(context) {
    console.log('Extension "navigation-module-search" is now active!');
    let TERMINAL_ID = 1;
    vscode.commands.registerCommand('navigation-module-search.plantUmlModuleSearch', () => {
        let plantUmlPath = (new get_plantuml_path_1.GetPlantumlPath).getPlantUmlPath();
        if (plantUmlPath != undefined) {
            let componentNames = (new get_component_names_1.GetComponentNames).getComponentNames(plantUmlPath); // TODO extract components from file
            let resultPromise = (new get_search_results_1.GetSearchResults).getSearchResultsFiles(componentNames);
            resultPromise.then((resultArray) => {
                console.log(resultArray);
                let componentResults = (new group_results_1.GroupResults).groupResultModules(componentNames, resultArray);
                console.log(componentResults);
                (new create_modified_plantuml_file_1.CreateModifiedPlantumlFile).createModifiedPlantumlFile(plantUmlPath, componentResults);
                vscode.window.showInformationMessage('');
                const terminal = vscode.window.createTerminal(`Ext Terminal #${TERMINAL_ID++}`);
                terminal.sendText("java -jar lib/plantuml-1.2022.6.jar ModifiedPlantUMLText.txt");
            }, () => {
                vscode.window.showInformationMessage('Failed. Probably no search results were found.');
            });
        }
    });
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
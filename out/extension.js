"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const get_search_results_1 = require("./get-search-results");
const group_results_1 = require("./group-results");
const show_results_1 = require("./show-results");
function activate(context) {
    console.log('Extension "navigation-module-search" is now active!');
    vscode.commands.registerCommand('navigation-module-search.moduleSearch', () => {
        let resultPromise = (new get_search_results_1.GetSearchResults).getSearchResultsFiles();
        resultPromise.then((resultArray) => {
            let groupedModuleData = (new group_results_1.GroupResults).groupResultModules(resultArray);
            (new show_results_1.ShowResults).showResults(groupedModuleData);
        }, () => {
            vscode.window.showInformationMessage('No search results were found.');
        });
    });
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
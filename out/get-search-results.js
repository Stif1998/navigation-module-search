"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSearchResults = void 0;
const vscode = require("vscode");
class GetSearchResults {
    constructor() {
        this.getSearchResultsFiles = async function (componentNames) {
            await vscode.commands.executeCommand('search.action.copyAll');
            let results = await vscode.env.clipboard.readText();
            if (results) {
                results = results.replaceAll(/^\s*\d.*$\s?|^$\s/gm, "");
                let resultsArray = results.split(/[\r\n]{1,2}/);
                let pathArray = resultsArray.filter(result => result !== "");
                return pathArray;
            }
            throw new Error();
        };
    }
}
exports.GetSearchResults = GetSearchResults;
//# sourceMappingURL=get-search-results.js.map
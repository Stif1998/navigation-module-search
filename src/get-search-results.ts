import * as vscode from 'vscode';

export class GetSearchResults
{
    getSearchResultsFiles = async function (componentNames: Array<string>) {

        await vscode.commands.executeCommand('search.action.copyAll');
        let results = await vscode.env.clipboard.readText();

        if (results)  {
            results = results.replaceAll(/^\s*\d.*$\s?|^$\s/gm, "");
            let resultsArray = results.split(/[\r\n]{1,2}/); 

            let pathArray = resultsArray.filter(result => result !== "");
            
            return pathArray;
        }
        throw new Error();
    }
}

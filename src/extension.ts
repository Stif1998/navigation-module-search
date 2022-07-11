import { getVSCodeDownloadUrl } from '@vscode/test-electron/out/util';
import internal = require('stream');
import * as vscode from 'vscode';
import { GetSearchResults } from './get-search-results';
import { GroupResults } from './group-results';
import { ShowResults } from './show-results';

export function activate(context: vscode.ExtensionContext) {
	console.log('Extension "navigation-module-search" is now active!');
	
	vscode.commands.registerCommand('navigation-module-search.moduleSearch', () => {
		let resultPromise = (new GetSearchResults).getSearchResultsFiles();
		resultPromise.then((resultArray: any) => { // success
			let groupedModuleData = (new GroupResults).groupResultModules(resultArray);
			(new ShowResults).showResults(groupedModuleData);
		}, 
		() => { // failure
			vscode.window.showInformationMessage('No search results were found.');
		}
		);
	});
}

export function deactivate() {}

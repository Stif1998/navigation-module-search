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

	let TERMINAL_ID = 1;
	
	vscode.commands.registerCommand('navigation-module-search.plantUmlModuleSearch', () => {
		vscode.window.showInformationMessage('');
		const terminal = vscode.window.createTerminal(`Ext Terminal #${TERMINAL_ID++}`);
		terminal.sendText("java -jar lib/plantuml-1.2022.6.jar PlantUMLText.txt");
	});
}

export function deactivate() {}

import * as vscode from 'vscode';
import { GetSearchResults } from './get-search-results';
import { GroupResults, ComponentResultAmount } from './group-results';
import { GetPlantumlPath } from './get-plantuml-path';
import { GetComponentNames } from './get-component-names';
import { CreateModifiedPlantumlFile } from './create-modified-plantuml-file';

export function activate(context: vscode.ExtensionContext) {
	console.log('Extension "navigation-module-search" is now active!');

	let TERMINAL_ID = 1;
	
	vscode.commands.registerCommand('navigation-module-search.plantUmlModuleSearch', () => {
		
		let plantUmlPath = (new GetPlantumlPath).getPlantUmlPath();
		if (plantUmlPath != undefined)
		{
			let componentNames: Array<string> = (new GetComponentNames).getComponentNames(plantUmlPath);// TODO extract components from file
	
			let resultPromise = (new GetSearchResults).getSearchResultsFiles(componentNames);
			resultPromise.then((resultArray: any) => { // success
				console.log(resultArray);
				
				let componentResults: Array<ComponentResultAmount> = (new GroupResults).groupResultModules(componentNames, resultArray);
				console.log(componentResults);

				(new CreateModifiedPlantumlFile).createModifiedPlantumlFile(plantUmlPath!, componentResults);
				
				vscode.window.showInformationMessage('');
				const terminal = vscode.window.createTerminal(`Ext Terminal #${TERMINAL_ID++}`);
				terminal.sendText("java -jar lib/plantuml-1.2022.6.jar ModifiedPlantUMLText.txt");
			}, 
			() => { // failure
				vscode.window.showInformationMessage('Failed. Probably no search results were found.');
			}
			);	
		}
	});
}

export function deactivate() {}
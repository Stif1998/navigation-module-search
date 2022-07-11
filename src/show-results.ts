import * as vscode from 'vscode';
import { GroupedResult } from './group-results';

export class ShowResults
{
    async showResults(groupedResult: GroupedResult, language?: string) {
        let content: string = `Module search result:
        Module: 'banking-app' result amount: ` + groupedResult['banking-app'] + `
        Module: 'cash-desk-app' result amount: ` + groupedResult['cash-desk-app'] + `
        Module: 'inventory-app' result amount: ` + groupedResult['inventory-app'] + `
        Module: 'payment-app' result amount: ` + groupedResult['payment-app'] + `
        Files outside of specified modules result amount: ` + groupedResult['others'];

        const document = await vscode.workspace.openTextDocument({
            language,
            content,
        });
        vscode.window.showTextDocument(document);
    }        
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowResults = void 0;
const vscode = require("vscode");
class ShowResults {
    async showResults(groupedResult, language) {
        let content = `Module search result:
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
exports.ShowResults = ShowResults;
//# sourceMappingURL=show-results.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupResults = void 0;
class GroupResults {
    constructor() {
        this.groupResultModules = function (components, resultArray) {
            let results = [];
            for (let i in components) {
                let componentResult = {
                    componentName: components[i],
                    resultAmount: 0
                };
                results.push(componentResult);
            }
            resultArray.forEach((path) => {
                for (let i = 0; i < results.length; ++i) {
                    if (path.toLowerCase().includes(results.at(i).componentName.toLowerCase())) {
                        results.at(i).resultAmount = results.at(i).resultAmount + 1;
                    }
                }
            });
            return results;
        };
    }
}
exports.GroupResults = GroupResults;
//# sourceMappingURL=group-results.js.map
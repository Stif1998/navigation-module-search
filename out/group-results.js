"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupResults = void 0;
class GroupResults {
    constructor() {
        this.groupResultModules = function (resultArray) {
            let groupedResults = {
                "banking-app": 0,
                "cash-desk-app": 0,
                "inventory-app": 0,
                "payment-app": 0,
                "others": 0
            };
            resultArray.forEach((path) => {
                let found = false;
                Object.keys(groupedResults).forEach((key) => {
                    if (!found && path.includes(key)) {
                        groupedResults[key] = groupedResults[key] + 1;
                        found = true;
                    }
                });
                if (!found) {
                    groupedResults.others = groupedResults.others + 1;
                }
            });
            return groupedResults;
        };
    }
}
exports.GroupResults = GroupResults;
//# sourceMappingURL=group-results.js.map
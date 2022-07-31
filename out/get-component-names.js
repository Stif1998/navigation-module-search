"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetComponentNames = void 0;
const fs_1 = require("fs");
class GetComponentNames {
    constructor() {
        this.getComponentNames = function (plantumlFilePath) {
            let components = [];
            (0, fs_1.readFile)(plantumlFilePath, function (err, data) {
                if (err)
                    throw err;
                const arr = data.toString().replace(/\r\n/g, '\n').split('\n');
                for (let i of arr) {
                    if (i.startsWith("component")) {
                        let componentName = i.split(" ").at(1);
                        componentName = componentName?.replaceAll('*', '');
                        componentName = componentName?.replaceAll('"', '');
                        if (componentName != undefined) {
                            components.push(componentName);
                        }
                    }
                }
                console.log(components);
                return components;
            });
            return components;
        };
    }
}
exports.GetComponentNames = GetComponentNames;
//# sourceMappingURL=get-component-names.js.map
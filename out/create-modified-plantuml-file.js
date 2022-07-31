"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateModifiedPlantumlFile = void 0;
const fs_1 = require("fs");
class CreateModifiedPlantumlFile {
    constructor() {
        this.createModifiedPlantumlFile = function (plantumlFilePath, componentResults) {
            let basePath = plantumlFilePath.substring(0, plantumlFilePath.length - "PlantUMLText.txt".length);
            console.log("BasePath: " + basePath);
            let modifiedFile = (0, fs_1.createWriteStream)(basePath + "ModifiedPlantUMLText.txt");
            (0, fs_1.readFile)(plantumlFilePath, function (err, data) {
                if (err)
                    throw err;
                const arr = data.toString().replace(/\r\n/g, '\n').split('\n');
                for (let i of arr) {
                    if (!i.startsWith("@enduml")) {
                        modifiedFile.write(i + "\n");
                    }
                }
                for (let i = 0; i < componentResults.length; ++i) {
                    modifiedFile.write("note right of " + componentResults[i].componentName.replaceAll("-", "") + " : " + componentResults[i].resultAmount + "\n");
                }
                modifiedFile.write("@enduml");
                return basePath + "ModifiedPlantUMLText.txt";
            });
            return "";
        };
    }
}
exports.CreateModifiedPlantumlFile = CreateModifiedPlantumlFile;
//# sourceMappingURL=create-modified-plantuml-file.js.map
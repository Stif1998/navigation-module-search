import { createWriteStream, readFile } from 'fs';
import { ComponentResultAmount } from './group-results';

export class CreateModifiedPlantumlFile
{
    createModifiedPlantumlFile = function (plantumlFilePath: string, componentResults: Array<ComponentResultAmount>): string {
        let basePath = plantumlFilePath.substring(0, plantumlFilePath.length - "PlantUMLText.txt".length);
        console.log("BasePath: " + basePath);
        let modifiedFile = createWriteStream(basePath + "ModifiedPlantUMLText.txt");

        readFile(plantumlFilePath, function(err, data){
            if(err) throw err;

            const arr = data.toString().replace(/\r\n/g,'\n').split('\n');

            for(let i of arr) {
                if (!i.startsWith("@enduml")){
                    modifiedFile.write(i + "\n");
                }
            }

            for (let i = 0; i < componentResults.length; ++i){
                modifiedFile.write("note right of " + componentResults[i].componentName.replaceAll("-", "") + " : " + componentResults[i].resultAmount + "\n");
            }
        
            modifiedFile.write("@enduml");

            return basePath + "ModifiedPlantUMLText.txt";
        });  
        return "";
    }
}
import { readFile } from 'fs';

export class GetComponentNames
{
    getComponentNames = function (plantumlFilePath: string): Array<string> {
        let components: Array<string> = [];

        readFile(plantumlFilePath, function(err, data){
            if(err) throw err;

            const arr = data.toString().replace(/\r\n/g,'\n').split('\n');

            for(let i of arr) {
                if (i.startsWith("component")){
                    let componentName = i.split(" ").at(1);
                    componentName = componentName?.replaceAll('*', '');
                    componentName = componentName?.replaceAll('"', '');
                    if (componentName != undefined){
                        components.push(componentName);
                    }
                }
            }
            console.log(components);
            return components
        });
        return components;
    }
}
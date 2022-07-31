export type ComponentResultAmount = {
	componentName: string, 
	resultAmount: number
}

export class GroupResults
{
    groupResultModules = function (components: Array<string>, resultArray: Array<string>): Array<ComponentResultAmount> {
		let results: Array<ComponentResultAmount> = [];
		
		for (let i in components){
			
			let componentResult: ComponentResultAmount = {
				componentName: components[i],
				resultAmount: 0
			}
			results.push(componentResult);
		}

		resultArray.forEach((path: string) => {
			for (let i = 0; i < results.length; ++i){
				if (path.toLowerCase().includes(results.at(i)!.componentName.toLowerCase())){
					results.at(i)!.resultAmount = results.at(i)!.resultAmount + 1;
				}
			}
		});
		return results;
	}
}

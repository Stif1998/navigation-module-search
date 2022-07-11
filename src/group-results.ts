export type GroupedResult = {
	"banking-app": number, 
	"cash-desk-app": number, 
	"inventory-app": number, 
	"payment-app": number, 
	"others": number
};

export class GroupResults
{
    groupResultModules = function (resultArray: Array<string>): GroupedResult {
	let groupedResults: GroupedResult = {
		"banking-app": 0, 
		"cash-desk-app": 0, 
		"inventory-app": 0, 
		"payment-app": 0, 
		"others": 0
	};
	type GroupedResultKey = keyof typeof groupedResults;

	resultArray.forEach((path: string) => {
		let found = false;
		Object.keys(groupedResults).forEach((key: string)  => {
			if (!found && path.includes(key)) {
				groupedResults[key as GroupedResultKey] = groupedResults[key as GroupedResultKey] + 1;
				found = true
			}
		});
		if (!found){
			groupedResults.others = groupedResults.others + 1;
		}
	});

	return groupedResults;
	}
}

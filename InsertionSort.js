import * as utils from "./utils.js"

export async function insertionSort(list) {
	while (utils.getPaused()) {
		await new Promise(r => setTimeout(r, 10));
	}
	async function swapping(index)
	{
		if(index==0) return;
		utils.vis(list, [index]);
		while (utils.getPaused()) {
			await new Promise(r => setTimeout(r, 10));
		}
		await new Promise(r => setTimeout(r, 100));
		if(list[index]<list[index-1])
		{
		    let tmp=list[index];
		    list[index]=list[index-1];
		    list[index-1]=tmp;
			swapping(index-1);
		}
		return;
	}
	for(let i=1;i<list.length;i++) {
		await swapping(i);
	}
	while (!utils.isSorted(list)) {
		await new Promise(r => setTimeout(r, 10));
	}
	await utils.finishAnim(list);
}

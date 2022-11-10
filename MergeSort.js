import * as utils from "./utils.js"

export async function mergeSort(list) {
    let tmp = [];
    let i;
    while (utils.getPaused()) {
        await new Promise(r => setTimeout(r, 10));
    }
    async function Merge(left1, right1, left2, right2)
    {
      let index=left1,left=left1;
    	while(left1<=right1&&left2<=right2)
    	{
    		if(list[left1]<=list[left2]) tmp[index++]=list[left1++];
    		else tmp[index++]=list[left2++];
            utils.vis(list, [left2, left1]);
            while (utils.getPaused()) {
                await new Promise(r => setTimeout(r, 10));
            }
            await new Promise(r => setTimeout(r, 10));
    	}
    	while(left1<=right1) tmp[index++]=list[left1++];
    	while(left2<=right2) tmp[index++]=list[left2++];
    	for(let i=left;i<=right2;i++) list[i]=tmp[i];
    }
    async function MergeSort(left, right)
    {
      if(left>=right) return;
    	let right1=Math.floor((left+right)/2), left2=right1+1;
    	await MergeSort(left, right1);
    	await MergeSort(left2, right);
    	await Merge(left, right1, left2, right);
        utils.vis(list, [left, right]);
        while (utils.getPaused()) {
            await new Promise(r => setTimeout(r, 10));
        }
        await new Promise(r => setTimeout(r, 10));
    }
    await MergeSort(0,list.length-1);
    while (!utils.isSorted(list)) {
        await new Promise(r => setTimeout(r, 10));
    }
    await utils.finishAnim(list);
}

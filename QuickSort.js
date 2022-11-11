import * as utils from "./utils.js"

export async function quickSort(list) {
    async function recurs(l,r) {
       let mid=list[Math.floor((l+r)/2)];
       let i=l,j=r;
       list = list.filter(w => w != undefined)
       utils.vis(list, [l, r]);
       while (utils.getPaused()) {
           await new Promise(r => setTimeout(r, 10));
       }
       await new Promise(r => setTimeout(r, 100));
       do {
         while(list[i]<mid) i++;
         while(list[j]>mid) j--;
         if(i<=j) {
           let tmp=list[i];
           list[i]=list[j];
           list[j]=tmp;
           i++;
           j--;
         }
       } while(i<=j);
       if(l<j) {
         await recurs(l,j);
       }
       if(i<r) {
         await recurs(i,r);
       }
    }
    await recurs(0,list.length-1);
    utils.vis(list, []);
    while (!utils.isSorted(list)) {
        await new Promise(r => setTimeout(r, 10));
    }
    await utils.finishAnim(list);
}

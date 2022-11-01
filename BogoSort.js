import * as utils from "./utils.js"

export async function bogoSort(l) {
    while (!utils.isSorted(l)) {
        for (var i = l.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = l[i];
            l[i] = l[j];
            l[j] = temp;

            utils.vis(l, [i,j]);
            await new Promise(r => setTimeout(r, 10));
            while (utils.getPaused()) {
                await new Promise(r => setTimeout(r, 10));
            }
        }
    }
}

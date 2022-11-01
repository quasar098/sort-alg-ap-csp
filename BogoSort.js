import * as utils from "./utils.js"

export async function bogoSort(l) {
    while (!utils.isSorted(l)) {
        let cycleDelay = 0;
        let maxDelay = 5;
        let hl = [];
        for (var i = l.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = l[i];
            l[i] = l[j];
            l[j] = temp;

            cycleDelay += 1;
            hl.push(i);
            if (cycleDelay >= maxDelay) {
                cycleDelay = 0;
                utils.vis(l, hl);
                await new Promise(r => setTimeout(r, 10));
                while (utils.getPaused()) {
                    await new Promise(r => setTimeout(r, 10));
                }
                hl = [];
            }
        }
    }
}

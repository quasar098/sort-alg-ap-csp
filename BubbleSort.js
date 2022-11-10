import * as utils from "./utils.js"

export async function bubbleSort(l) {
    while (!utils.isSorted(l)) {
        let cycleDelay = 0;
        let maxDelay = 5;
        let hl = [];
        for (var i = l.length - 1; i > 0; i--) {
            for (var w = 0; w < i; w++) {
                while (utils.getPaused()) {
                    await new Promise(r => setTimeout(r, 10));
                }
                if (l[w] > l[w+1]) {
                    let tmp = l[w];
                    l[w] = l[w+1];
                    l[w+1] = tmp;
                }

                utils.vis(l, [w+1])
                await new Promise(r => setTimeout(r, 0));
            }
        }
        utils.vis(l, []);
    }
    while (!utils.isSorted(l)) {
        await new Promise(r => setTimeout(r, 10));
    }
    await utils.finishAnim(l);
}

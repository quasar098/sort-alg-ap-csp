import { bogoSort } from "./BogoSort.js";
import { bubbleSort } from "./BubbleSort.js"
import * as utils from "./utils.js"

const shuffleElm = document.getElementById('shuffle');

let list = Array(100).fill(1).map((n, i) => n + i);
utils.shuffleArray(list);
utils.vis(list, []);

let sortingAlgs = {
    "bogo": bogoSort,
    "bubble": bubbleSort
}

let alg = "bubble";
(sortingAlgs[alg] ?? (() => {}))(list);

shuffleElm.addEventListener("click", () => {
    utils.shuffleArray(list)
    utils.vis(list, []);
})

document.body.addEventListener("keydown", (e) => {
    if (e.code == "Tab") {
        utils.shuffleArray(list)
        utils.vis(list, []);
        e.preventDefault();
    }
    if (e.code == "Escape") {
        window.location.pathname = "/";
    }
});

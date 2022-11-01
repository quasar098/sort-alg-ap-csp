import { bogoSort } from "./BogoSort.js";
import { bubbleSort } from "./BubbleSort.js"
import { quickSort } from "./QuickSort.js"
import * as utils from "./utils.js"

const shuffleElm = document.getElementById('shuffle');
const sortingAlgChooser = document.querySelector(".sorting-alg-type");

let list = utils.nl(100);
utils.vis(list);

let sortingAlgs = {
    "bogo": bogoSort,
    "bubble": bubbleSort,
    "quick": quickSort
}

let alg = localStorage.getItem("sortingAlg") ?? "bubble";
(sortingAlgs[alg] ?? (() => { console.log("404") }))(list);

shuffleElm.addEventListener("click", () => {
    utils.shuffleArray(list)
    utils.vis(list, []);
})

document.body.addEventListener("keydown", (e) => {
    if (e.code == "Tab") {
        window.location.reload();
        e.preventDefault();
    }
    if (e.code == "Escape") {
        window.location.pathname = "/";
    }
});

sortingAlgChooser.value = alg;

sortingAlgChooser.addEventListener("change", (e) => {
    localStorage.setItem("sortingAlg", sortingAlgChooser.value);
    window.location.reload();
})

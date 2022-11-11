import { bogoSort } from "./BogoSort.js";
import { bubbleSort } from "./BubbleSort.js"
import { quickSort } from "./QuickSort.js"
import { mergeSort } from "./MergeSort.js"
import { insertionSort } from "./InsertionSort.js"
import * as utils from "./utils.js"

const shuffleElm = document.getElementById('shuffle');
const sortingAlgChooser = document.querySelector(".sorting-alg-type");
const changeNumElm = document.getElementById('numElms');

let list = utils.nl((localStorage.getItem("amount1") ?? 24)*1);
changeNumElm.addEventListener("input", (e) => {
    list = utils.nl(changeNumElm.value * 1);
    utils.vis(list, []);
})
changeNumElm.addEventListener("mouseup", (e) => {
    localStorage.setItem("amount1", changeNumElm.value)
    window.location.reload();
})
changeNumElm.value = list.length


utils.vis(list);

let sortingAlgs = {
    "bogo": bogoSort,
    "bubble": bubbleSort,
    "quick": quickSort,
    "merge": mergeSort,
    "insertion": insertionSort
}

let alg = localStorage.getItem("sortingAlg") ?? "bubble";
(sortingAlgs[alg] ?? (() => { console.log("404") }))(list);

shuffleElm.addEventListener("click", () => {
    window.location.reload();
})

document.body.addEventListener("keydown", (e) => {
    if (e.code == "Tab") {
        window.location.reload();
        e.preventDefault();
    }
    if (e.code == "Escape") {
        window.location.pathname = "index.html";
    }
});

sortingAlgChooser.value = alg;

sortingAlgChooser.addEventListener("change", (e) => {
    localStorage.setItem("sortingAlg", sortingAlgChooser.value);
    window.location.reload();
})

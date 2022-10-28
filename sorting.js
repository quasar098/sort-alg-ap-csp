const sortingElm = document.getElementById('sorting');
const tooltipElm = document.getElementById('tooltip');

let visualizedBlocks = []
let highlighted = [];
let tooltip = "Press space to sort"

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function setBlocks(list) {
    visualizedBlocks = [];
    list.forEach((item, i) => {
        let elm = document.createElement("div");
        elm.classList.add("block");
        elm.style.width = 100/list.length + "%"
        elm.style.height = 100*(item/Math.max(...list)) + "%"
        elm.addEventListener("mouseenter", () => {
            tooltip = "Number: " + i
            elm.style.backgroundColor = "#55F";
        })
        elm.addEventListener("mouseout", () => {
            tooltip = "Press space to sort"
            elm.style.backgroundColor = "#FFF";
        })
        visualizedBlocks.push(elm);
    });
}

function renderBlocks() {
    removeAllChildNodes(sortingElm);
    visualizedBlocks.forEach((item, i) => {if (highlighted.includes(i)) {item.style.backgroundColor = "#F00"}; sortingElm.appendChild(item)});
}

setInterval(() => {
    tooltipElm.innerText = tooltip;
}, 10)

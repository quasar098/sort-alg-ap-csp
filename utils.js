const pausePlayElm = document.getElementById('pause-play');
const stepElm = document.getElementById('step');
const sortingElm = document.getElementById('sorting');

export function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

export function nl(size) {
    let l = Array(size).fill(1).map((n, i) => n + i);
    shuffleArray(l);
    return l;
}

export function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export function isSorted(list) {
    return !!list.reduce((n, item) => n !== false && item >= n && item)
}

export function getPaused() {
    if (willStep) {
        willStep = false;
        return false;
    }
    return paused;
}

let visualizedBlocks = []
let highlighted = [];
let pauseTooltip = "Amogus sus"
let paused = true;
let willStep = false;

var notesBeingPlayed = 0;

const synth = new Tone.PolySynth().toDestination();
synth.maxPolyphony = 30;
synth.volume.value = -20;

export function playSound(num, highestNum) {
    if (num == undefined) {
        return;
    }
    let octaves = "345"[Math.floor(num/8*24/highestNum)]
    let letter = "ABCDEGFG"[Math.floor((((num*24/highestNum)+2)%8))]
    if (octaves == undefined || letter == undefined) {
        return;
    }
    synth.triggerAttackRelease(letter + octaves, "64n")
}

export function setBlocks(l) {
    visualizedBlocks = [];
    l.forEach((item, i) => {
        let elm = document.createElement("div");
        elm.classList.add("block");
        elm.style.width = 100/l.length + "%"
        elm.style.height = 100*(item/Math.max(...l)) + "%"
        visualizedBlocks.push(elm);
    });
}

export async function finishAnim(list) {
    for (var i = 0; i < visualizedBlocks.length; i++) {
        visualizedBlocks[i].style.backgroundColor = "#00FF00";
        playSound(i, list.length)
        await new Promise(r => setTimeout(r, 70));
    }
    await new Promise(r => setTimeout(r, 100));
    vis(list);
}

document.body.addEventListener("keydown", (e) => {
    if (e.code == "Space") {
        paused = !paused;
    }
    if (e.code == "Enter") {
        willStep = true;
    }
})

export function renderBlocks() {
    removeAllChildNodes(sortingElm);
    visualizedBlocks.forEach((item, i) => {if (highlighted.includes(i)) {item.style.backgroundColor = "#F00"}; sortingElm.appendChild(item)});
}

export function vis(l, hl=[]) {
    highlighted = hl;
    setBlocks(l);
    playSound(l[hl[0]], l.length)
    renderBlocks(l);
}

setInterval(() => {
    pauseTooltip = paused ? "Start Sorting (space)" : "Stop Sorting (space)"
    pausePlayElm.children[0].innerText = pauseTooltip;
}, 10)
pausePlayElm.addEventListener("click", () => {
    paused = !paused;
})
stepElm.addEventListener("click", () => {
    willStep = true;
})

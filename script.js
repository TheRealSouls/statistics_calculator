const input = document.getElementById("numbers");

const calculateBtn = document.getElementById("calculate");
const clear = document.getElementById("clear");

const meanResult = document.getElementById("mean");
const medianResult = document.getElementById("median");
const modeResult = document.getElementById("mode");
const rangeResult = document.getElementById("range");
const stdDevResult = document.getElementById("std-dev");
const varianceResult = document.getElementById("variance");
const minResult = document.getElementById("min");
const maxResult = document.getElementById("max");

const generateSmallSample = () => {
    if (input.value) {
        input.value = "";    
    }
    for (let i = 0; i < 5; i++) {
        const randomNum = Math.floor(Math.random() * 50) + 1;
        input.value += randomNum + (i < 4 ? ", " : "");
    }
}

const generateMediumSample = () => {
    if (input.value) {
        input.value = "";    
    }
    for (let i = 0; i < 15; i++) {
        const randomNum = Math.floor(Math.random() * 50) + 1;
        input.value += randomNum + (i < 14 ? ", " : "");
    }
}

const generateLargeSample = () => {
    if (input.value) {
        input.value = "";    
    }
    for (let i = 0; i < 30; i++) {
        const randomNum = Math.floor(Math.random() * 50) + 1;
        input.value += randomNum + (i < 29 ? ", " : "");
    }
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const inputArr = input.value.split(",").map(Number);

    meanResult.innerText = mean(inputArr);
    medianResult.innerText = median(inputArr);
    modeResult.innerText = mode(inputArr);
    rangeResult.innerText = range(inputArr);
    stdDevResult.innerText = stdDev(inputArr);
    varianceResult.innerText = variance(inputArr);
    minResult.innerText = Math.min(...inputArr);
    maxResult.innerText = Math.max(...inputArr);
    input.value = "";
})

const mean = arr => String((arr.reduce((acc,val) => {
        return acc + val
    }) / arr.length).toFixed(2));

const median = (arr) => {
    const sorted = [...arr].sort((a, b) => a - b);
    if (sorted.length % 2 === 0) {
        return ((sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2).toFixed(2);
    } else {
        return (sorted[Math.floor(sorted.length / 2)]);
    }
}

const mode = (arr) => {
    const freq = {};
    for (let i = 0; i < arr.length; i++ ) {
        const num = arr[i];
        freq[num] = (freq[num] || 0) + 1;
    }

    let mode = -Infinity;
    let modeFreq = 0;

    for (const key in freq) {
        if (freq[key] > modeFreq) {
            mode = key;
            modeFreq = freq[key];
        }
    }

    return mode;
}

const range = arr => {
    const sorted = [...arr].sort((a,b) => a - b);

    return sorted[sorted.length - 1] - sorted[0];
}
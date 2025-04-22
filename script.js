const input = document.getElementById("numbers");

const calculateBtn = document.getElementById("calculate");
const clear = document.getElementById("clear");

const meanResult = document.getElementById("mean");
const medianResult = document.getElementById("median");
const modeResult = document.getElementById("mode");
const rangeResult = document.getElementById("range");
const interquartileResult = document.getElementById("interquartile");
const varianceResult = document.getElementById("variance");
const stdDevResult = document.getElementById("stddev");
const minResult = document.getElementById("min");
const maxResult = document.getElementById("max");

const errorMsg = document.querySelector(".error-message");

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

    const regex = /^[0-9]+(?:[,\s][0-9]+)*$/;
    // Implement shake animation

    if (!regex.test(input.value)) {
        errorMsg.style.display = 'block';
    }

    const inputArr = input.value.split(",").map(Number);

    meanResult.innerText = mean(inputArr);
    medianResult.innerText = median(inputArr);
    modeResult.innerText = mode(inputArr);
    rangeResult.innerText = range(inputArr);
    interquartileResult.innerText = interquartile(inputArr);
    varianceResult.innerText = variance(inputArr);
    stdDevResult.innerText = stdDev(inputArr);
    minResult.innerText = Math.min(...inputArr);
    maxResult.innerText = Math.max(...inputArr);
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

const interquartile = arr => {
    const sorted = [...arr].sort((a,b) => a - b);

    const firstQuartile = sorted[Math.floor(sorted.length / 4)];
    const thirdQuartile = sorted[Math.floor(3 * sorted.length / 4)];

    return thirdQuartile - firstQuartile;
}

const variance = arr => {
    const meanOfArr = mean(arr);
    let squaredAverage = 0;

    for (let i = 0; i < arr.length; i++) {
        squaredAverage += (arr[i] - meanOfArr) ** 2;
    }

    return (squaredAverage /= arr.length).toFixed(2);
}


const stdDev = arr => {
    return Math.sqrt(variance(arr)).toFixed(2);
};




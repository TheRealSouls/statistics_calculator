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


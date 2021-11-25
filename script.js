import createElementWithText from "./js.modules/dom.utils.js";
import {inputForm, encodeFunction,translate} from "./js.modules/encode.js";
import { decodeFunction, reversedTranslate } from "./js.modules/decode.js";
const inputForm2 = document.getElementById("translateBtn2");
const clearBtn = document.getElementById("clear");

inputForm.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.getElementById("input").value;
    let output = document.getElementById("output");

    createElementWithText("p", encodeFunction(input), output);
});

inputForm2.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.getElementById("input").value;
    let output = document.getElementById("output");

    createElementWithText("p", decodeFunction(input), output);
});

clearBtn.addEventListener("click",()=>{
    document.getElementById("output").innerText="";
})


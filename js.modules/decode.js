import { translate } from "./encode.js";

const reversedTranslate = Object.entries(translate).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;

},{} 
)
const decodeFunction = (input) => {
    
    let decodeInput = input.split(" ").map(a => reversedTranslate[a]).join("")
    return decodeInput
    
}

export{reversedTranslate, decodeFunction}
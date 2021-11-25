const inputForm = document.getElementById("translateBtn");
const translate = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: '...-',
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    0: '-----',
};
const encodeFunction = (input) => {
    return input
        .toUpperCase()
        .split("")
        .map((c) => {
        console.log(input.toUpperCase().split(""))

            if (translate[c]) {
                return translate[c];
            }
            return c;
        })
        .join(" ");
};

export {inputForm, encodeFunction,translate};
const inputForm = document.getElementById("translateBtn");
const clearBtn = document.getElementById("clear");

inputForm.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.getElementById("input").value;
    let output = document.getElementById("output");

    createElementWithText("p", convertFunction(input), output);
});

// clearBtn.addEventListener("click", (event)=>{
//     output.textNode.remove();
// })

const createElementWithText = (elementType, text, parent) => {
    const newElem = document.createElement(elementType);
    console.log(newElem);
    const textNode = document.createTextNode(text);
    console.log(textNode);
    newElem.appendChild(textNode);
    parent.appendChild(newElem);
    clearBtn.onclick = removeli;

    function removeli() {
        parent.removeChild(newElem);
    }
};

const translate = {
    A: ".- ",
    B: "-... ",
    C: "-.-. ",
    D: "-.. ",
    E: ". ",
    F: "..-. ",
    G: "--. ",
    H: ".... ",
    I: ".. ",
    J: ".--- ",
    K: "-.- ",
    L: ".-.. ",
    M: "-- ",
    N: "-. ",
    O: "--- ",
    P: ".--. ",
    Q: "--.- ",
    R: ".-. ",
    S: "... ",
    T: "- ",
    U: "..- ",
    W: ".-- ",
    X: "-..- ",
    Y: "-.-- ",
    Z: "--.. ",
};
const convertFunction = (input) => {
    return input
        .toUpperCase()
        .split("")
        .map((c) => {
            if (translate[c]) {
                return translate[c];
            }
            return c;
        })
        .join("");
};

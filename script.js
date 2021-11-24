const translate = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
 }


// const reversedTranslate = () =>{
//     let input = document.getElementById("input").value;
//     input = input.toUpperCase();

//     let newArray = input.split("").map(char=> {
//         if(translate[char]){
//             return translate[char]
//         }
//         return char
//     })
    
//     let output = newArray.join(" ");
//     document.getElementById("output").value = output
//     Object.entries(translate).reduce((acc, [key, value]) => {
//     acc[value] = key;
//     return acc;

// },[] //initial value of acc
// )
// }
// console.log(reversedTranslate)
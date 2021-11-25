const createElementWithText = (elementType, text, parent,className="output") => {
    const newElem = document.createElement(elementType);
    console.log(newElem);
    const textNode = document.createTextNode(text);
    console.log(textNode);
    newElem.appendChild(textNode);
    parent.appendChild(newElem);
};

export default createElementWithText
const allKeys = {
    0: ['N/A', 'modifier'],
    1 : ['+-', 'modifier'],
    2 : ['%', 'modifier'],
    3 : ['AC', 'reset'],
    4 : [7, 'number'],
    5 : [8, 'number'],
    6 : [9, 'number'],
    7 : ['div', 'operator'],
    8 : [4, 'num'],
    9 : [5, 'num'],
    10 : [6, 'num'],
    11 : ['x', 'operator'],
    12 : [1, 'num'],
    13 : [2, 'num'],
    14 : [3, 'num'],
    15 : ['-', 'operator'],
    16 : [0, 'num'],
    17 : ['.', 'modifier'],
    18 : ['=', 'execute'],
    19 : ['+', 'operator']
};

const calcContainor = document.querySelector('.keyboard');
const createButton = document.querySelector('#createCalc');

createButton.addEventListener('click', () => {
    console.log("creating");
    createCalculator(calcContainor, 5, 4);
});




function createCalculator(parentDiv, numberRows, numberCols) {
    for (let indexRow = 0; indexRow < numberRows; indexRow++) {
        
        const newRow = document.createElement("div");
        newRow.classList.add("eachRow");
        
        for (let indexCol = 0; indexCol < numberCols; indexCol++) {
            
            const newSquare = document.createElement("div");
            newSquare.classList.add("eachSquare");

            const keyText = document.createElement('span');
            keyText.textContent = allKeys[Object.keys(allKeys)[indexCol + (indexRow * 4)]][0];
            keyText.classList.add('keyText');
            newSquare.appendChild(keyText);
            newRow.appendChild(newSquare);
            
        }
        parentDiv.appendChild(newRow);
    }
}
const keys = {
    0: 'num',
    '.' : 'modifier',
    '=' : 'execute',
    '+' : 'operator',
    1 : 'num',
    2 : 'num',
    3 : 'num',
    '-' : 'operator',
    4 : 'num',
    5 : 'num',
    6 : 'num',
    '*' : 'operator',
    7 : 'num',
    8 : 'num',
    9 : 'num',
    '/' : 'operator',
    '+-' : 'modifier',
    '%' : 'modifier',
    'AC' : 'reset'
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
            newRow.appendChild(newSquare);

        }
        parentDiv.appendChild(newRow);
    }
}
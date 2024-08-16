const allKeys = {
    0: ['N/A', 'currentOp'],
    1 : ['+-', 'modifier'],
    2 : ['%', 'modifier'],
    3 : ['AC', 'reset'],
    4 : [7, 'num'],
    5 : [8, 'num'],
    6 : [9, 'num'],
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

let executionList = [];
let operatorFinal = null;

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
            
            if (indexRow == 0 && indexCol == 0) {
                newSquare.classList.add('currentOp');
            }

            if (allKeys[Object.keys(allKeys)[indexCol + (indexRow * 4)]][1] == 'num') {
                newSquare.classList.add('normalKey');
            } else if (allKeys[Object.keys(allKeys)[indexCol + (indexRow * 4)]][1] == 'execute') {
                newSquare.classList.add('exeKey');
            } else if (indexRow != 0 || indexCol != 0) {
                newSquare.classList.add('lightKey');
            }

            
            newSquare.textContent = allKeys[Object.keys(allKeys)[indexCol + (indexRow * 4)]][0];
            
            
            

            newSquare.addEventListener("click", (event) => {
                const btn = event.target;
                const statusButton =  document.querySelector('.currentOp');
                const displayBar = document.querySelector('.display');
                // Reset Check
                if (btn.textContent == 'AC') {
                    resetCalculator(statusButton, displayBar, false);
                } else {
                    handleInput(btn, statusButton, displayBar);
                }
                console.log(btn.textContent);
                // AFter [pressogn = go back to red N/A]
            });

            newRow.appendChild(newSquare);
            
        }
        parentDiv.appendChild(newRow);
    }
}



function resetCalculator(statusButton, displayBar, softResetCheck) {
    
    if (softResetCheck) {
        displayBar.textContent = '0';
    } else {
        displayBar.textContent = '0';
        statusButton.textContent = 'N/A';
        // Reset History
        // Reset Execution List
    }
}

function handleInput(btn, statusButton, displayBar) {
    console.log(btn);
    if (btn.textContent == '.') {
        displayBar.textContent += (displayBar.textContent.indexOf('.') > -1) ? '' : '.';
        return 200
    } else if (btn.classList.contains('normalKey')) {
        console.log("Number Detected");
        handleNumInput(btn, statusButton, displayBar);
    } else if (btn.classList.contains('lightKey')) {
        handleOpInput(btn, statusButton, displayBar);
    } else {
        executionList.push(displayBar.textContent);
        executeTheList(statusButton, displayBar, true);
    }
}


function handleNumInput(btn, statusButton, displayBar) {
    
    if (displayBar.textContent == '0') {
        displayBar.textContent = btn.textContent;
    } else {
        displayBar.textContent += btn.textContent;
    }
    
}

function executeTheList(statusButton, displayBar, isNext = false) {
    if (operatorFinal == null || executionList.length < 2) {
        alert('ERROR !!');
        return 200
    }
    num1 = parseFloat(executionList[0]);
    num2 = parseFloat(executionList[1]);
    let answer = null;
    switch (operatorFinal) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case 'x':
            answer = num1 * num2;
            break;
        case 'div':
            answer = num1 / num2;
            break;
        case '%':
            answer = num1 % num2;
            break;
        default:
            answer = 99;
            break;
    }
    displayBar.textContent = answer;
    
    resetCalculator(statusButton, displayBar, false);
    executionList = [];
    if (isNext == false) {
        operatorFinal = null;
    }
    displayBar.textContent = answer;
    //executionList.push(answer);
    return answer

    //Reset the list
    //Set the first element in the list to the answer
    //return the asnwer for if it needs printing
    //Append to history Listr below with = answer
    // REset that list with AC
}

// Button checks for operator and appends else keeps replacing until next key orsomething

function handleOpInput(btn, statusButton, displayBar) {
    operatorFinal = btn.textContent;
    console.log(executionList);
    statusButton.textContent = btn.textContent;
    if (executionList.length == 0) {
        executionList.push(displayBar.textContent);
        resetCalculator(statusButton, displayBar, true);
    } else {
        executionList.push(displayBar.textContent);
        executeTheList(statusButton, displayBar, true);
    }
}
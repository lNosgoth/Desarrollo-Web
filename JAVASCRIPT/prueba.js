
const computersChoiceDisplay = document.getElementById("computer-choice");
const usersChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computersChoice;
let gameResult;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
    userChoice = e.target.innerHTML;
    usersChoiceDisplay.innerHTML = userChoice;
    generateComputersChoice();
    getResult();
}));

export function generateComputersChoice(){
    const randomNumber = Math.floor(Math.random()*possibleChoices.length)+1;
    //console.log(randomNumber);
    if (randomNumber === 1) {
        computersChoice = 'Piedra';
    }
    if(randomNumber===2){
        computersChoice = 'Tijera';
    }

    if(randomNumber===3){
        computersChoice = 'Papel';
    }

    computersChoiceDisplay.innerHTML = computersChoice;
}

export function getResult(){
    if(computersChoice === userChoice){
        gameResult = '¡Es un empate!'
    }
    if(computersChoice === 'Piedra' && userChoice === 'Papel'){
        gameResult = '¡Ganaste!'
    }

    if(computersChoice === 'Piedra' && userChoice === 'Tijera'){
        gameResult = '¡Perdiste!'
    }

    if(computersChoice === 'Papel' && userChoice === 'Piedra'){
        gameResult = '¡Perdiste!'
    }

    if(computersChoice === 'Papel' && userChoice === 'Tijera'){
        gameResult = '¡Ganaste!'
    }

    if(computersChoice === 'Tijera' && userChoice === 'Piedra'){
        gameResult = '¡Ganaste!'
    }

    if(computersChoice === 'Tijera' && userChoice === 'Papel'){
        gameResult = '¡Perdiste!'
    }

    resultDisplay.innerHTML = gameResult;
}



let computerScore = 0;
let playerScore = 0;

    for (let i = 0; i < 5; i++ ) {
        const list = ["piedra", "papel", "tijera"];

    function computerPlay (list ) {
        return [...list]
        .sort(()=> Math.random() > 0.5 ? 1 : -1)
        .slice(0, 1);
    }
    var playerSelection = prompt ("Cual es tu elección: Piedra, Papel o Tijera ? : ") 
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay(list);


       
    function playRound(playerSelection, computerSelection) {

        switch (playerSelection) {
            case"piedra":
                    if ( computerSelection == "piedra") {
                        return (`${computerSelection} y ${playerSelection} son iguales, hubo empate`);
                       
                    }
                    else if ( computerSelection == "papel") {
                        computerScore++;
                        return (`El ${computerSelection} cubre el ${playerSelection} Gana la computadora`);
                    }
                    else  {
                        playerScore++; 
                        return (`La ${playerSelection} rompe a la ${computerSelection} ¡Ganaste!`);
                        
                    }
                break;
                
                case"papel":
                    if ( computerSelection == "papel") {
                        return (`${computerSelection} y ${playerSelection} son iguales, hubo empate`);
                        
                    }
                    else if ( computerSelection == "tijera") {
                        computerScore++;
                        return (`La ${computerSelection} corta el ${playerSelection} Gana la computadora`);
                        
                    }
                    else  {
                        playerScore++;
                        return (`El ${playerSelection} cubrea la ${computerSelection} ¡Ganaste!`);
                        
                    }
                break;
        
                case"tijera":
                    if ( computerSelection == "tijera") {
                        return (`${computerSelection} y ${playerSelection} son iguales, hubo empate`);
                       
                    }
                    else if ( computerSelection == "piedra") {
                        computerScore++;
                        return (`La ${computerSelection} rompe la ${playerSelection} Gana la computadora`);
                       
                    }
                    else  {
                        playerScore++;
                        return (`La ${playerSelection} corta el ${computerSelection} ¡Ganaste!`);
                        
                    }
                break;
        }
            
        
    };

      

    console.log(playRound(playerSelection,computerSelection));
    } 


   
function game (){
    if(playerScore == computerScore && computerScore == playerScore){
        console.log("Empate");
    } else if (playerScore > computerScore){
        console.log("Has ganado!");
    }else {
        console.log("Has perdido!")
    }
}
game ()
console.log("Welcome to the Snake And Ladder Game..!!");

let playerPosition = 0;
const WINNING_POS = 100;
let diceCount = 0;
let player = "Player 1";
let playerOnePosition = 0;
let playerTwoPosition = 0;

class SnakeAndLadder {

    rollDice = () => {
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        console.log("Dice Rolled: " + diceRoll);
        diceCount++;
        return diceRoll;
    }

    option = () => {
        let flag = 1;
        while (playerPosition < WINNING_POS) {

            let optionDiceRoll = Math.floor(Math.random() * 3);
            switch (optionDiceRoll) {
                case 0:
                    console.log("No Play..!! " + player + " at Position: " + playerPosition);
                    break;
                case 1:
                    let latestDiceRoll = this.rollDice();
                    playerPosition += latestDiceRoll;
                    if (playerPosition > 100) {
                        playerPosition -= latestDiceRoll;
                    }
                    console.log("Ladder..!! " + player + " at Position: " + playerPosition);
                    break;
                case 2:
                    playerPosition -= this.rollDice();
                    if (playerPosition < 0) {
                        playerPosition = 0;
                    }
                    console.log("Snake..!! " + player + " at Position: " + playerPosition);
                    break;
            }
            console.log("**************************************");
            flag++;
            if (playerPosition == 100) {
                break;
            }
            if (flag % 2 == 0) {
                player = "Player 2";
                playerOnePosition = playerPosition;
                playerPosition = playerTwoPosition;
            }
            else {
                player = "Player 1";
                playerTwoPosition = playerPosition;
                playerPosition = playerOnePosition;
            }
        }
        console.log("Number of times dice rolled = " + diceCount + "\n-------------------------------------");
        console.log("\t  " + player + " Wins...!! \n-------------------------------------");
    }
}

module.exports = new SnakeAndLadder();
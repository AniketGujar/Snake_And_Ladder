console.log("Welcome to the Snake And Ladder Game..!!");

let playerPosition = 0;
const WINNING_POS = 100;
let diceCount = 0;

class SnakeAndLadder {

    rollDice = () => {
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        console.log("Dice Rolled: " + diceRoll);
        diceCount++;
        return diceRoll;
    }

    option = () => {
        while (playerPosition < WINNING_POS) {

            let optionDiceRoll = Math.floor(Math.random() * 3);
            switch (optionDiceRoll) {
                case 0:
                    console.log("No Play..!! Player at Position: " + playerPosition);
                    break;
                case 1:
                    let latestDiceRoll = this.rollDice();
                    playerPosition += latestDiceRoll;
                    if (playerPosition > 100) {
                        playerPosition -= latestDiceRoll;
                    }
                    console.log("Ladder..!! Player at Position: " + playerPosition);
                    break;
                case 2:
                    playerPosition -= this.rollDice();
                    if (playerPosition < 0) {
                        playerPosition = 0;
                    }
                    console.log("Snake..!! Player at Position: " + playerPosition);
                    break;
            }
            console.log("**************************************");
        }
        console.log("Player Wins...!! \nNumber of times dice rolled = " + diceCount);
    }
}

module.exports = new SnakeAndLadder();
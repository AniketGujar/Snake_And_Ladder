console.log("Welcome to the Snake And Ladder Game..!!");

class SnakeAndLadder {
    Position = () => {
        let playerPosition = 0;
        return playerPosition;
    }
    rollDice = () => {
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        console.log("Dice Rolled: " + diceRoll);
    }
}

module.exports = new SnakeAndLadder();
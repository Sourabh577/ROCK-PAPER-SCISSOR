let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreResult = document.querySelector("#user-score");
const compScoreResult = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}
const drawGame = () => {
    console.log("draw game");
    msg.innerText = "Game was draw, play again.";
}
const showWin = (userWin, userChoice,compChoice) => {
    if (userWin) {
        console.log("you win");
        msg.innerText = `You win 😊 ! Your  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScoreResult.innerText= userScore;

    } else {
        console.log("you lose");
        msg.innerText = `You lose 😂 ${compChoice} beats Your ${userChoice} `;
        msg.style.backgroundColor = "red";
        compScore++;
        compScoreResult.innerText= compScore;

    }
}

const playGame = (userChoice) => {
    console.log("userChoice: " + userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("compChoice: " + compChoice);
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        //scissors ,paper;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWin(userWin,userChoice,compChoice);

    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
})
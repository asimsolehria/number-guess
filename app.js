// const number = Math.floor(Math.random() * 10);

// console.log(number);


const input = document.getElementById("guess-input");
const guess = document.getElementById("guess-value");
const message = document.querySelector(".message");

let wiNum = 2;
let triesLeft = 3;

guess.addEventListener('click', playGame);


function playGame(e) {
    if (isNaN(input.value) || input.value < 1 || input.value > 10) {

        setMessage("Input a number between 1 and 10", "red");
    }
    else if (input.value == wiNum) {
        setMessage("That was a correct guess!", "green");
        input.disabled = true;
    }
    else {
        setMessage(`That was a wrong guess ${triesLeft} tries left`, "orange")
        triesLeft -= 1;
        if (triesLeft == 0) {
            setMessage(`You mother fucker you lost all tries &#128512;`, "red")
        }
    }


    e.preventDefault();
}



function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}
console.log("Javascript file successfully connected!");


function counter() {
    num += 1
    button.textContent = `button was clicked ${num} times!`;
    if (num % 10 == 0){
        let buttonWidth = buttonStyle.width;
        let buttonHeight = buttonStyle.height;
        console.log("button has been pressed 10 times");
        button.style.width = `${parseInt(buttonWidth.slice(0, parseInt(buttonWidth.indexOf("p"), 10)), 10) + 10}px`
        button.style.height = `${parseInt(buttonHeight.slice(0, -2), 10) + 10}px`
    }

}
function animateBall() {
    ySpd += yAcc;
    xPos += xSpd;
    yPos += ySpd;
    ball.style.translate = `${xPos}px ${yPos}px`;
    if (!stop){
    requestAnimationFrame(animateBall);
    }
}
function stopBall() {
    stop = true;
}

let num = 0;
const button = document.getElementById("myButton");
const buttonStyle = window.getComputedStyle(button);
button.addEventListener("click", counter);

let stop = false;
const stopper = document.getElementById("stopper");
stopper.addEventListener("click", stopBall)

const ball = document.getElementById("ball");
const ballStyle = window.getComputedStyle(ball);

let xPos = 0;
let yPos = 0;
let xSpd = 0;
let ySpd = 0;
let xAcc = 0;
let yAcc = 0.02;

requestAnimationFrame(animateBall);

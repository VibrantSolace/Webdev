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

    if (clicking) {
        xSpd += (mouseX - 35 - xPos) * 0.002;
        ySpd += (mouseY - 35 - yPos) * 0.002;
    }
    if (yPos + 70 > window.innerHeight) {
        ySpd *= -1;
        yPos = window.innerHeight - 71;
    }
    if (xPos < 0) {
        xSpd *= -1;
        xPos = 1;
    }
    else if (xPos + 70 > window.innerWidth) {
        xSpd *= -1;
        xPos = window.innerWidth - 71;
    }
    ySpd += yAcc;
    ySpd *= 0.99;
    xSpd *= 0.995;    
    xPos += xSpd;
    yPos += ySpd;

    ball.style.translate = `${xPos}px ${yPos}px`;
    if (animate){
    requestAnimationFrame(animateBall);
    }
}
function stopBall() {
    animate = !animate;
    if (animate) {
        animateBall();
    }
}
function down() {
    pMouseX = mouseX;
    pMouseY = mouseY;
    clicking = true;
}
function release() {
    clicking = false;
}

const display = document.getElementById("display");
let mouseX = 0;
let mouseY = 0;
display.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

let num = 0;
const button = document.getElementById("myButton");
const buttonStyle = window.getComputedStyle(button);
button.addEventListener("click", counter);

let animate = true;
const stopper = document.getElementById("stopper");
stopper.addEventListener("click", stopBall)

const ball = document.getElementById("ball");
const ballStyle = window.getComputedStyle(ball);
let clicking = false;
ball.addEventListener("mousedown", down);
display.addEventListener("mouseup", release);

let xPos = 0;
let yPos = 0;
let xSpd = 0;
let ySpd = 0;
let yAcc = 0.25;

requestAnimationFrame(animateBall);


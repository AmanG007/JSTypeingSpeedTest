const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];

// Add leading zero to numbers 9 or below (purely for aesthetics):
    function addZero(time) {
        if ( time <= 9) {
            time = "0" + time;
        }
        return time;
    }

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTimer = addZero(timer[0]) + ":" + addZero(timer[1]) + ":" + addZero(timer[2]);
    theTimer.innerHTML = currentTimer;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] *6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let textOriginMatch = originText.substring(0, textEntered.length);

    if ( textEntered == originText) {
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered == textOriginMatch) {
            testWrapper.style.borderColor = "#65CCF3";
        } else {
            testWrapper.style.borderColor = "#E95D0F";
        }
    }
}

// Start the timer:
function start() {
    let textLengthCount = testArea.value.length;
    if (textLengthCount === 0) {
        setInterval(runTimer, 10);
    }
    console.log(textLengthCount);
    console.log(runTimer);
}

// Reset everything:
function reset() {
    console.log("Reset Button Is Pressed");
}


// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
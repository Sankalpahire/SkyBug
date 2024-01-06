document.addEventListener("DOMContentLoaded", function () {
    const clickMusic = document.getElementById("clickMusic");

    let string = "";
    let display = document.querySelector(".display");
    let buttons = document.querySelectorAll(".cal-btn");

    function handleButtonClick(e) {
        playSound(clickMusic);

        if (e.target.innerHTML === "=") {
            evaluateExpression();
        } else if (e.target.innerHTML === "AC") {
            clearDisplay();
        } else {
            appendToDisplay(e.target.innerHTML);
        }
    }

    function handleKeyPress(e) {
        const key = e.key;

        if (key === "Enter") {
            evaluateExpression();
        } else if (key === "Escape") {
            clearDisplay();
        } else if (key === "Delete" || key === "Backspace") {
            removeLastCharacter();
        } else if (key.match(/[0-9+\-*/.%]/)) {
            appendToDisplay(key);
        }
    }

    function evaluateExpression() {
        try {
            string = eval(string);
            console.log(string);
            if (isNaN(string) || !isFinite(string)) {
                throw new Error("Invalid Expression");
            }
            display.textContent = string;
        } catch (error) {
            display.textContent = "Error";
            console.error("Custom Error evaluating expression:", error.message);
        }
    }

    function clearDisplay() {
        string = "";
        display.textContent = "0";
    }

    function appendToDisplay(value) {
        string += value;
        display.textContent = string;
    }


    buttons.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
    });

    function removeLastCharacter() {
        if (isNaN(string) || !isFinite(string)) {
            string = "";
            display.textContent = "0";
        } else {
            string = string.slice(0, -1);
            display.textContent = string || "0";
        }
    }

    document.addEventListener("keydown", handleKeyPress);

    function playSound(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
});

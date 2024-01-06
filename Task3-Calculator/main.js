document.addEventListener("DOMContentLoaded", function () {
    const clickMusic = document.getElementById("clickMusic");

    let string = "";
    let buttons = document.querySelectorAll(".cal-btn");

    function handleButtonClick(e) {
        playSound(clickMusic);

        if (e.target.innerHTML === "=") {
            string = eval(string);
            document.querySelector(".display").textContent = string;
        } else if (e.target.innerHTML === "AC") {
            string = "";
            document.querySelector(".display").textContent = string;
        } else {
            string = string + e.target.innerHTML;
            document.querySelector(".display").textContent = string;
        }
    }

    // Add click event listener to all buttons
    buttons.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
    });

    function playSound(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
});

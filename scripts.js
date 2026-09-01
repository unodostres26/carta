const mainLetter = document.getElementById("mainLetter");
const instruction = document.getElementById("instruction");

mainLetter.addEventListener("click", function () {
    mainLetter.classList.add("open");

    if (instruction) {
        instruction.style.display = "none";
    }
});

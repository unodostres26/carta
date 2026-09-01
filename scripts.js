const mainLetter = document.getElementById("mainLetter");
const instruction = document.getElementById("instruction");
const flyingLetters = document.querySelector(".flying-letters");

const totalLetters = 80;

for (let i = 0; i < totalLetters; i++) {

    const letter = document.createElement("div");

    letter.classList.add("flying-letter");
    letter.innerHTML = "✉";

    // Posición inicial aleatoria
    letter.style.left = (Math.random() * 120 - 10) + "vw";
    letter.style.top = (Math.random() * 120 - 10) + "vh";

    // Tamaños diferentes
    const size = 0.35 + Math.random() * 1.1;

    // Velocidad diferente
    const duration = 3.5 + Math.random() * 4;

    // Aparición progresiva
    const delay = Math.random() * 4;

    // Rotación diferente
    const rotation = Math.random() * 80 - 40;

    letter.style.setProperty("--size", size);
    letter.style.setProperty("--rotation", rotation + "deg");

    letter.style.animationDuration = duration + "s";
    letter.style.animationDelay = delay + "s";

    flyingLetters.appendChild(letter);
}


// ABRIR CARTA

mainLetter.addEventListener("click", function () {

    mainLetter.classList.add("open");

    if (instruction) {
        instruction.style.display = "none";
    }

});

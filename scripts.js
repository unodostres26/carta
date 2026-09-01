const mainLetter = document.getElementById("mainLetter");
const instruction = document.getElementById("instruction");
const flyingLetters = document.querySelector(".flying-letters");


// ======================================
// CREAR MUCHAS CARTAS
// ======================================

for (let i = 0; i < 28; i++) {

    const letter = document.createElement("div");

    letter.classList.add("flying-letter");

    letter.innerHTML = "✉";

    // Posición inicial aleatoria
    letter.style.left = Math.random() * 100 + "vw";
    letter.style.top = Math.random() * 100 + "vh";

    // Tamaño aleatorio
    const size = 0.45 + Math.random() * 0.8;
    letter.style.transform = `scale(${size})`;

    // Rotación inicial
    letter.style.setProperty(
        "--rotation",
        (Math.random() * 60 - 30) + "deg"
    );

    // Duración diferente
    const duration = 4 + Math.random() * 4;

    // Retraso diferente
    const delay = Math.random() * 3;

    letter.style.animationDuration = duration + "s";
    letter.style.animationDelay = delay + "s";

    flyingLetters.appendChild(letter);
}


// ======================================
// ABRIR CARTA
// ======================================

mainLetter.addEventListener("click", function () {

    mainLetter.classList.add("open");

    if (instruction) {
        instruction.style.display = "none";
    }

});

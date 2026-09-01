const mainLetter = document.getElementById("mainLetter");
const instruction = document.getElementById("instruction");
const flyingLetters = document.querySelector(".flying-letters");

const totalLetters = 100;

for (let i = 0; i < totalLetters; i++) {

    const letter = document.createElement("div");

    letter.className = "flying-letter";
    letter.textContent = "✉";

    // Dirección desde la que entra
    const direction = Math.floor(Math.random() * 4);

    let startX;
    let startY;
    let endX;
    let endY;

    if (direction === 0) {
        // IZQUIERDA → CENTRO → DERECHA
        startX = -20;
        startY = 20 + Math.random() * 60;
        endX = 120;
        endY = startY + (Math.random() * 30 - 15);

    } else if (direction === 1) {
        // DERECHA → CENTRO → IZQUIERDA
        startX = 120;
        startY = 20 + Math.random() * 60;
        endX = -20;
        endY = startY + (Math.random() * 30 - 15);

    } else if (direction === 2) {
        // ARRIBA → CENTRO → ABAJO
        startX = 20 + Math.random() * 60;
        startY = -20;
        endX = startX + (Math.random() * 30 - 15);
        endY = 120;

    } else {
        // ABAJO → CENTRO → ARRIBA
        startX = 20 + Math.random() * 60;
        startY = 120;
        endX = startX + (Math.random() * 30 - 15);
        endY = -20;
    }

    letter.style.left = startX + "vw";
    letter.style.top = startY + "vh";

    // Guardar destino
    letter.style.setProperty("--end-x", endX + "vw");
    letter.style.setProperty("--end-y", endY + "vh");

    // Tamaños variados
    const size = 0.4 + Math.random() * 0.9;
    letter.style.setProperty("--size", size);

    // Velocidad
    const duration = 3.5 + Math.random() * 2.5;
    letter.style.animationDuration = duration + "s";

    // Aparición escalonada
    const delay = Math.random() * 4;
    letter.style.animationDelay = delay + "s";

    // Rotación
    const rotation = Math.random() * 80 - 40;
    letter.style.setProperty("--rotation", rotation + "deg");

    flyingLetters.appendChild(letter);
}


// ==========================================
// ABRIR CARTA
// ==========================================

mainLetter.addEventListener("click", function () {

    mainLetter.classList.add("open");

    if (instruction) {
        instruction.style.display = "none";
    }

});

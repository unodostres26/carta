const mainLetter = document.getElementById("mainLetter");
const instruction = document.getElementById("instruction");
const flyingLetters = document.querySelector(".flying-letters");

const totalLetters = 120;


// ==========================================
// CREAR CARTAS DESDE DIFERENTES DIRECCIONES
// ==========================================

for (let i = 0; i < totalLetters; i++) {

    const letter = document.createElement("div");

    letter.className = "flying-letter";
    letter.textContent = "✉";

    // Elegir aleatoriamente desde dónde entra
    const direction = Math.floor(Math.random() * 4);

    let startX;
    let startY;

    if (direction === 0) {
        // IZQUIERDA
        startX = -20;
        startY = Math.random() * 100;

    } else if (direction === 1) {
        // DERECHA
        startX = 120;
        startY = Math.random() * 100;

    } else if (direction === 2) {
        // ARRIBA
        startX = Math.random() * 100;
        startY = -20;

    } else {
        // ABAJO
        startX = Math.random() * 100;
        startY = 120;
    }

    letter.style.left = startX + "vw";
    letter.style.top = startY + "vh";


    // Tamaño aleatorio
    const size = 0.35 + Math.random() * 1.1;

    letter.style.setProperty("--size", size);


    // Velocidad aleatoria
    const duration = 3.5 + Math.random() * 4;

    letter.style.animationDuration =
        duration + "s";


    // Aparición escalonada
    const delay = Math.random() * 5;

    letter.style.animationDelay =
        delay + "s";


    // Rotación inicial aleatoria
    const rotation =
        Math.random() * 80 - 40;

    letter.style.setProperty(
        "--rotation",
        rotation + "deg"
    );


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

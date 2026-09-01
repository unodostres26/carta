const mainLetter = document.getElementById("mainLetter");
const instruction = document.getElementById("instruction");
const flyingLetters = document.querySelector(".flying-letters");

const totalLetters = 120;

for (let i = 0; i < totalLetters; i++) {

    const letter = document.createElement("div");

    letter.className = "flying-letter";
    letter.textContent = "✉";

    // ==========================================
    // ELEGIR DIRECCIÓN
    // ==========================================

    const direction = Math.floor(Math.random() * 4);

    let startX;
    let startY;
    let endX;
    let endY;

    if (direction === 0) {

        // IZQUIERDA → CENTRO → DERECHA
        startX = -25;
        startY = Math.random() * 100;

        endX = 125;
        endY = startY + (Math.random() * 30 - 15);

    } else if (direction === 1) {

        // DERECHA → CENTRO → IZQUIERDA
        startX = 125;
        startY = Math.random() * 100;

        endX = -25;
        endY = startY + (Math.random() * 30 - 15);

    } else if (direction === 2) {

        // ARRIBA → CENTRO → ABAJO
        startX = Math.random() * 100;
        startY = -25;

        endX = startX + (Math.random() * 30 - 15);
        endY = 125;

    } else {

        // ABAJO → CENTRO → ARRIBA
        startX = Math.random() * 100;
        startY = 125;

        endX = startX + (Math.random() * 30 - 15);
        endY = -25;
    }


    // ==========================================
    // POSICIÓN INICIAL
    // ==========================================

    letter.style.left = startX + "vw";
    letter.style.top = startY + "vh";


    // ==========================================
    // GUARDAR INICIO Y FINAL
    // ==========================================

    letter.style.setProperty(
        "--start-x",
        startX + "vw"
    );

    letter.style.setProperty(
        "--start-y",
        startY + "vh"
    );

    letter.style.setProperty(
        "--end-x",
        endX + "vw"
    );

    letter.style.setProperty(
        "--end-y",
        endY + "vh"
    );


    // ==========================================
    // TAMAÑO
    // ==========================================

    const size = 0.35 + Math.random() * 1.1;

    letter.style.setProperty(
        "--size",
        size
    );


    // ==========================================
    // VELOCIDAD
    // ==========================================

    const duration = 3.5 + Math.random() * 3;

    letter.style.animationDuration =
        duration + "s";


    // ==========================================
    // APARICIÓN
    // ==========================================

    const delay = Math.random() * 4;

    letter.style.animationDelay =
        delay + "s";


    // ==========================================
    // ROTACIÓN
    // ==========================================

    const rotation =
        Math.random() * 80 - 40;

    letter.style.setProperty(
        "--rotation",
        rotation + "deg"
    );


    flyingLetters.appendChild(letter);
}


// ==========================================
// ABRIR CARTA PRINCIPAL
// ==========================================

mainLetter.addEventListener("click", function () {

    mainLetter.classList.add("open");

    if (instruction) {
        instruction.style.display = "none";
    }

});

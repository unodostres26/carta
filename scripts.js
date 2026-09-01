const inicio = document.getElementById("inicio");
const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");

const comenzar = document.getElementById("comenzar");
const abrirSobre = document.getElementById("abrir-sobre");
const cerrarCarta = document.getElementById("cerrar-carta");

const cartasVolando = document.getElementById("cartas-volando");


// Crear cartas volando
function crearCarta() {

    const carta = document.createElement("div");

    carta.classList.add("carta-volando");

    carta.style.left = Math.random() * 100 + "%";
    carta.style.top = Math.random() * 100 + "%";

    carta.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    carta.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    cartasVolando.appendChild(carta);

    setTimeout(() => {
        carta.remove();
    }, 9000);
}


// Crear muchas cartas
function iniciarCartas() {

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {
            crearCarta();
        }, i * 180);

    }
}


// Botón inicial
comenzar.addEventListener("click", () => {

    inicio.classList.add("oculto");

    sobre.classList.remove("oculto");

});


// Abrir sobre
abrirSobre.addEventListener("click", () => {

    sobre.classList.add("oculto");

    carta.classList.remove("oculto");

});


// Cerrar carta
cerrarCarta.addEventListener("click", () => {

    carta.classList.add("oculto");

    sobre.classList.remove("oculto");

});


// Iniciar animación
iniciarCartas();

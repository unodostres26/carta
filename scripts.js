const mainLetter = document.getElementById("mainLetter");

alert("JavaScript funciona");

mainLetter.addEventListener("click", function() {
    alert("¡Hiciste clic!");
    mainLetter.classList.add("open");
});

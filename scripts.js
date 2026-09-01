
const mainLetter = document.getElementById("mainLetter");
const instruction = document.getElementById("instruction");

let opened = false;

mainLetter.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    mainLetter.classList.add("open");

    instruction.style.opacity = "0";

});
```

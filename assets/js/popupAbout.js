// Selecionar elementos
const trigger = document.getElementById("trigger");
const popup = document.getElementById("popup");
const close = document.getElementById("close");

// Abrir o pop-up ao clicar no trigger
trigger.addEventListener("click", () => {
    popup.style.display = "flex"; // Exibe o pop-up
});

// Fechar o pop-up ao clicar no botão de fechar
close.addEventListener("click", () => {
    popup.style.display = "none"; // Esconde o pop-up
});

// Fechar o pop-up ao clicar fora do conteúdo
popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        popup.style.display = "none";
    }
});

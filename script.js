const formulario = document.getElementById("formulario");
const camposNotas = [
    document.getElementById("nota1"),
    document.getElementById("nota2"),
    document.getElementById("nota3"),
    document.getElementById("nota4")
];
const campoMedia = document.getElementById("media");

function calcularMedia() {
    const notas = camposNotas.map(campo => Number(campo.value));

    if (camposNotas.some(campo => campo.value === "")) {
        campoMedia.textContent = "Média: --";
        return null;
    }

    const media = notas.reduce((total, nota) => total + nota, 0) / notas.length;
    campoMedia.textContent = "Média: " + media.toFixed(2);

    return media;
}

camposNotas.forEach(campo => {
    campo.addEventListener("input", calcularMedia);
});

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    if (camposNotas.some(campo => campo.value === "")) {
        alert("Preencha todas as notas antes de registrar o resultado.");
        return;
    }

    const notas = camposNotas.map(campo => Number(campo.value));
    const media = notas.reduce((total, nota) => total + nota, 0) / notas.length;

    localStorage.setItem("nome", nome);
    localStorage.setItem("notas", JSON.stringify(notas));
    localStorage.setItem("media", media);

    window.location.href = "resultado.html";
});

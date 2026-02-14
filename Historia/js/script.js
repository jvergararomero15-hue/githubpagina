document.addEventListener("DOMContentLoaded", function () {

const btnInicio = document.getElementById("btnInicio");
const btnCarta = document.getElementById("btnCarta");
const btnFinal = document.getElementById("btnFinal");

const inicio = document.getElementById("inicio");
const historia = document.getElementById("historia");
const carta = document.getElementById("carta");
const final = document.getElementById("final");

const musica = document.getElementById("musica");
const textoCarta = document.getElementById("textoCarta");

let cartaYaEscrita = false;

/* ========================= */
/* TRANSICIONES */
/* ========================= */

function cambiarPantalla(actual, siguiente) {
    actual.classList.add("oculto");
    siguiente.classList.remove("oculto");
}

/* ========================= */
/* BOTONES */
/* ========================= */

btnInicio.addEventListener("click", () => {
    cambiarPantalla(inicio, historia);
    musica.volume = 0.4;
    musica.play();
});

btnCarta.addEventListener("click", () => {
    cambiarPantalla(historia, carta);

    if (!cartaYaEscrita) {
        escribirCarta();
        cartaYaEscrita = true;
    }
});

btnFinal.addEventListener("click", () => {
    cambiarPantalla(carta, final);
    iniciarSlider();
});

/* ========================= */
/* CARTA */
/* ========================= */

function escribirCarta() {
    const mensaje = `Nicoll...

No quiero solo momentos bonitos.
Quiero una vida contigo.
Quiero sueños, metas y un futuro donde siempre estés tú.

También quiero ser sincero...
Sé que he cometido errores.
Sé que no siempre he hecho las cosas perfectas.
Pero quiero que sepas que estoy aprendiendo.

Y estoy trabajando cada día para ser mejor,
no solo por mí… sino por nosotros.

Te elijo hoy.
Te elijo mañana.
Y te elegiría en cualquier universo posible 💖`;

    let i = 0;
    textoCarta.textContent = "";

    const intervalo = setInterval(() => {
        textoCarta.textContent += mensaje[i];
        i++;
        if (i >= mensaje.length) clearInterval(intervalo);
    }, 40);
}

/* ========================= */
/* CORAZONES */
/* ========================= */

function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "❤️";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (Math.random() * 20 + 15) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

setInterval(crearCorazon, 600);

/* ========================= */
/* CONTADOR */
/* ========================= */

function actualizarContador() {
    const fechaInicio = new Date("2025-11-02");
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const contador = document.getElementById("contador");
    if (contador) {
        contador.textContent =
            `✨ ${dias} días construyendo nuestro para siempre desde el 2 de noviembre de 2025 💖`;
    }
}

actualizarContador();
setInterval(actualizarContador, 1000);

/* ========================= */
/* SLIDER CINEMÁTICO */
/* ========================= */

const fotos = [
    "assets/img/img1.jpg",
    "assets/img/img2.jpg",
    "assets/img/img3.jpg",
    "assets/img/img4.jpg",
    "assets/img/img5.jpg",
    "assets/img/img6.jpg",
    "assets/img/img7.jpg",
    "assets/img/img8.jpg",
    "assets/img/img9.jpg"
];

const textos = [
    "Capítulo 1: Donde todo comenzó ✨",
    "Capítulo 2: Nuestros momentos favoritos 💕",
    "Capítulo 3: Risas, abrazos y recuerdos 🥰",
    "Capítulo 4: Amor en cada detalle 💖",
    "Capítulo 5: Creciendo juntos 🌹",
    "Capítulo 6: Aprendiendo y mejorando 💫",
    "Capítulo 7: Siempre eligiéndonos 💞",
    "Capítulo 8: Construyendo sueños 💍",
    "Capítulo Final: Nuestro para siempre 🌌"
];

let indiceFoto = 0;

const fotoSlider = document.getElementById("fotoSlider");
const overlayText = document.getElementById("overlayText");
const fraseFinal = document.getElementById("fraseFinal");

function iniciarSlider() {
    if (!fotoSlider) return;

    indiceFoto = 0;

    overlayText.textContent = textos[0];
    overlayText.style.opacity = 1;
    fotoSlider.classList.add("activa");

    const intervalo = setInterval(() => {

        fotoSlider.style.opacity = 0;
        overlayText.style.opacity = 0;

        setTimeout(() => {
            indiceFoto++;

            if (indiceFoto >= fotos.length) {
                clearInterval(intervalo);
                fotoSlider.style.display = "none";
                overlayText.style.display = "none";
                fraseFinal.classList.remove("oculto");
                return;
            }

            fotoSlider.src = fotos[indiceFoto];
            overlayText.textContent = textos[indiceFoto];

            fotoSlider.style.opacity = 1;
            overlayText.style.opacity = 1;

            fotoSlider.classList.add("activa");

            setTimeout(() => {
                fotoSlider.classList.remove("activa");
            }, 2500);

        }, 800);

    }, 3000);
}

/* ========================= */
/* MODAL IMAGEN GALERÍA */
/* ========================= */

const modal = document.getElementById("modalImagen");
const imagenGrande = document.getElementById("imagenGrande");
const cerrarModal = document.getElementById("cerrarModal");

document.querySelectorAll(".card img").forEach(img => {
    img.addEventListener("click", () => {
        imagenGrande.src = img.src;
        modal.classList.remove("oculto");
    });
});

cerrarModal.addEventListener("click", () => {
    modal.classList.add("oculto");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("oculto");
    }
});

});

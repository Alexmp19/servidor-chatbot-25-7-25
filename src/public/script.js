const saludo = document.getElementById("saludo");
const comoTeLlamas = document.getElementById("comoTeLlamas");
const fraseDeAmor = document.getElementById("fraseDeAmor");
const teAmo = document.getElementById("teAmo");
const comoEstas = document.getElementById("comoEstas");
const meAmas = document.getElementById("meAmas");
const creador = document.getElementById("creador");
const sobreNicol = document.getElementById("sobreNicol");
const teOdio = document.getElementById("teOdio");
const despedida = document.getElementById("despedida");
const predeterminada = document.getElementById("predeterminada");

// Intervalo para la animación de escritura
let intervalo = null;

// Animación de escritura de la respuesta
function escribirLetraPorLetra(texto = "Actualmente esta opcion no se encuentra en funcionamiento...", velocidad = 40) {
    const elemento = document.getElementById("respuesta");
    elemento.innerHTML = "";
    
    if (elemento.classList.contains("typing") && intervalo !== null) {
        clearInterval(intervalo);
    }

    let i = 0;
    intervalo = setInterval(() => {
        if (i === 0) {
            elemento.classList.add("typing");
        }

        elemento.innerHTML += texto.charAt(i);
        i++;

        if (i >= texto.length) {
        clearInterval(intervalo);
        }
    }, velocidad);
}

// Envia una consulta al servidor en general
const obtenerRespuesta = async (endPoint, metodo, prompt) => {
    try {
        const consulta = await fetch(endPoint, {
            method: metodo,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({message: prompt}),
        });
        
        const respuesta = await consulta.json();
        return respuesta.reply;
    } catch (error) {
        console.error("Error al conectar con el servidor:", error);
    }
}

// Envia una consulta al endpoint "/no-ia" en el servidor local
const obtenerRespuestaNoIaLocal = async prompt => await obtenerRespuesta("http://localhost:3000/no-ia", "POST", prompt);

saludo.addEventListener("click", async () => {
    escribirLetraPorLetra(await obtenerRespuestaNoIaLocal("hola"), 30);
});

comoEstas.addEventListener("click", async () => {
    escribirLetraPorLetra(await obtenerRespuestaNoIaLocal("¿cómo estás?"), 30);
});

teAmo.addEventListener("click", async () => {
    escribirLetraPorLetra(await obtenerRespuestaNoIaLocal("te amo"), 30);
});

fraseDeAmor.addEventListener("click", async () => {
    escribirLetraPorLetra(await obtenerRespuestaNoIaLocal("frase de amor"), 30);
});
    
comoTeLlamas.addEventListener("click", async () => {
    escribirLetraPorLetra(await obtenerRespuestaNoIaLocal("¿cómo te llamas?"), 30);
});

meAmas.addEventListener("click", async () => {
    escribirLetraPorLetra(await obtenerRespuestaNoIaLocal("¿me amas?"), 30);
});

creador.addEventListener("click", async () => {
    escribirLetraPorLetra(await obtenerRespuestaNoIaLocal("info sobre el creador"), 30);
});

sobreNicol.addEventListener("click", async () => {
    escribirLetraPorLetra(await obtenerRespuestaNoIaLocal("info sobre nicol"), 30);
});

teOdio.addEventListener("click", async () => {
    escribirLetraPorLetra(await obtenerRespuestaNoIaLocal("te odio"), 30);
});

despedida.addEventListener("click", async () => {
    escribirLetraPorLetra(await obtenerRespuestaNoIaLocal("chau"), 30);
});

predeterminada.addEventListener("click", async () => {
    escribirLetraPorLetra(await obtenerRespuestaNoIaLocal("kevin"), 30);
});
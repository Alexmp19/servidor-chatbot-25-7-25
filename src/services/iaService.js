const frases = require('../json/frases.json');

exports.getNoIAResponse = async (prompt) => {
  try {
    // Aquí puedes reemplazar con lógica real de IA en el futuro
    let respuestas = [];
    const pregunta = (prompt).toLowerCase();
    const incluye = frase => pregunta.includes(frase);
    
    // Logica sin IA
    // Respuestas predefinidas
    
    // Respuestas para saludo
    if (incluye("hola") || incluye("buenas") || incluye("buen día") || 
    incluye("buenas tardes") || incluye("buenas noches") || incluye("hey") || 
    incluye("hi") || incluye("hello") || incluye("saludo")) {
      respuestas.push(frases["saludo"][Math.floor(Math.random() * frases["saludo"].length)]);
    }
    
    // Respuestas para "¿cómo estás?"
    if ((incluye("como estas") || incluye("cómo estás") || incluye("cómo te va") || incluye("cómo te encuentras") ||
    incluye("cómo andas") || incluye("cómo te sientes") || incluye("cómo va todo") || incluye("cómo va"))) {
      respuestas.push(frases["como estas"][Math.floor(Math.random() * frases["como estas"].length)]);
    }
    
    // Respuestas para "¿cómo te llamas?"
    if (incluye("como te llamas") || incluye("cómo te llamas") || incluye("cómo te llamás") || 
    incluye("cómo te llamo") || incluye("cual es tu nombre") || incluye("cuál es tu nombre")) {
      respuestas.push(frases["como te llamas"][Math.floor(Math.random() * frases["como te llamas"].length)]);
    }
    
    // Respuestas para frase de amor
    if (incluye("frase de amor") || incluye("frase") || incluye("frase romántica") || incluye("frase bonita") ||
    incluye("frase linda") || incluye("frase de cariño") || incluye("frase de amor romántica")) {
      console.log(frases["frase de amor"]);
      respuestas.push(frases["frase de amor"][Math.floor(Math.random() * frases["frase de amor"].length)]);
    }
    
    // Respuestas para "te amo"
    if (incluye("te amo") || incluye("te quiero") || incluye("te adoro") || incluye("te aprecio") ||
    incluye("te estimo") || incluye("te adoro con todo mi corazón") || incluye("te amo mucho") ||
    incluye("te amo con locura") || incluye("te amo con todo mi ser") || incluye("te amo con todo mi corazón") ||
    incluye("guapeton") || incluye("precioso") || incluye("hermoso") || incluye("lindo") || incluye("amor de mi vida") || 
    incluye("divino") || incluye("mi amor") || incluye("mi cielo") || incluye("mi rey") || incluye("principe") ||
    incluye("mi príncipe") || incluye("precioso") || incluye("mi tesoro") || incluye("mi sol") ||
    incluye("mi luna") || incluye("mi estrella") || incluye("mi vida") || incluye("mi todo") ||
    incluye("mi razón de ser") || incluye("mi alegría") || incluye("mi felicidad") || incluye("mi amor eterno") ||
    incluye("churrito") || incluye("churro")) {
      respuestas.push(frases["te amo"][Math.floor(Math.random() * frases["te amo"].length)]);
    }

    // Respuestas para "¿me amas?"
    if (incluye("me amas")) {
      respuestas.push(frases["me amas"][Math.floor(Math.random() * frases["me amas"].length)]);
    }

    // Respuestas para info sobre el creador
    if (incluye("info sobre el creador") || incluye("quien es el creador")) {
      respuestas.push(frases["creador"][Math.floor(Math.random() * frases["creador"].length)]);
    }

    // Respuestas para info sobre Nicol
    if (incluye("info sobre nicol") || incluye("quien es nicol")) {
      respuestas.push(frases["sobre nicol"][Math.floor(Math.random() * frases["sobre nicol"].length)]);
    }

    // Respuestas para "te odio"
    if (incluye("te odio")) {
      respuestas.push(frases["te odio"][Math.floor(Math.random() * frases["te odio"].length)]);
    }

    // Respuestas para despedida
    if (incluye("chau") || incluye("bye") || incluye("hasta luego")) {
      respuestas.push(frases["despedida"][Math.floor(Math.random() * frases["despedida"].length)]);
    }

    // Si no se encontró una respuesta, devuelve un mensaje genérico
    if (!respuestas || respuestas.length === 0) {
      respuestas.push(frases["frase de amor"][Math.floor(Math.random() * frases["frase de amor"].length)]);
    }
    const respuesta = respuestas.join(" ");
    return respuesta;
  } catch (error) {
    console.error("Error al intentar obtener respuesta no IA: ", error);
  }
};

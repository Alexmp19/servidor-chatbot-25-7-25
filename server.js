const express = require('express');
const cors = require('cors');
const path = require("path");
const bodyParser = require('body-parser');
const rutas = require("./src/routes/router.js")

const app = express();
const PORT = 3000;

// Middlewares Globales
app.use(cors());
app.use(bodyParser.json());
// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, './src/public')));

// Rutas
app.use("/", rutas);

// Inicio del servidor
const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = server;
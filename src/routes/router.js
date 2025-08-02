const express = require('express');
const router = express.Router();
const path = require('path');

// Ruta principal: envía el HTML estático
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.use("/no-ia", require("./iaRoutes.js"));

module.exports = router;
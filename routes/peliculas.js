var express = require('express');
var router = express.Router();
var peliculasController = require("../controllers/peliculasController");

/* /peliculas. */
router.get("/crear", peliculasController.crear);
router.post("/crear", peliculasController.guardar);
router.get("/", peliculasController.mostrar);
router.get("/:id", peliculasController.peli);

module.exports = router;

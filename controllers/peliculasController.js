const fs = require('fs');
const path = require('path');
let db = require("../database/models")
let sequelize = db.sequelize;


let peliculasController = {
    crear: function (req, res, next) {
        sequelize.query("SELECT * FROM genres")              
            .then(function(resultados) {
                let generos = resultados[0];
                res.render("crear", {generos:generos});
            })
        
    },
    mostrar: function (req, res, next) {
        sequelize.query("SELECT * FROM movies")
            .then(function(resultados) {
                
                let peliculas = resultados [0];

                res.render("listadoPeliculas", {peliculas:peliculas});
            });
    },
    guardar: function (req, res, next) {
        db.Pelicula.create ({
            title: req.body.titulo,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.generos
        });
        res.redirect("/peliculas/");
            
    },
    peli: function (req, res, next) {
       sequelize.query("SELECT * FROM movies")
       let todas = todas.filter(todas.id===req.params.id)
       
        .then(function(resultados) {
                
            let pelicula = resultados [0];

            res.render("pelicula", {pelicula:pelicula});
        })
    }
        /*db.Pelicula.findByPk(req.params.id, {
            include: [{association: "genero"}, {association: "actores"}]

        })
            .then(function (pelicula) {
                res.render("detallePeli", {pelicula:pelicula});
            })
    }*/
}

module.exports = peliculasController;
# CRUD
entrega de tp crud

no pude hacer funcionar:
let db = require("../database/models")
let sequelize = db.sequelize;

con 
db.Pelicula.findByPk
db.Pelicula.findAll

lo tuve que hacer así:
sequelize.query("SELECT * FROM genres")              
            .then(function(resultados) {
                let generos = resultados[0];
                res.render("crear", {generos:generos})
                
me trabé con eso y no pude avanzar más. 



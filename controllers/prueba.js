let db = require("../database/models")
let sequelize = db.sequelize;

console.log(db.Genero.findAll());
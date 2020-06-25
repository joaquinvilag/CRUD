module.exports = function(sequelize, dataTypes) {
    let alias = "Genero";
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            
        },
        name: {
            type: dataTypes.STRING,
            notNull: true
        },
        ranking: {
            type: dataTypes.INTEGER,
            notNull: true,
            unique: true,
        },
        active: {
            type: dataTypes.STRING,
            notNull: true
        },
        created_at: {
            type: dataTypes.DATE,
            defaultValue: null,
        },
        updated_at: {
            type: dataTypes.DATE,
            defaultValue: null,
        }        
    }
    let config = {
        tableName: "genres",
        timestamps: false

    }

    let Genero = sequelize.define(alias, cols, config);

    Genero.associate = function(models) {
        Genero.hasMany(models.Pelicula, {
            as: "peliculas",
            foreignKey: "genre_id"
        }); 
    };

    return Genero;

};
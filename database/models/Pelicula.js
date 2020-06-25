module.exports = function(sequelize, dataTypes) {
    let alias = "Pelicula";
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        title: {
            type: dataTypes.TEXT,
            notNull: true
        },
        rating: {
            type: dataTypes.DOUBLE,
            
            notNull: true           
        },
        awards: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        release_date: {
            type: dataTypes.DATE,
            notNull: true
        },
        length: {
            type: dataTypes.INTEGER,
            defaultValue: null,
        },
        genre_id: {
            type: dataTypes.INTEGER,
            
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
        tableName: "movies",
        timestamps: false

    }

    let Pelicula = sequelize.define(alias, cols, config);

    Pelicula.associate = function(models) {
        Pelicula.hasMany(models.Genero, {
            as: "genero",
            foreignKey: "genre_id"
        }); 
        Pelicula.hasMany(models.Actor, {
            as: "actores",
            trough: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps:false
        });
        
    }


    return Pelicula;

};
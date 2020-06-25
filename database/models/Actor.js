module.exports = function(sequelize, dataTypes) {
    let alias = "Actor";
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            
        },
        first_name: {
            type: dataTypes.STRING,
            
        },
        last_name: {
            type: dataTypes.STRING,
            notNull: true
        },
        rating: {
            type: dataTypes.INTEGER,
            notNull: true,
            
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER,
            defaultValue: null,
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
        tableName: "actors",
        timestamps: false

    }

    let Actor = sequelize.define(alias, cols, config);

    Actor.associate = function(models) {
        Actor.belongsToMany(models.Pelicula, {
            as: "peliculas",
            through: "actor_movie",
            foreignKey: "genre_id",
            otherKey: "movie_id",
            timestamps:false
        });
    }
    return Actor;
};
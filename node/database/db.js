import {Sequelize} from 'sequelize';

const db = new Sequelize('blogs', 'root', '123456789',{
    host:'localhost',
    dialect: 'mysql', 
    logging:false,
    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000,
    },
}) 

export default db

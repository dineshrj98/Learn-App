import {Sequelize} from "sequelize";

const db = new Sequelize('my_db','root','sqldb',{
    host: "localhost",
    dialect: "mysql"
});

export default db;
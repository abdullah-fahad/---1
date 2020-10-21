import sequelize from 'sequelize';
import Sequelize from 'sequelize';
const db = new Sequelize(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host:"localhost",
        dialect:"postgres",
        operatorAliases: false
    }
);

const Source = db.import('./source');

db.authenticate().
then(() => {
    console.log("connected to database");
}).catch(err => {
    console.log("unable to connect to database", err);
})
export  {db};
export default Source;
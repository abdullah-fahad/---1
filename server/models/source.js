const sequelize = require("sequelize");

const source = (sequelize, DataTypes) => {
    const Source = sequelize.define('source', {
        arabic_code: {
            type: DataTypes.STRING,
            unique: true
        },
        javaScript_code:{
            type: DataTypes.STRING,
            unique: true
        }
    })
    return Source;
}
export default source;
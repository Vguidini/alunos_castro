const { DataTypes } = require("sequelize");

const sequelize = require("../config/sequelize");

const alunos = sequelize.define("alunos", {
    RA: DataTypes.STRING,
    nome: DataTypes.STRING,
    nascimento: DataTypes.DATE,
    curso: DataTypes.STRING,

});

module.exports = alunos;
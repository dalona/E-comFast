"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../models"); //importar models
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: 'bhkb9w4c1xbdtibyzj8g-mysql.services.clever-cloud.com',
    username: 'urux8rc5vxvmxfly',
    password: 'dCQNesYGv8aeaG5enHcv',
    database: 'bhkb9w4c1xbdtibyzj8g',
    models: [models_1.User, models_1.Product], // Añade todos tus modelos aquí
});
exports.default = sequelize;

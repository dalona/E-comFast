import { Sequelize } from 'sequelize-typescript';
import { User, Product, Orders, Role } from '../models';//importar models

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'bhkb9w4c1xbdtibyzj8g-mysql.services.clever-cloud.com',
    username: 'urux8rc5vxvmxfly',
    password: 'dCQNesYGv8aeaG5enHcv',
    database: 'bhkb9w4c1xbdtibyzj8g',
    models: [User, Product, Orders,Role], // Añade todos tus modelos aquí
});

export default sequelize;

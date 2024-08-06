"use strict";
//En el Repo es donde especificamos todo lo que va occurrir en la base de datos, Es donde sucede el CRUD y uutilizamos los metodos de Sequelize
//Aqui se hacen las consultas a la base de datos ya no con MySql sino con ORM
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const tsyringe_1 = require("tsyringe"); //Aqui configuramos el decorador Injectable  para la inyección de dependencias
const models_1 = require("../models"); //Importamos el modelo en el Repo
let OrderRepository = class OrderRepository {
    //Especificamos que la clase es un Repo que puede ser inyectado en otras clases
    async getOrders() {
        return await models_1.Orders.findAll({ attributes: ["id", "total"] });
    }
    async createOrder(Order) {
        return await models_1.Orders.create(Order);
    }
    async updateOrder(id, Order) {
        const existingOrder = await models_1.Orders.findByPk(id);
        if (!existingOrder) {
            throw new Error("Order not found");
        }
        return await existingOrder.update(Order);
    }
    async delete(id) {
        const deleteOrder = await models_1.Orders.findByPk(id);
        if (!deleteOrder) {
            throw new Error("Order not found");
        }
        return await deleteOrder.destroy();
    }
    async getById(id) {
        return await models_1.Orders.findByPk(id, { attributes: ["id", "total"] });
    }
};
exports.OrderRepository = OrderRepository;
exports.OrderRepository = OrderRepository = __decorate([
    (0, tsyringe_1.injectable)()
], OrderRepository);

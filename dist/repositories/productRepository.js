"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const models_1 = require("../models");
let ProductRepository = class ProductRepository {
    async findAll() {
        return await models_1.Product.findAll();
    }
    async findById(id) {
        return await models_1.Product.findByPk(id);
    }
    async findByUserId(userId) {
        return await models_1.Product.findAll({ where: { userId } });
    }
    async create(product) {
        return await models_1.Product.create(product);
    }
    async update(id, product) {
        const productUpdated = await models_1.Product.findByPk(id);
        if (!productUpdated) {
            throw new Error('Product not found');
        }
        return await productUpdated.update(product);
    }
    async delete(id) {
        const productDeleted = await models_1.Product.findByPk(id);
        if (!productDeleted) {
            throw new Error('Product not found');
        }
        return await productDeleted.destroy();
    }
};
ProductRepository = __decorate([
    (0, tsyringe_1.injectable)()
], ProductRepository);
exports.default = ProductRepository;
/**
 * CreationAttributes< --- > es un tipo que representa los atributos que se pueden pasar a la función create de un modelo de Sequelize.
 * Haga de cuenta un interface
 */

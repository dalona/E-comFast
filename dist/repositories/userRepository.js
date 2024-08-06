"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const user_1 = require("../models/user");
const models_1 = require("../models");
let UserRepository = class UserRepository {
    async findAll() {
        return await user_1.User.findAll({ attributes: ['id', 'name', 'email'] });
    }
    async findById(id) {
        return await user_1.User.findByPk(id, { attributes: ['id', 'name', 'email'] });
    }
    async create(user) {
        return await user_1.User.create(user);
    }
    async findByEmail(email) {
        return await user_1.User.findOne({ where: { email } });
    }
    async update(id, user) {
        const existingUser = await user_1.User.findByPk(id);
        if (!existingUser) {
            throw new Error("User not found");
        }
        return await existingUser.update(user);
    }
    async delete(id) {
        const deleteUser = await user_1.User.findByPk(id);
        if (!deleteUser) {
            throw new Error("User not found");
        }
        return await deleteUser.destroy();
    }
    async findUserWithProducts(id) {
        return await user_1.User.findByPk(id, { attributes: ["id", "name", "email"],
            include: [
                {
                    model: models_1.Product,
                    attributes: ['id', 'name', 'price'],
                }
            ] });
    }
};
UserRepository = __decorate([
    (0, tsyringe_1.injectable)()
], UserRepository);
exports.default = UserRepository;

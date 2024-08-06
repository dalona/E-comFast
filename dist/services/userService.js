"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
const tsyringe_1 = require("tsyringe");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAllUsers() {
        return await this.userRepository.findAll();
    }
    async getUserById(id) {
        return await this.userRepository.findById(id);
    }
    async getUserByEmail(email) {
        return await this.userRepository.findByEmail(email);
    }
    async createUser(user) {
        return await this.userRepository.create(user);
    }
    async checkUserCredentials(email, password) {
        const user = await this.getUserByEmail(email);
        if (user && user.password === password) {
            return user;
        }
        throw new Error("Invalid credentials");
    }
    async updateUser(id, user) {
        try {
            return await this.userRepository.update(id, user);
        }
        catch (error) {
            throw new Error("Error updating User");
        }
    }
    async deleteUser(id) {
        try {
            return await this.userRepository.delete(id);
        }
        catch (error) {
            throw new Error("Error deleting User");
        }
    }
    async getUserWithProduct(id) {
        return await this.userRepository.findUserWithProducts(id);
    }
};
UserService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(userRepository_1.default)),
    __metadata("design:paramtypes", [userRepository_1.default])
], UserService);
exports.default = UserService;
/**
 * @injectable() es un decorador que indica que la clase es un servicio que puede ser inyectado en otras clases.
 * @inject(UserRepository) es un decorador que indica que el parámetro userRepository del constructor debe ser resuelto por el contenedor de inyección de dependencias.
 * El contenedor de inyección de dependencias se encarga de crear una instancia de la clase UserService y de inyectar una instancia de UserRepository en el parámetro userRepository del constructor.
 *
 * Partial se utiliza para definir un tipo que tiene todas las propiedades de otro tipo como opcionales.
 */

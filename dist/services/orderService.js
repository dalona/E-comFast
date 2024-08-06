"use strict";
// En el servicio hacemos toda la logica y usos los metodos del Repo
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
Object.defineProperty(exports, "__esModule", { value: true });
const orderRepository_1 = require("../repositories/orderRepository"); //Importamos el Repo en el Service
const tsyringe_1 = require("tsyringe"); //Aqui configuramos el decorador Injectable Inject para la inyección de dependencias
let OrderService = class OrderService {
    constructor(OrderRepository) {
        this.OrderRepository = OrderRepository;
    } //private indica que solo puedo acceder a esos atributos o en este caso metodos desde dentro de la clase
    async getOrders() {
        return await this.OrderRepository.getOrders();
    }
    async createOrders(Order) {
        return await this.OrderRepository.createOrder(Order);
    }
    async updateOrders(id, Order) {
        try {
            return await this.OrderRepository.updateOrder(id, Order);
        }
        catch (error) {
            throw new Error("Error updating Order");
        }
    }
    async deleteOrders(id) {
        try {
            return await this.OrderRepository.delete(id);
        }
        catch (error) {
            throw new Error("Error deleting Order");
        }
    }
    async getOrderById(id) {
        return await this.OrderRepository.getById(id);
    }
};
OrderService = __decorate([
    (0, tsyringe_1.injectable)() //Especificamos que la clase es un servicio que puede ser inyectado en otras clases
    ,
    __param(0, (0, tsyringe_1.inject)(orderRepository_1.OrderRepository)),
    __metadata("design:paramtypes", [orderRepository_1.OrderRepository])
], OrderService);
exports.default = OrderService;

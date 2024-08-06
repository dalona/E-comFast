"use strict";
//En el controlador manejamos todas las peticiones y respuestas de la API, es el intermediario entre la vista y el modelo
//Aqui importamos container que es el contenedor de inyección de dependencias, es que gestiona las dependencias y como deben ser resueltas
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const orderService_1 = __importDefault(require("../services/orderService"));
class OrderController {
    static async getAllOrders(req, res) {
        //Aqui a esta funcion de tipo Promesa le pasamos el Request y el Response como parametros y en la constante orders le pasamos el resultado de la promesa. En orderService a la instancia Container que gestiona todas las depencias le dicemos que nos resuelva toda la logica que esta en el servicio de Orders
        const orderService = tsyringe_1.container.resolve(orderService_1.default);
        const orders = await orderService.getOrders();
        res.json(orders);
    }
    static async getOrderById(req, res) {
        const productService = tsyringe_1.container.resolve(orderService_1.default);
        const product = await productService.getOrderById(parseInt(req.params.id));
        res.json(product);
    }
    static async createOrder(req, res) {
        const orderService = tsyringe_1.container.resolve(orderService_1.default);
        const order = await orderService.createOrders(req.body);
        res.json(order);
    }
    static async updateOrder(req, res) {
        const orderService = tsyringe_1.container.resolve(orderService_1.default);
        const order = await orderService.updateOrders(parseInt(req.params.id), req.body);
        res
            .status(200)
            .json({ message: "Order successfully updated", Orders: order });
    }
    static async deleteOrder(req, res) {
        const orderService = tsyringe_1.container.resolve(orderService_1.default);
        await orderService.deleteOrders(parseInt(req.params.id));
        res.status(200).json({ message: "Order deleted successfully" });
    }
}
exports.default = OrderController;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const userService_1 = __importDefault(require("../services/userService"));
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
const productRepository_1 = __importDefault(require("../repositories/productRepository"));
const productService_1 = __importDefault(require("../services/productService"));
const orderRepository_1 = require("../repositories/orderRepository");
const orderService_1 = __importDefault(require("../services/orderService"));
tsyringe_1.container.registerSingleton(userRepository_1.default);
tsyringe_1.container.registerSingleton(userService_1.default);
tsyringe_1.container.registerSingleton(productRepository_1.default);
tsyringe_1.container.registerSingleton(productService_1.default);
tsyringe_1.container.registerSingleton(orderRepository_1.OrderRepository);
tsyringe_1.container.registerSingleton(orderService_1.default);

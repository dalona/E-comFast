"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const productService_1 = __importDefault(require("../services/productService"));
class ProductController {
    static async getAllProducts(req, res) {
        const productService = tsyringe_1.container.resolve(productService_1.default);
        const products = await productService.getAllProducts();
        res.json(products);
    }
    static async getProductById(req, res) {
        const productService = tsyringe_1.container.resolve(productService_1.default);
        const product = await productService.getProductById(parseInt(req.params.id));
        res.json(product);
    }
    static async getProductsByUserId(req, res) {
        const productService = tsyringe_1.container.resolve(productService_1.default);
        const products = await productService.getProductsByUserId(parseInt(req.params.userId));
        res.json(products);
    }
    static async createProduct(req, res) {
        const productService = tsyringe_1.container.resolve(productService_1.default);
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
    }
    static async updateProduct(req, res) {
        const productService = tsyringe_1.container.resolve(productService_1.default);
        const product = await productService.updateProduct(parseInt(req.params.id), req.body);
        res.status(200).json({ message: "Product successfully updated", Product: product });
    }
    static async deleteProduct(req, res) {
        const productService = tsyringe_1.container.resolve(productService_1.default);
        await productService.deleteProduct(parseInt(req.params.id));
        res.status(200).json({ message: 'Product deleted successfully' });
    }
}
exports.default = ProductController;

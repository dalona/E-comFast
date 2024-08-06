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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCart = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const cart_1 = require("./cart");
const product_1 = require("./product");
const order_1 = require("./order");
let ProductCart = class ProductCart extends sequelize_typescript_1.Model {
};
exports.ProductCart = ProductCart;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], ProductCart.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => cart_1.Cart),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ProductCart.prototype, "cartId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => cart_1.Cart),
    __metadata("design:type", cart_1.Cart)
], ProductCart.prototype, "CartId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => product_1.Product),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ProductCart.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => product_1.Product),
    __metadata("design:type", cart_1.Cart)
], ProductCart.prototype, "ProductId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ProductCart.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => product_1.Product),
    __metadata("design:type", Array)
], ProductCart.prototype, "products", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => order_1.Orders),
    __metadata("design:type", Array)
], ProductCart.prototype, "orders", void 0);
exports.ProductCart = ProductCart = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "productCart",
        timestamps: true, // Si deseas que Sequelize maneje los timestamps automáticamente
    })
], ProductCart);

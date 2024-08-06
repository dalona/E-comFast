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
exports.Permissions = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const role_1 = require("./role");
const entities_1 = require("./entities");
let Permissions = class Permissions extends sequelize_typescript_1.Model {
};
exports.Permissions = Permissions;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Permissions.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => role_1.Role),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Permissions.prototype, "roleId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => role_1.Role),
    __metadata("design:type", role_1.Role)
], Permissions.prototype, "role", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => entities_1.Entities),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Permissions.prototype, "EntitiesId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => entities_1.Entities),
    __metadata("design:type", entities_1.Entities)
], Permissions.prototype, "entities", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
    }),
    __metadata("design:type", Boolean)
], Permissions.prototype, "canCreate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
    }),
    __metadata("design:type", Boolean)
], Permissions.prototype, "canUpdate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
    }),
    __metadata("design:type", Boolean)
], Permissions.prototype, "canDelete", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
    }),
    __metadata("design:type", Boolean)
], Permissions.prototype, "canGet", void 0);
exports.Permissions = Permissions = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "users",
        timestamps: true, // Si deseas que Sequelize maneje los timestamps automáticamente
    })
], Permissions);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/controllers/ProductController.ts
const tsyringe_1 = require("tsyringe");
const userService_1 = __importDefault(require("../services/userService"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//Para poner Autenticar al usuario usamos el modulo Json Web Token "JWT" donde nos traemos los metodos que estan en el Servicio del usuario para poder ya luego validar la peticion aqui en el controlador e importamos el modulo de Usuario para saber que datos tiene el usuario.
//
class AuthController {
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const userService = tsyringe_1.container.resolve(userService_1.default); //Container es como un mapa de todas las clases registradas para que se puedan inyectar en otras clases, primero busca si existe la clase y si no la registra. Me usa un trocito de memoria
            const user = await userService.checkUserCredentials(email, password); //Este metodo que esta en la logica nos valida si el usuario esta registrado y si la contraseña es correcta.
            // Generar token JWT
            const token = AuthController.generateToken({ id: user.id, username: user.email, });
            res.status(200).json({ status: 200, token });
        }
        catch (error) {
            res.status(401).json({ message: error.message });
        }
    }
}
//Ya este metodo para generar el token toma como parametro el id y el usuario y con su propio metodo crea una llave secreta para firmar el token.
AuthController.generateToken = (user) => {
    const token = jsonwebtoken_1.default.sign(user, "secret", { expiresIn: "1h" });
    return token;
};
exports.default = AuthController;

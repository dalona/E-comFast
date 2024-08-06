// src/controllers/ProductController.ts
import { container } from "tsyringe";
import { Request, Response } from "express";
import UserService from "../services/userService";
import jwt from "jsonwebtoken";
import { User } from "../models";

//Para poner Autenticar al usuario usamos el modulo Json Web Token "JWT" donde nos traemos los metodos que estan en el Servicio del usuario para poder ya luego validar la peticion aqui en el controlador e importamos el modulo de Usuario para saber que datos tiene el usuario.

//

export default class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const userService = container.resolve(UserService); //Container es como un mapa de todas las clases registradas para que se puedan inyectar en otras clases, primero busca si existe la clase y si no la registra. Me usa un trocito de memoria
      const user: User = await userService.checkUserCredentials(email,password); //Este metodo que esta en la logica nos valida si el usuario esta registrado y si la contraseña es correcta.

      // Generar token JWT
      const token = AuthController.generateToken({id: user.id,username: user.email,});
      res.status(200).json({ status: 200, token });
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }
//Ya este metodo para generar el token toma como parametro el id y el usuario y con su propio metodo crea una llave secreta para firmar el token.

  static generateToken = (user: { id: number; username: string }) => {
    const token = jwt.sign(user, "secret", { expiresIn: "1h" });
    return token;
  };
}

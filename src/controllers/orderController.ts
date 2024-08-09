//En el controlador manejamos todas las peticiones y respuestas de la API, es el intermediario entre la vista y el modelo
//Aqui importamos container que es el contenedor de inyección de dependencias, es que gestiona las dependencias y como deben ser resueltas

import { Request, Response } from "express";
import { container } from "tsyringe";
import OrderService from "../services/orderService";
import { Product } from "../models";

export default class OrderController {
  static async getAllOrders(req: Request, res: Response) {
    //Aqui a esta funcion de tipo Promesa le pasamos el Request y el Response como parametros y en la constante orders le pasamos el resultado de la promesa. En orderService a la instancia Container que gestiona todas las depencias le dicemos que nos resuelva toda la logica que esta en el servicio de Orders
    const orderService = container.resolve(OrderService);
    const orders = await orderService.getOrders();
    res.json(orders);
  }

  static async getOrderById(req: Request, res: Response) {
    try{
    const orderService = container.resolve(OrderService);
    const order = await orderService.getOrderById(parseInt(req.params.id));
    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }res.json(order);
  }catch{
    throw new Error("Order not found");
  }
  }

  static async createOrder(req: Request, res: Response) {
    const orderService = container.resolve(OrderService);
    const order = await orderService.createOrders(req.body);
    res.json(order);
  }

  static async updateOrder(req: Request, res: Response) {
    const orderService = container.resolve(OrderService);
    const order = await orderService.updateOrders(parseInt(req.params.id),req.body);
    res.status(200).json({ message: "Order successfully updated", Orders: order });
  }

  static async deleteOrder(req: Request, res: Response) {
    const orderService = container.resolve(OrderService);
    await orderService.deleteOrders(parseInt(req.params.id));
    res.status(200).json({ message: "Order deleted successfully" });
  }
}
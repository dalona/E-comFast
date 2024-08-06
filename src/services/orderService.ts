


// En el servicio hacemos toda la logica y usos los metodos del Repo

import { OrderRepository } from "../repositories/orderRepository"; //Importamos el Repo en el Service
import { injectable, inject } from "tsyringe"; //Aqui configuramos el decorador Injectable Inject para la inyección de dependencias
import { Orders } from "../models/order"; // Aqui importamos el modelo de Order
import { CreationAttributes } from "sequelize";

 @injectable() //Especificamos que la clase es un servicio que puede ser inyectado en otras clases
 export default class OrderService {
   constructor(
     @inject(OrderRepository) private OrderRepository: OrderRepository
   ) {} //private indica que solo puedo acceder a esos atributos o en este caso metodos desde dentro de la clase

   async getOrders() {
     return await this.OrderRepository.getOrders();
   }

   async createOrders(Order: CreationAttributes<Orders>) {
     return await this.OrderRepository.createOrder(Order);
   }

   async updateOrders(
     id: number,Order: CreationAttributes<Orders>) {
     try {
       return await this.OrderRepository.updateOrder(id, Order);
     } catch (error: any) {
       throw new Error("Error updating Order");
     }
   }

   async deleteOrders(id: number) {
     try {
       return await this.OrderRepository.delete(id);
     } catch (error: any) {
       throw new Error("Error deleting Order");
     }
   }

   async getOrderById(id: number) {
     return await this.OrderRepository.getById(id);
   }
 }


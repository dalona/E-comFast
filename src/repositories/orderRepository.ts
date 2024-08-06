
//En el Repo es donde especificamos todo lo que va occurrir en la base de datos, Es donde sucede el CRUD y uutilizamos los metodos de Sequelize
//Aqui se hacen las consultas a la base de datos ya no con MySql sino con ORM

import { injectable } from "tsyringe"; //Aqui configuramos el decorador Injectable  para la inyección de dependencias
import { Orders } from '../models'; //Importamos el modelo en el Repo
import { CreationAttributes} from "sequelize";


@injectable()
export class OrderRepository {
  //Especificamos que la clase es un Repo que puede ser inyectado en otras clases
  async getOrders() {
    return await Orders.findAll({ attributes: ["id", "total"] });
  }

  async createOrder(Order: CreationAttributes<Orders>) {
    return await Orders.create(Order);
  }

  async updateOrder(id: number, Order: CreationAttributes<Orders>) {
    const existingOrder = await Orders.findByPk(id);
    if (!existingOrder) {
      throw new Error("Order not found");
    }
    return await existingOrder.update(Order);
  }

  async delete(id: number) {
    const deleteOrder = await Orders.findByPk(id);
    if (!deleteOrder) {
      throw new Error("Order not found");
    }
    return await deleteOrder.destroy();
  }

  async getById(id: number) {
    return await Orders.findByPk(id, { attributes: ["id", "total"] });
  }
}

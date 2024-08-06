import { injectable } from 'tsyringe';
import { Product } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable() 
export default class ProductRepository {
    async findAll() {
        return await Product.findAll();
    }

    async findById(id: number) {
        return await Product.findByPk(id);
    }

    async findByUserId(userId: number) {
        return await Product.findAll({ where: { userId } });
    }

    async create(product: CreationAttributes<Product>) {
        return await Product.create(product);
    }

    async update(id: number, product: Partial<Product>) {
        const productUpdated = await Product.findByPk(id);
        if (!productUpdated) {
           throw new Error('Product not found');
        }
        return await productUpdated.update(product);
    }

    async delete (id:number){
        const productDeleted = await Product.findByPk(id);
        if (!productDeleted) {
            throw new Error('Product not found');
        }
        return await productDeleted.destroy();
    }
}

/**
 * CreationAttributes< --- > es un tipo que representa los atributos que se pueden pasar a la función create de un modelo de Sequelize.
 * Haga de cuenta un interface
 */

import { injectable } from 'tsyringe';
import { User } from '../models/user';
import { Product, Role } from '../models';

@injectable()
export default class UserRepository {
    async findAll() {
        return await User.findAll({attributes: ['id', 'name','email','roleId']});
    }

    async findById(id: number) {//Puedo cambiar el nombre al metodo, en el return uso los metodos del ORM "Sequelize"
        return await User.findByPk(id,{attributes: ['id','name','email']});
    }

    async create(user: Partial<User>) {
        return await User.create(user);
    }

    async findByEmail(email: string) {
        return await User.findOne({ where: { email } });
    }

    async update(id: number, user: Partial<User>) {
        const existingUser = await User.findByPk(id);
        if (!existingUser) {
            throw new Error("User not found");
        }
        return await existingUser.update(user);
    }

    async delete(id:number){
        const deleteUser = await User.findByPk(id);
        if(!deleteUser){
            throw new Error("User not found");
        }
        return await deleteUser.destroy();
    }

async findUserWithProducts (id:number){
    return await User.findByPk(id,{ attributes:["id","name","email"],
        include: [
            {
                model:Product,
                attributes: [ 'id', 'name', 'price'],
            }
        ]}

    )}
}
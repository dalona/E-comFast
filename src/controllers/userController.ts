import { Request, Response } from "express";
import { container } from "tsyringe";
import UserService from "../services/userService";

export default class UserController {
  static async getAllUsers(_: Request, res: Response) {
    const userService = container.resolve(UserService);
    const users = await userService.getAllUsers();
    res.json(users);
  }

  static async getUserById(req: Request, res: Response) {
    try{
      const userService = container.resolve(UserService);
      const user = await userService.getUserById(parseInt(req.params.id));
      if(!user){
        return res.status(404).json({message: 'User not found'})};
        res.json(user);
    }catch{
      throw new Error('User not found');
    }
    
  }

  static async createUser(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error:any) {
      if (error.name === "SequelizeValidationError"){
        return res.status(400).json({errors: error.errors.map((e:any) => e.message)});
      }
      res.status(500).json({message: 'Internal server error'});
    }
    
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      const user = await userService.updateUser(parseInt(req.params.id), req.body);
      res.status(200).json({message : "User successfully updated"});
    } catch (error:any) {
      if (error.name === "SequelizeValidationError"){
        return res.status(400).json({errors: error.errors.map((e:any) => e.message)});
      }
      res.status(500).json({error: error.message});
    }
}
  static async deleteUser(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      const user = await userService.deleteUser(parseInt(req.params.id));
     return res.status(200).json({message : "User succesfully deleted"});
    } catch (error:any) {
      res.status(500).json({error: error.message});
    }
  
}

static async getUserWithProduct(req: Request, res: Response){
  try {
    const userService = container.resolve(UserService);
    const user = await userService.getUserWithProduct(parseInt(req.params.id));
    if(!user) return res.status(404).json({message: 'User not found'});
    res.json(user);
  } catch (error:any) {
    res.status(500).json({error: error.message});
  }
  
}


}
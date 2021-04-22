import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController {
  //  a estrutura : Promise<Response> indica ao typescript que a função
  // espera o return de um response e não aceitaria um void por exemplo
  // que é uma função sem return
  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const usersService = new UsersService();

    const user = await usersService.create(email);

    return response.json(user);
  }
}

export { UsersController };

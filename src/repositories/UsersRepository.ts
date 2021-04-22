import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User"

// TODO Entender melhor essa estrutura de decorators 
@EntityRepository(User)
// essa representação <User> é para indicar o tipo
class UsersRepository extends Repository<User> {} 

export { UsersRepository };


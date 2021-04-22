import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";
//TODO: estudar o que é a interface
// a interface serve para deixar claro para o typescript de que tipo é a variável
interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository)
  }
  //TODO: estudar melhor essa declaração de tipagem do typescript
  async create({ chat, username }: ISettingsCreate) {

    // Select * from settings where username = "username" limit 1;
    const userAlreadyExists = await this.settingsRepository.findOne({
      username
    })

    if(userAlreadyExists) {
      throw new Error("User already exists!")
    }

    const settings = this.settingsRepository.create({
      chat,
      username,
    });

    await this.settingsRepository.save(settings);

    return settings
  }
}

export { SettingsService };

import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepository";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export { routes };

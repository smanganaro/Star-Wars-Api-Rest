import { getPlanetService } from "../services/planet.service.js";

export async function getPlanetsController(req, res, next) {
  try {
    res.json(await getPlanetService());
  } catch (err) {
    next(err);
  }
}

import { getPeopleService } from "../services/people.service.js";

export async function getPeopleController(req, res, next) {
  try {
    res.json(await getPeopleService(req.query.sortBy));
  } catch (err) {
    next(err);
  }
}

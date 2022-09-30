export class getPeopleForPlanetError extends Error {
  constructor(message = 'Get people for planet failed') {
    super(message);
  }
}
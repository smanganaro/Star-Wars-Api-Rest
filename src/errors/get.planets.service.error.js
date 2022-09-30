export class getPlanetsServiceError extends Error {
  constructor(message = 'Get planets service failed') {
    super(message);
  }
}
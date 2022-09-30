export class getPeopleServiceError extends Error {
  constructor(message = 'Get people service failed') {
    super(message);
  }
}
export class Response {
  data;
  error;
  constructor(data, error = null) {
    this.data = data;
    this.error = error;
  }
}

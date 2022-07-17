export class ApiUrl {
  private baseUrl
  constructor(url: string) {
    this.baseUrl = url
  }

  get(path: string) {
    return `${this.baseUrl}/${path}`
  }
}

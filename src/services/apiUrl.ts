export class ApiUrl {
  private baseUrl
  constructor(url: string) {
    this.baseUrl = url
  }

  get(path: string): string {
    return `${this.baseUrl}/${path}`
  }
}

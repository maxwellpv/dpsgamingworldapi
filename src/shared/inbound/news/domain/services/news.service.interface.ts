export interface NewsServiceInterface {
  findByTheme(theme: string): Promise<string>;
}

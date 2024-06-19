export class Product {
  constructor(
    public id: number,
    public name: string,
    public code: string,
    public description: string,
    public urlImage: string,
    public image: File,
    public price: number,
    public userId: string,
    public categoryId: string,
  ){}
}

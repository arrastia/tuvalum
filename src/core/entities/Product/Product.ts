export interface Product {
  id: number;
  image?: string;
  price: string;
  quantity?: number;
  title: string;
  year: string;
}

export class Product {
  constructor({ id, image, price, quantity, title, year }: Product) {
    this.id = id;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
    this.title = title;
    this.year = year;
  }
}

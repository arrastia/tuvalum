export interface Product {
  id: number;
  image: string;
  price: string;
  title: string;
  year: string;
}

export class Product {
  constructor({ id, image, price, title, year }: Product) {
    this.id = id;
    this.image = image;
    this.price = price;
    this.title = title;
    this.year = year;
  }
}

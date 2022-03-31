export interface CardProps {
  id: number;
  image?: string;
  onButtonClick: (id: number) => void;
  price: string;
  title: string;
  year: string;
}

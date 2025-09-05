export type Product = {
  _id: string;
  name: string;
  description: string;
  deliveryInfo: string;
  onSale: string;
  priceDrop: number;
  imageUrls: string[];
  price: number;
  fields?: string[];
};

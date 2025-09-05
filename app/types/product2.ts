export type Product = {
  _id: string;
  title: string;
  description: string;
  imageUrls: string[]; // Cloudinary image URLs
  bulletPoints?: string[];
  fields?: string[]; // Add optional fields array
  originalPrice?: number;
  discountedPrice?: number;
};

import ProductsSection from "./ProductsSection";
import { Product } from "../types/product";

async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/all`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.products;
}

export default async function Home() {
  const products = await getProducts();
  return <ProductsSection products={products} />;
}
'use client';

import { useState } from "react";
import ProductCard2 from "./ProductCard";
import { Product } from "../../types/product";
import Link from "next/link";

type Props = {
  products: Product[];
};

const ProductsSection2 = ({ products }: Props) => {
  const [productList, setProductList] = useState(products);

  const handleRemove = async (productId: string) => {
    try {
      const res = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setProductList((prev) => prev.filter((p) => p._id !== productId));
      } else {
        console.error("Failed to delete product");
        alert("Something went wrong. Try again.");
      }
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <h1
        className="text-5xl font-bold mb-6 text-[#4D5557]"
        style={{ fontFamily: "'CelestialFont', Petrona, serif" }}
      >
        Our Products
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Circular Add Product Card */}
        <Link href="/admin/AddProduct">
          <div className="w-full aspect-square rounded-full border-4 bg-[#4A1A11] flex items-center justify-center text-center hover:shadow-xl transition cursor-pointer">
            <img
              src="/plus.png"
              alt="Add Product"
              className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Product Cards */}
        {productList.map((product) => (
          <ProductCard2 key={product._id} product={product} onRemove={handleRemove} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection2;

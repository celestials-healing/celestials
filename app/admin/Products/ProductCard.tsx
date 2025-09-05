"use client";

import { useState } from "react";
import { Product } from "../../types/product";
import Link from "next/link";

type Props = {
  product: Product;
  onRemove?: (productId: string) => void;
};

const ProductCard2 = ({ product, onRemove }: Props) => {
  const [removing, setRemoving] = useState(false);

  const handleRemoveClick = async () => {
    const confirmed = window.confirm(`Are you sure you want to remove "${product.name}"?`);
    if (!confirmed) return;

    setRemoving(true);
    try {
      await onRemove?.(product._id);
    } catch (err) {
      console.error("Failed to remove product:", err);
    } finally {
      setRemoving(false);
    }
  };

  return (
    <div className="border rounded-2xl shadow-md p-4 hover:shadow-xl transition flex flex-col justify-between">
      <Link href={`/products/${product._id}`}>
        <img
          src={product.imageUrls[0]}
          alt={product.name || "Product image"}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
      </Link>

      <h2 className="text-lg font-semibold text-[#4A1A11]">{product.name}</h2>
      <p className="text-[#4A1A11] mb-2 font-medium">₹{product.priceDrop || 0}</p>

      <div className="flex gap-2 mt-auto">
        <button
          onClick={handleRemoveClick}
          disabled={removing}
          className={`flex-1 px-4 py-2 rounded-lg text-sm transition ${
            removing
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600 text-white"
          }`}
        >
          {removing ? "Removing..." : "Remove"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard2;

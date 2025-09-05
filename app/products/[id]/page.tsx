'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import CheckoutButton from '@/app/components/CheckoutButton';

type Product = {
  _id: string;
  name: string;
  description: string;
  deliveryInfo: string;
  onSale: string; // or 'Yes' | 'No'
  priceDrop: number;
  price: number;
  imageUrls: string[];
};

const ProductClient = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();
      if (res.ok) setProduct(data.product);
    };

    if (id) fetchProduct();
  }, [id]);

  if (!product) return <p className="p-10 text-center">Loading...</p>;

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
      <div className="min-h-screen p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: images */}
          <div className="flex flex-row space-x-12">
            <div className="flex flex-col space-y-3">
              {product.imageUrls.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="rounded shadow"
                />
              ))}
            </div>
            <Image
              src={product.imageUrls[0]}
              alt={product.name}
              width={400}
              height={400}
              className="rounded shadow"
            />
          </div>

          {/* Right: info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="mt-4 flex items-center space-x-3">
              {product.onSale === 'Yes' && (
                <span className="text-2xl font-semibold line-through text-gray-500">
                  ₹{product.price}
                </span>
              )}
              <span className="text-2xl font-bold text-red-600">
                ₹{product.priceDrop}
              </span>
            </div>

            <p className="mt-4 font-medium text-[#4D5557]">
              Delivery Info: <span className="font-bold">{product.deliveryInfo}</span>
            </p>

            
<div className="mt-4 px-3 py-2 w-26 bg-[#4A1A11] text-white rounded hover:bg-gray-800 transition">
  <CheckoutButton amount={product.priceDrop} />
</div>

            <div className="mt-6 border-t pt-4">
              <h2 className="text-lg font-semibold mb-2 text-[#4D5557]">Description</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductClient;

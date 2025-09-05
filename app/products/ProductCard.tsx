import { Product } from "../types/product";
import Link from "next/link";


type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="border rounded-2xl shadow-md p-4 hover:shadow-xl transition">
      <Link href={`/products/${product._id}`}>
        <img
          src={product.imageUrls[0]}
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
      </Link>
      <h2 className="text-lg font-semibold text-[#4A1A11]">{product.name}</h2>
      <p className="text-[#4A1A11] mb-2 font-medium">₹{product.priceDrop || 0}</p>
    </div>
  );
};

export default ProductCard;

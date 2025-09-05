import Link from "next/link";
import { Product } from "../types/product2";

type Props = {
  product: Product;
};

const CourseCard = ({ product }: Props) => {
  return (
    <Link href={`/courses/${product._id}`}>
      <div className="w-full relative cursor-pointer">
        <div className="gradient-border-wrapper aspect-[5/5] w-[300px] mx-auto rounded-full p-1">
          <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden bg-white p-4 flex flex-col items-center justify-center text-center group">
            
            {/* Small Circular Image */}
            {product.imageUrls?.[0] && (
              <img
                src={product.imageUrls[0]}
                alt={product.title}
                className="w-20 h-20 rounded-full object-cover mb-2"
              />
            )}

            <div className="transition duration-300 group-hover:blur-sm">
              <h2 className="text-3xl font-bold text-black">{product.title}</h2>
              {/* <p className="text-sm text-[#4A1A11] truncate">{product.description}</p> */}
              {/* <p className="text-[#4A1A11] mb-2">₹{product.discountedPrice}</p> */}
            </div>

            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 bg-[#4A1A11] text-white px-4 py-2 rounded-full">
              Explore More
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;

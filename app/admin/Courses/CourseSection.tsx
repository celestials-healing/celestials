import CourseCard from "./CourseCard";
import { Product } from "../../types/product2";
import Link from "next/link";

type Props = {
  products: Product[];
};

const CourseSection = ({ products }: Props) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <h1
          className="text-5xl font-bold mb-10 text-[#4D5557] text-center"
          style={{ fontFamily: "'CelestialFont', Petrona, serif" }}
        >
          Our Products
        </h1>

        {/* Grid including plus image and products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Static Plus Image Box (Top-Left) */}
          <Link href="/admin/AddCourse">
           <div className="gradient-border-wrapper aspect-[5/5] w-[300px] mx-auto rounded-full p-1">
        <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden bg-white p-4 flex flex-col items-center justify-center text-center group">
            <div className=" rounded-full p-4 flex flex-col items-center justify-center text-center">
              <img
                src="/plus.png"
                alt="Add Product"
                 className="w-40 h-40 object-contain hover:scale-110 transition-transform duration-300"
              />
             
            </div>
            </div>
            </div>
          </Link>

          {/* All product cards */}
          {products.map((product) => (
             <CourseCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseSection;

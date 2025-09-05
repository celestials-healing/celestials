import React from 'react';
import CourseCard from './CourseCard';
import { Product } from '../types/product2';

interface Props {
  products: Product[];
  category?: 'Reiki' | 'Astrology' | 'Yoga'; // Optional category filter
  title?: string; // Optional custom title
}

const CourseSection: React.FC<Props> = ({ products, category, title }) => {
  // Filter courses based on category if provided
  const filteredProducts: Product[] = category 
    ? products.filter((product: Product) => 
        product.fields && product.fields.includes(category)
      )
    : products;

  if (!filteredProducts || filteredProducts.length === 0) {
    const categoryText: string = category ? ` for ${category}` : '';
    return (
      <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden text-[#4D5557]">
        <section className="py-10 px-4 max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            <h1
              className="text-7xl font-bold mb-6 text-[#4D5557]"
              style={{ fontFamily: "'CelestialFont', Petrona, serif" }}
            >
              {title || `${category || 'Our'} Courses`}
            </h1>
          </div>
          <div className="text-center py-10 text-gray-600 text-xl">
            No courses found{categoryText}.
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden text-[#4D5557]">
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <h1
            className="text-7xl font-bold mb-6 text-[#4D5557]"
            style={{ fontFamily: "'CelestialFont', Petrona, serif" }}
          >
            {title || `${category || 'Our'} Courses`}
          </h1>
        </div>
        
        {/* Show count of courses */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            {filteredProducts.length} course{filteredProducts.length !== 1 ? 's' : ''} found
            {category && ` in ${category}`}
          </p>
        </div>

        <div className="grid grid-flow-col auto-rows-max gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product: Product) => (
            <CourseCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseSection;
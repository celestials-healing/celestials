'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import CheckoutButton from '@/app/components/CheckoutButton';

type Course = {
  _id: string;
  title: string;
  description: string;
  imageUrls: string[];
  bulletPoints: string[];
  originalPrice: number;
  discountedPrice: number;
};

const CourseDetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const res = await fetch(`/api/courses/${id}`);
      const data = await res.json();
      if (res.ok) setCourse(data.course);
    };
    if (id) fetchCourse();
  }, [id]);

  if (!course) return <p className="p-10 text-center">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6cf92] to-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="flex justify-center items-center">
          {course.imageUrls?.[0] ? (
            <Image
              src={course.imageUrls[0]}
              alt={`Main image for ${course.title}`}
              width={400}
              height={400}
              className="rounded-lg shadow-md object-cover"
            />
          ) : (
            <div className="w-[400px] h-[400px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              No image available
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
          <p className="text-gray-700 mb-4">{course.description}</p>

          <h2 className="text-xl font-semibold text-[#4D5557] mb-2">Key Learnings</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800 space-y-1">
            {course.bulletPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>

          <div className="flex items-center space-x-4 mb-6">
            <span className="text-2xl font-semibold line-through text-gray-500">
              ₹{course.originalPrice}
            </span>
            <span className="text-2xl font-bold text-red-600">
              ₹{course.discountedPrice}
            </span>
          </div>

          <div className="mt-4 px-3 py-2 w-26 bg-[#4A1A11] text-white rounded hover:bg-gray-800 transition">
  <CheckoutButton amount={course.discountedPrice} />
</div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;

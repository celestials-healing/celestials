// app/page.tsx
import Header3 from './header3';
import Layout from '../components/layout';
// import EnrollPage from '../components/enroll';
// import Team from '../components/team';
import WellnessLandingPage from '../components/video';
// import Enroll2 from '../components/courses';
import CourseSection from '../components/CourseSection';
import ProductsSection from '../products/ProductsSection'; // ✅ Import
import { Product } from '../types/product';
import { Product as CourseProduct } from "../types/product2";

// ✅ Fetch products server-side
async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/all`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.products;
}

async function getCourses(): Promise<CourseProduct[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/courses`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.courses;
}

// ✅ Server Component (since we are fetching directly here)
export default async function Home() {
  const products = await getProducts();
  const courses = await getCourses();

  return (
    <div>
      <Header3 />
      <Layout />
      {/* <EnrollPage /> */}
      <CourseSection products={courses} 
      category="Yoga"
      title="Yoga Offerings" />
      {/* 🔹 Product Section */}
          <ProductsSection 
      products={products} 
      category="Yoga"
      title="Yoga Products"
    />

      
      
     

      <WellnessLandingPage />
       
      {/* <Team /> */}
    </div>
  );
}

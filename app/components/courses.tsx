import CourseSection from "./CourseSection";
import { Product } from "../types/product2";

async function getCourses(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/courses`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.courses;
}

export default async function Home() {
  const courses = await getCourses();
  return <CourseSection products={courses} />;
}

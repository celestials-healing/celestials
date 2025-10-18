'use client'
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FancyTestimonialsSlider from "./testimonialcourosel";
import { StaticImageData } from "next/image";

const createStaticImageData = (src: string): StaticImageData => {
  return {
    src,
    height: 56,
    width: 56,
    blurDataURL: '',
    blurWidth: 0,
    blurHeight: 0,
  };
};

const testimonialImage = createStaticImageData('/image.png');

interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  approved: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Testimonial {
  img: StaticImageData;
  quote: string;
  name: string;
  role: string;
}

const Testimonial: NextPage = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchApprovedMessages();
  }, []);

  const fetchApprovedMessages = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/Contact?approved=true');
      const data = await response.json();

      if (data.success && Array.isArray(data.data)) {
        const formattedTestimonials: Testimonial[] = data.data.map(
          (message: ContactMessage) => ({
            img: testimonialImage,
            quote: message.message,
            name: message.name,
            role: message.email,
          })
        );
        setTestimonials(formattedTestimonials);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      setTestimonials([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-[#f6cf92] overflow-hidden">
      <Head>
        <title>Testimonials | Reiki Certification Program</title>
        <meta
          name="description"
          content="Hear what our graduates say about our Reiki certification program"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="flex min-h-screen flex-col items-center justify-center px-4 py-12"
        style={{ fontFamily: "'CelestialFont', Petrona, serif" }}
      >
        <div className="w-full flex flex-col items-center">
          {isLoading ? (
            <div className="text-center">
              <p className="text-[#4D5557] text-lg">Loading testimonials...</p>
            </div>
          ) : testimonials.length > 0 ? (
            <FancyTestimonialsSlider testimonials={testimonials} />
          ) : (
            <div className="text-center">
              <p className="text-[#4D5557] text-lg">No testimonials available yet</p>
            </div>
          )}

          <button
            onClick={() => router.push('/ContactUs')}
            className="mt-12 group relative px-8 py-3 bg-gradient-to-r from-[#4D5557] to-[#6b7577] text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Share Your Experience
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#6b7577] to-[#4D5557] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Testimonial;
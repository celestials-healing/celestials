import type { NextPage } from "next";
import Head from "next/head";
import FancyTestimonialsSlider from "./testimonialcourosel";
import { StaticImageData } from "next/image";

// Approach 1: Create a StaticImageData object manually
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

const Testimonial: NextPage = () => {
  const testimonials = [
    {
      img: testimonialImage,
      quote:
        "The Reiki certification program transformed my life and deepened my spiritual practice. I now feel empowered to help others on their healing journeys.",
      name: "Emily Johnson",
      role: "Reiki Master, Self-employed",
    },
    {
      img: testimonialImage,
      quote:
        "After completing the Reiki program, I've gained profound insight into energy healing. The techniques I learned have become an invaluable part of my daily wellness routine.",
      name: "David Parker",
      role: "Wellness Coach",
    },
    {
      img: testimonialImage,
      quote:
        "The instructors were incredibly knowledgeable and supportive throughout the entire certification process. I feel confident in my ability to practice Reiki professionally.",
      name: "Sarah Williams",
      role: "Holistic Practitioner",
    },
  ];

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

      <main className="flex min-h-screen items-center justify-center " style={{ fontFamily: "'CelestialFont', Petrona, serif",}}>
        <FancyTestimonialsSlider testimonials={testimonials} />
      </main>
    </div>
  );
};

export default Testimonial;
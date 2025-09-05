// pages/team.tsx
"use client"
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Jane Doe",
    title: "Lead Instructor",
    description: "With over 10 years of experience in Reiki healing and teaching.",
    image: "/placeholder.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    title: "Healing Expert",
    description: "Specializing in energy healing and intuitive guidance for personal growth.",
    image: "/placeholder.jpg",
  },
  {
    id: 3,
    name: "Emily Johnson",
    title: "Reiki Master",
    description: "Certified Reiki Master with a passion for holistic wellness and meditation.",
    image: "/placeholder.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    title: "Spiritual Guide",
    description: "Bringing years of experience in spiritual coaching and energy alignment.",
    image: "/placeholder.jpg",
  },
  {
    id: 5,
    name: "Sarah Davis",
    title: "Wellness Coach",
    description: "Dedicated to helping clients achieve balance and harmony through Reiki practices.",
    image: "/placeholder.jpg",
  },
  {
    id: 6,
    name: "Laura Wilson",
    title: "Energy Healer",
    description: "Expert in chakra balancing and emotional healing through Reiki techniques.",
    image: "/placeholder.jpg",
  },
  {
    id: 7,
    name: "David Lee",
    title: "Meditation Teacher",
    description: "Guiding individuals in mindfulness practices and deep relaxation through meditation.",
    image: "/placeholder.jpg",
  },
  {
    id: 8,
    name: "Rachel Green",
    title: "Holistic Healer",
    description: "Combining Reiki with holistic practices for comprehensive healing experiences.",
    image: "/placeholder.jpg",
  },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-200 aspect-square mb-4">
        <div className="w-full h-full flex items-center justify-center">
          <Image 
            src={member.image} 
            alt={member.name} 
            width={150} 
            height={150}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h3 className="text-lg font-bold">{member.name}</h3>
      <p className="text-md text-[#4A1A11]">{member.title}</p>
      <p className="text-sm mt-2 mb-4 text-[#4A1A11]">{member.description}</p>
      <div className="flex space-x-2">
        <Link href="#" className="text-gray-700 hover:text-black">
          <FaLinkedin size={20} />
        </Link>
        <Link href="#" className="text-gray-700 hover:text-black">
          <FaTwitter size={20} />
        </Link>
        <Link href="#" className="text-gray-700 hover:text-black">
          <FaDribbble size={20} />
        </Link>
      </div>
    </div>
  );
};

const Team: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-[#f6cf92] overflow-hidden">
    <div className="min-h-screen w-full text-[#4D5557]">
      <Head>
        <title>Our Team | Empower Reiki</title>
        <meta name="description" content="Meet our team of Reiki practitioners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-md mb-2 text-[#4A1A11]">Empower</p>
          <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: "'CelestialFont', Petrona, serif",}}>Our Team</h1>
          <p className="text-lg text-[#4A1A11]">Meet our dedicated Reiki instructors and their expertise.</p>
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#4A1A11] text-white border rounded-full p-2 shadow-md"
            onClick={() => scroll('left')}
          >
            <FaChevronLeft />
          </button>
          <div
            ref={scrollRef}
            className="flex space-x-8 overflow-hidden scroll-smooth scrollbar-hide py-3"
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="flex-shrink-0 w-72">
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#4A1A11] text-white border rounded-full p-2 shadow-md"
            onClick={() => scroll('right')}
          >
            <FaChevronRight />
          </button>
        </div>
      </main>
    </div>
    </div>
  );
};
export default Team;
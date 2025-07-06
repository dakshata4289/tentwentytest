'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { PanInfo } from 'framer-motion';

const cards = [
  {
    src: '/card1.webp',
    title: 'Rose Valley',
    caption: 'Since 2015',
    desc: 'A place where roses bloom year-round.',
  },
  {
    src: '/card2.webp',
    title: 'Flora Delight',
    caption: 'Started in 2017',
    desc: 'There’s always something happening at Flower Exchange.',
  },
  {
    src: '/card3.webp',
    title: 'Petal Grove',
    caption: 'Since 2019',
    desc: 'Experience the wild side of nature’s beauty.',
  },
  {
    src: '/card2.webp',
    title: 'Tulip Town',
    caption: 'Launched 2020',
    desc: 'Bright and beautiful tulips all year long.',
  },
];

export default function FeaturedSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getCard = (offset: number) => {
    const index = (activeIndex + offset + cards.length) % cards.length;
    return cards[index];
  };

  const handleLeftDrag = (_: unknown, info: PanInfo) => {
    if (info.offset.x > 100) {
      setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }
  };

  const handleRightDrag = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -100) {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }
  };

  return (
    <section className="relative bg-[#fff8f1] h-auto min-h-[80vh] py-16 overflow-hidden flex flex-col items-center justify-center">


      <motion.div
        key={activeIndex + '-left'}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleLeftDrag}
        className="hidden md:block absolute left-0 bottom-20 w-60 sm:w-72 md:w-80 transform -translate-x-[5%] z-10 cursor-grab active:cursor-grabbing"
        initial={{ x: -60, opacity: 0, rotate: -12 }}
        animate={{ x: 0, opacity: 1, rotate: -12 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={getCard(-1).src}
          alt="Left"
          width={400}
          height={400}
          className="rounded-xl shadow-lg object-cover w-full h-auto"
        />
      </motion.div>


      <motion.div
        key={activeIndex + '-center'}
        className="w-64 sm:w-72 md:w-80 z-20 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src={getCard(0).src}
          alt="Center"
          width={400}
          height={400}
          className="rounded-xl shadow-xl object-cover w-full h-auto"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 px-4"
        >
          <p className="text-xs text-gray-500 uppercase mb-1">
            {getCard(0).caption}
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
            {getCard(0).title}
          </h3>
          <p className="text-sm text-gray-600 max-w-sm mx-auto mt-2">
            {getCard(0).desc}
          </p>
        </motion.div>
      </motion.div>


      <motion.div
        key={activeIndex + '-right'}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleRightDrag}
        className="hidden md:block absolute right-0 bottom-20 w-60 sm:w-72 md:w-80 transform translate-x-[5%] z-10 cursor-grab active:cursor-grabbing"
        initial={{ x: 60, opacity: 0, rotate: 12 }}
        animate={{ x: 0, opacity: 1, rotate: 12 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={getCard(1).src}
          alt="Right"
          width={400}
          height={400}
          className="rounded-xl shadow-lg object-cover w-full h-auto"
        />
      </motion.div>
    </section>
  );
}

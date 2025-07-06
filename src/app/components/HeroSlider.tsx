'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  { id: 1, src: '/hero.webp', title: 'From Our Farms To Your Hands' },
  { id: 2, src: '/hero1.webp', title: 'Freshness Guaranteed' },
  { id: 3, src: '/hero2.webp', title: 'Naturally Grown, Carefully Picked' },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      loop
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      modules={[Autoplay]}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="w-full h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden">
          {/* Animated Background Image with clipPath transition */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              {activeIndex === index && (
                <motion.div
                  key={`img-${slide.id}`}
                  initial={{
                    opacity: 0,
                    clipPath: 'inset(50% 0% 50% 0%)',
                  }}
                  animate={{
                    opacity: 1,
                    clipPath: 'inset(0% 0% 0% 0%)',
                  }}
                  exit={{
                    opacity: 0,
                    clipPath: 'inset(50% 0% 50% 0%)',
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.6, 0.05, 0.01, 0.9],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.src}
                    alt={`Slide ${slide.id}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Animated Text */}
          <AnimatePresence mode="wait">
            {activeIndex === index && (
              <motion.div
                key={`text-${slide.id}`}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.95 }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                className="absolute z-20 left-6 sm:left-16 bottom-24 sm:bottom-32 max-w-3xl"
              >
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight drop-shadow-xl">
                  {slide.title}
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

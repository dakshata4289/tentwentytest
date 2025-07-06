'use client';

import HeroSlider from './components/HeroSlider';
import AnimatedHeadline from './components/AnimatedHeadline';
import ProductCards from './components/ProductCards';

export default function Home() {
  return (
    <main>
      {/* Hero Section Slider */}
      <HeroSlider />

      {/* Animated Headline Section */}
      <section className="bg-white text-center py-16 mt-12">
        <AnimatedHeadline />
        <p className="max-w-xl mx-auto mt-4 text-gray-600 text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
          eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
        </p>
      </section>

      {/* Product Cards Grid */}
      <ProductCards />
    </main>
  );
}

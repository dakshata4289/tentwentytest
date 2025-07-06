'use client';

import HeroSlider from './components/HeroSlider';
import AnimatedHeadline from './components/AnimatedHeadline';
import ProductCards from './components/ProductCards';

export default function Home() {
  return (
    <main>

      <HeroSlider />


      <section className="bg-white text-center py-16 mt-12">
        <AnimatedHeadline />
        <p className="max-w-xl mx-auto mt-4 text-gray-800 text-base leading-relaxed">
          Harvested with Care,Delivered wuth Trust
        </p>
      </section>


      <ProductCards />
    </main>
  );
}

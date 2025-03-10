"use client";

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import AboutUs from '@/components/AboutUs';
import Projects from '@/components/Projects';
import SplashScreen from '@/components/SplashScreen';
import Catalog from '@/components/Catalog';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for splash screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <Products />
      <AboutUs />
      <Projects />
      <Catalog />
    </main>
  );
}
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-sky-50 via-white to-blue-50 pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&q=80"
          alt="Modern interior with beautiful lighting"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block text-gray-800">Illuminate Your World</span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              With Brilliance
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-gray-800 font-medium max-w-2xl mx-auto leading-relaxed mb-12 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
          >
            Experience the future of lighting with our innovative LED solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/products">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-lg font-semibold overflow-hidden transition-transform hover:scale-105 shadow-lg">
                <span className="relative z-10">Explore Products</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full text-lg font-semibold hover:bg-white transition-all border-2 border-purple-200 shadow-lg">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="w-8 h-8 text-gray-800" />
        </motion.div>

        {/* Light Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)`
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
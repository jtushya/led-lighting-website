"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "LED Downlights",
    description: "Energy-efficient recessed lighting solutions for modern interiors",
    image: "https://images.unsplash.com/photo-1622127922040-13cab637ee78?auto=format&fit=crop&q=80",
    specs: ["12W - 24W", "3000K - 6500K", "90° Beam Angle"],
    features: ["Energy Efficient", "Long Lifespan", "Easy Installation"],
  },
  {
    id: 2,
    name: "COB Lights",
    description: "High-performance chip-on-board lighting for precise illumination",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80",
    specs: ["15W - 50W", "CRI > 95", "Adjustable Focus"],
    features: ["High CRI", "Focused Beam", "Heat Dissipation"],
  },
  {
    id: 3,
    name: "Pole Lights",
    description: "Durable outdoor lighting solutions for streets and pathways",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80",
    specs: ["50W - 200W", "IP66 Rated", "5 Year Warranty"],
    features: ["Weather Resistant", "Wide Coverage", "Low Maintenance"],
  },
];

export default function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeProduct, setActiveProduct] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextProduct = () => {
    setActiveProduct((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setActiveProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-blue-50 via-white to-purple-50 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Cutting-edge LED Solutions
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover our range of premium LED lighting products designed for performance and efficiency
          </p>
        </motion.div>

        <div ref={ref} className="relative min-h-[800px] md:min-h-[600px]">
          {/* Navigation Arrows */}
          <button
            onClick={prevProduct}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextProduct}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={`${
                index === activeProduct ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full absolute inset-0"
              } transition-all duration-700 ease-out ${
                index !== activeProduct && "pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent" />
                </div>

                <div className="space-y-8 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold text-gray-800"
                  >
                    {product.name}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-gray-700"
                  >
                    {product.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-gray-800">Specifications</h4>
                      <ul className="space-y-3">
                        {product.specs.map((spec, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-gray-800">Features</h4>
                      <ul className="space-y-3">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Product Navigation */}
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-4">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProduct(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeProduct ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
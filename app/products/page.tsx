"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const categories = [
  {
    id: "indoor",
    title: "Indoor Lighting",
    products: [
      {
        name: "LED Downlights",
        specs: ["12W - 24W", "3000K - 6500K", "90° Beam Angle"],
        image: "https://images.unsplash.com/photo-1565538810643-b5bff3769d13?auto=format&fit=crop&q=80",
      },
      {
        name: "COB Spotlights",
        specs: ["15W - 50W", "CRI > 95", "Adjustable Focus"],
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: "outdoor",
    title: "Outdoor Lighting",
    products: [
      {
        name: "Pole Lights",
        specs: ["50W - 200W", "IP66 Rated", "5 Year Warranty"],
        image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80",
      },
      {
        name: "Flood Lights",
        specs: ["100W - 300W", "IP67 Rated", "120° Beam Angle"],
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80",
      },
    ],
  },
];

export default function ProductsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
        >
          Our Products
        </motion.h1>

        <div className="space-y-32" ref={ref}>
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-12 text-gray-800">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.products.map((product, productIndex) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, x: productIndex % 2 === 0 ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: (categoryIndex + productIndex) * 0.2 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
                  >
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">{product.name}</h3>
                      <ul className="space-y-2">
                        {product.specs.map((spec, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                      <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-colors">
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
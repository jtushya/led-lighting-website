"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Calendar, Users, Building2, Award, CheckCircle } from "lucide-react";

const milestones = [
  { icon: Calendar, text: "Founded in 2004" },
  { icon: Users, text: "500+ Happy Clients" },
  { icon: Building2, text: "State-of-the-art Manufacturing" },
  { icon: Award, text: "ISO 9001 Certified" },
];

const values = [
  {
    title: "Innovation",
    description: "Constantly pushing the boundaries of LED technology",
  },
  {
    title: "Quality",
    description: "Rigorous testing and premium components in every product",
  },
  {
    title: "Sustainability",
    description: "Eco-friendly practices and energy-efficient solutions",
  },
];

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading the way in LED innovation since 2004
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Journey</h2>
            <p className="text-gray-600">
              Since our inception in Chennai, ArcPro LED has been at the forefront of LED lighting innovation. 
              Our commitment to quality and sustainability has made us a trusted name in the industry.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-3"
                >
                  <milestone.icon className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700">{milestone.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80"
              alt="ArcPro LED Manufacturing Facility"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100"
            >
              <CheckCircle className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
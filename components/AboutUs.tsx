"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Calendar, Users, Building2, Award } from "lucide-react";

const milestones = [
  { icon: Calendar, text: "Founded in 2004" },
  { icon: Users, text: "500+ Happy Clients" },
  { icon: Building2, text: "State-of-the-art Manufacturing" },
  { icon: Award, text: "ISO 9001 Certified" },
];

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-gray-600 mb-8">
              Since our inception in 2004 in Chennai, ArcPro LED has been at the forefront of LED lighting innovation. 
              Our commitment to quality and sustainability has made us a trusted name in the industry.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex items-center space-x-3"
                >
                  <milestone.icon className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">{milestone.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?auto=format&fit=crop&q=80"
              alt="ArcPro LED Manufacturing Facility"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
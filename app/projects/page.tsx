"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Corporate Office Complex",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Shopping Mall",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1567529692333-de9fd6772897?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Hotel Chain",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&q=80",
  },
];

export default function ProjectsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our lighting solutions have transformed spaces across India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold mb-1 text-white">{project.title}</h3>
                <p className="text-blue-100">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
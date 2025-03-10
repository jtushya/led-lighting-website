"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download } from "lucide-react";
import { useState } from "react";

export default function Catalog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission and catalog download
    console.log("Download requested for:", email);
    // Implement actual download logic here
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <Download className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Download Our Catalog</h2>
          <p className="text-gray-300 mb-8">
            Get detailed specifications and pricing information for our complete range of LED lighting solutions
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Download Catalog
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
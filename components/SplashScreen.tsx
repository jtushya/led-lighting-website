"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="relative">
        {/* Light rays */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-40 h-1 bg-yellow-400/20 blur-sm origin-left"
            initial={{ opacity: 0, rotate: i * 30, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            style={{
              rotate: `${i * 30}deg`,
            }}
          />
        ))}

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <motion.div
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mb-4"
          >
            <Lightbulb size={64} className="mx-auto text-yellow-400" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-white to-yellow-400"
          >
            ArcPro LED
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}
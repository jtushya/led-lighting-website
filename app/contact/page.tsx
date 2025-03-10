"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our products? We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Email Us</h3>
                <p className="text-gray-600">info@arcproled.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Call Us</h3>
                <p className="text-gray-600">+91 44 1234 5678</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Visit Us</h3>
                <p className="text-gray-600">
                  123 LED Street, Industrial Area<br />
                  Chennai, Tamil Nadu 600001<br />
                  India
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl text-white transition-colors font-semibold shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
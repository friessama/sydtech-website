'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-[#E8F4F8] via-[#D1E7F0]/30 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-[#0077B6]">About </span>
            <span className="text-[#6BBF59]">Sydtech</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#6BBF59] hover:bg-[#5FAE4A] text-white pl-3 pr-6 py-3 rounded-full font-semibold inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="bg-white/20 rounded-full p-2">
              <ArrowRight className="w-4 h-4" />
            </div>
            Contact Us
          </motion.button>
        </motion.div>

        {/* Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Circular Icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-[#0077B6] rounded-full flex items-center justify-center">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Card */}
            <div className="flex-1 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-[#0077B6] mb-3">
                Your Vision. Our Innovation.
              </h3>
              <p className="text-[#0077B6]/70 text-[15px] leading-relaxed">
                At Sydtech, we don&apos;t just build apps and systems – we engineer solutions that power your business to scale, thrive, and dominate.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decorative dots pattern */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-30">
          <div className="max-w-7xl mx-auto h-full">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#6BBF59" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

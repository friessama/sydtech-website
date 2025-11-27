'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-20">
      {/* Decorative Background Shapes */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#6BBF59]/15 to-[#00A896]/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']) }}
        className="absolute top-32 right-20 w-[350px] h-[350px] bg-gradient-to-br from-[#0077B6]/10 to-transparent rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#6BBF59] font-semibold text-[16px] mb-5"
            >
              Welcome to Sydtech
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-[56px] font-bold mb-6 leading-[1.15]"
            >
              <span className="text-[#0077B6]">Empowering Growth<br />Through </span>
              <span className="text-[#6BBF59]">
                Innovation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[#0077B6] text-[17px] mb-10 leading-relaxed max-w-xl"
            >
              Transforming Ideas Into Scalable Powerful Solutions That Drive Exponential Business Growth.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#6BBF59] hover:bg-[#5FAE4A] text-white pl-3 pr-6 py-3 rounded-full font-semibold inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all text-[15px]"
            >
              <div className="bg-white/20 rounded-full p-2">
                <ArrowRight className="w-4 h-4" />
              </div>
              Request Demo
            </motion.button>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '15%']) }}
            className="relative z-10 lg:pr-0"
          >
            <div className="relative lg:mr-[-100px]" style={{ perspective: '1500px' }}>
              {/* Phone Mockup Container with 3D tilt - matching reference */}
              <div
                className="relative w-full max-w-[480px] mx-auto lg:ml-auto"
                style={{
                  transform: 'rotateY(-15deg) rotateX(5deg) rotateZ(1deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Phone Mockup with border and enhanced shadow */}
                <div className="relative bg-black rounded-[3.5rem] p-[3px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_30px_60px_-30px_rgba(0,0,0,0.35),0_-10px_40px_-10px_rgba(0,0,0,0.2)]">
                  {/* Inner phone screen */}
                  <div className="bg-white rounded-[3.3rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                    {/* Status bar notch */}
                    <div className="h-9 bg-black rounded-b-3xl mx-auto w-40"></div>
                    {/* Screen content */}
                    <div className="h-full bg-white flex items-center justify-center p-8">
                      <div className="text-center w-full">
                        {/* Logo - Fixed size to prevent pixelation */}
                        <div className="mx-auto flex items-center justify-center">
                          <Image
                            src="/images/logo.png"
                            alt="Sydtech"
                            width={200}
                            height={50}
                            className="w-auto h-auto object-contain"
                            priority
                            quality={100}
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

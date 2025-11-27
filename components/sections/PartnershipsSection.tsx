'use client';

import { motion } from 'framer-motion';

const mainPartners = [
  { name: 'CAMPEDIA', width: 160 },
  { name: 'AAV', width: 120 },
  { name: 'KEDACOM', width: 160 },
  { name: 'CARPEDIA', width: 160 },
];

const dataPartners = [
  { name: 'ravio', width: 100 },
  { name: 'European Women in VC', width: 180 },
  { name: 'dealroom.co', width: 140 },
  { name: 'S&P Global Market Intelligence', width: 200 },
  { name: 'INVEST EUROPE', width: 150 },
  { name: 'PitchBook', width: 120 },
  { name: 'crunchbase', width: 140 },
];

function LogoScroll({ logos, direction = 'left' }: { logos: typeof mainPartners; direction?: 'left' | 'right' }) {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        className="flex gap-12 items-center"
        animate={{
          x: direction === 'left' ? ['0%', '-33.333%'] : ['-33.333%', '0%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
            style={{ minWidth: logo.width }}
          >
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <span className="text-white font-semibold text-lg whitespace-nowrap">{logo.name}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function PartnershipsSection() {
  return (
    <section className="py-0">
      {/* Main Partnerships */}
      <div className="bg-[#0077B6] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-white/80 text-sm font-medium mb-2">Partnerships</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">& Collaborations</h2>
          </motion.div>
          <LogoScroll logos={mainPartners} direction="left" />
        </div>
      </div>

      {/* Data Partners */}
      <div className="bg-[#00394F] py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-white/60 text-sm font-medium mb-1">Data</p>
            <h3 className="text-2xl lg:text-3xl font-bold text-white">Partners</h3>
          </motion.div>
          <div className="relative overflow-hidden py-6">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...dataPartners, ...dataPartners].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ minWidth: logo.width }}
                >
                  <span className="text-white/80 font-medium text-sm whitespace-nowrap">{logo.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

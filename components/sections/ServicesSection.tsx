'use client';

import { ArrowRight, Smartphone, Settings, MessageSquare, BarChart3, Link2, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Turn your ideas into reality with our expert mobile app development services, guiding you from concept to launch with user-friendly, scalable solutions tailored to your business goals.',
  },
  {
    icon: Settings,
    title: 'System Development',
    description: 'Optimize operations and boost productivity with our customized system development solutions. We analyze your processes to design scalable, robust systems that streamline workflows & enhance efficiency.',
  },
  {
    icon: MessageSquare,
    title: 'Tech Consultation',
    description: 'Optimize operations and boost productivity with our customized system development solutions. We analyze your processes to design scalable, robust systems that streamline workflows & enhance efficiency.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights that drive informed decision-making and strategic growth for your business.',
  },
  {
    icon: Link2,
    title: 'Pulse Link App',
    description: 'Connect your business operations seamlessly with our integrated Pulse Link application platform.',
  },
  {
    icon: Database,
    title: 'ERP for SMEs',
    description: 'Comprehensive Enterprise Resource Planning solutions designed specifically for small and medium enterprises.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[#0077B6]">Feature Products</span>
            <br />
            <span className="text-[#6BBF59]">& Services</span>
          </h2>
          <div className="inline-flex items-center gap-1 bg-white border border-gray-200 rounded-full p-1 shadow-sm">
            <button className="px-6 py-2.5 rounded-full bg-[#0077B6] text-white font-medium text-[14px] transition-colors">
              Services
            </button>
            <button className="px-6 py-2.5 rounded-full text-[#0077B6] font-medium text-[14px] hover:bg-gray-50 transition-colors">
              Products
            </button>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-3xl overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Image placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-[#E8F4F8] to-[#D1E7F0] flex items-center justify-center overflow-hidden">
                    <Icon className="w-20 h-20 text-[#0077B6]/20" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#0077B6] mb-3">{service.title}</h3>
                    <p className="text-[#0077B6]/70 text-[14px] mb-4 leading-relaxed line-clamp-3">{service.description}</p>
                    <button className="w-10 h-10 bg-[#6BBF59] hover:bg-[#5FAE4A] rounded-full flex items-center justify-center transition-all group shadow-md hover:shadow-lg">
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    step: '01',
    title: 'Understanding Your Business',
    description: 'Our first step is to understand your vision to align our strategies with your demands and achieve the desired results.',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Strategic Planning',
    description: 'We develop a comprehensive roadmap tailored to your specific needs, outlining clear milestones and deliverables.',
  },
  {
    icon: Code,
    step: '03',
    title: 'Development & Implementation',
    description: 'Our expert team brings the plan to life, building robust solutions with cutting-edge technology and best practices.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Testing & Launch',
    description: 'Rigorous testing ensures quality and performance before we launch your solution with full support.',
  },
  {
    icon: CheckCircle,
    step: '05',
    title: 'Ongoing Support',
    description: 'We provide continuous support and optimization to ensure your solution continues to deliver exceptional results.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#F26419] font-semibold text-lg mb-2">Our Simple Process</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003049] mb-4">
            Our Transparent and Reliable Process
          </h2>
          <p className="text-[#003049]/70 text-lg max-w-3xl mx-auto">
            We take a clear, structured approach to bring your ideas to life. From understanding your goals to delivering results,
            our process ensures every step is focused on your success.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#F26419] to-[#FF8C42] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#0077B6] to-[#00A896] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#003049] mb-3">{step.title}</h3>
                <p className="text-[#003049]/70 leading-relaxed">{step.description}</p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent hover:border-[#F26419] rounded-2xl transition-colors pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import { ArrowRight, Smartphone, Settings, MessageSquare, BarChart3, Link2, Database, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

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

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                  >
                    <motion.div
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
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white hover:bg-[#0077B6] text-[#0077B6] hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all z-10 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white hover:bg-[#0077B6] text-[#0077B6] hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all z-10 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? 'w-8 bg-[#0077B6]'
                  : 'w-2 bg-[#0077B6]/30 hover:bg-[#0077B6]/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

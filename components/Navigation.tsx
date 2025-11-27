'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="block">
              <Image
                src="/images/logo.png"
                alt="Sydtech Digital Industries"
                width={180}
                height={45}
                className="h-10 w-auto object-contain"
                priority
                quality={100}
                unoptimized
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#about"
              className="px-6 py-2.5 rounded-full bg-[#6BBF59] text-white font-medium text-[15px] hover:bg-[#5FAE4A] transition-all shadow-sm"
            >
              About Us
            </a>
            <a
              href="#services"
              className="px-6 py-2.5 text-[#0077B6] font-medium text-[15px] hover:text-[#00A896] transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 text-[#0077B6] font-medium text-[15px] hover:text-[#00A896] transition-colors"
            >
              Contact Us
            </a>
            <button className="flex items-center gap-1 px-4 py-2.5 text-[#0077B6] font-medium text-[15px] hover:text-[#00A896] transition-colors">
              EN
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-[#0077B6] p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

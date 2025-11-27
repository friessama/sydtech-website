'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Facebook, Instagram, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#00394F] text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="mb-8">
              <Image
                src="/images/logo.png"
                alt="Sydtech Digital Industries"
                width={180}
                height={45}
                className="h-10 w-auto brightness-0 invert object-contain"
                quality={100}
                unoptimized
              />
            </div>
            <button className="bg-[#6BBF59] hover:bg-[#5FAE4A] text-white pl-3 pr-6 py-3 rounded-full font-semibold inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-white/20 rounded-full p-2">
                <ArrowUp className="w-4 h-4 -rotate-45" />
              </div>
              Get In Touch
            </button>
          </div>

          {/* Column 2 - Address Us */}
          <div>
            <h3 className="text-xl font-bold mb-6">Address Us</h3>
            <ul className="space-y-4 text-white/80 text-[15px]">
              <li>
                <p className="font-medium mb-1">Address</p>
                <p className="text-sm leading-relaxed">
                  Unit 3.07, Level 3, KL Gateway Mall,<br />
                  No. 2, Jalan Kerinchi,<br />
                  59200 Kuala Lumpur
                </p>
              </li>
              <li>
                <p className="font-medium mb-1">Phone Number</p>
                <p className="text-sm">+603 2779 1114</p>
              </li>
              <li>
                <p className="font-medium mb-1">Support email</p>
                <p className="text-sm">ask@sydtechindustries.io</p>
              </li>
            </ul>
          </div>

          {/* Column 3 - Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-[#6BBF59] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-[#6BBF59] rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-[#6BBF59] rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter/X"
              >
                <X className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>Copyright © 2025 Sydtech Digital Industries Sdn Bhd. All rights reserved.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#6BBF59] hover:bg-[#5FAE4A] text-white rounded-full flex items-center justify-center shadow-2xl transition-all z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}

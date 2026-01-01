'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface ReferenceLogo {
  id: string;
  name: string;
  logo: string;
  alt: string;
}

const referenceLogos: ReferenceLogo[] = [
  {
    id: '1',
    name: 'TOKI',
    logo: '/images/toki.png',
    alt: 'TOKI Logo',
  },
  {
    id: '2',
    name: 'Aile ve Sosyal Hizmetler Bakanlığı',
    logo: '/images/sosyalhizmetleri.png',
    alt: 'Aile ve Sosyal Hizmetler Bakanlığı Logo',
  },
  {
    id: '3',
    name: 'Ticaret Bakanlığı',
    logo: '/images/ticaretbakanl.png',
    alt: 'Ticaret Bakanlığı Logo',
  },
  {
    id: '4',
    name: 'Milli Eğitim Bakanlığı',
    logo: '/images/egitimbakan.png',
    alt: 'Milli Eğitim Bakanlığı Logo',
  },
  {
    id: '5',
    name: 'Sağlık Bakanlığı',
    logo: '/images/saglık.png',
    alt: 'Sağlık Bakanlığı Logo',
  },
  {
    id: '6',
    name: 'Adalet Bakanlığı',
    logo: '/images/adaletbakanl.png',
    alt: 'Adalet Bakanlığı Logo',
  },
  {
    id: '7',
    name: 'Referans 7',
    logo: '/images/enessiteresim2.jpeg',
    alt: 'Referans 7 Logo',
  },
  {
    id: '8',
    name: 'Referans 8',
    logo: '/images/logo.png',
    alt: 'Referans 8 Logo',
  },
  {
    id: '9',
    name: 'Referans 9',
    logo: '/images/projects/project-1.jpg',
    alt: 'Referans 9 Logo',
  },
  {
    id: '10',
    name: 'Referans 10',
    logo: '/images/projects/project-1.jpg',
    alt: 'Referans 10 Logo',
  },
];

const VISIBLE_COUNT = 6;

export default function ReferencesSection() {
  const t = useTranslations('references');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % referenceLogos.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // Gösterilecek logoları hesapla
  const getVisibleLogos = () => {
    const visibleLogos = [];
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      const logoIndex = (currentIndex + i) % referenceLogos.length;
      visibleLogos.push(referenceLogos[logoIndex]);
    }
    return visibleLogos;
  };

  const visibleLogos = getVisibleLogos();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Carousel Container - Horizontal Row */}
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-7xl">
              {/* Horizontal Logo Row - Tek satır, sağdan sola kayma */}
              <div className="flex items-center justify-center gap-3 md:gap-6 lg:gap-8 overflow-hidden">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="flex items-center gap-3 md:gap-6 lg:gap-8"
                >
                  {visibleLogos.map((logo) => (
                    <div
                      key={`${logo.id}-${currentIndex}`}
                      className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56"
                    >
                      <div className="relative w-full aspect-[4/3] bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 md:p-6 flex items-center justify-center hover:grayscale border border-gray-100">
                        <Image
                          src={logo.logo}
                          alt={logo.alt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {referenceLogos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-primary'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
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
];

export default function ReferencesSection() {
  const t = useTranslations('references');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate logos for seamless infinite loop (2 sets for smooth looping)
  const duplicatedLogos = [...referenceLogos, ...referenceLogos];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // pixels per frame
    
    // Calculate one set width (6 logos + 5 gaps)
    const logoWidth = 224; // lg:w-56 = 224px
    const gap = 32; // lg:gap-8 = 32px
    const oneSetWidth = logoWidth * 6 + gap * 5;

    const animate = () => {
      position -= speed;
      
      // Reset when we've scrolled one set width
      if (Math.abs(position) >= oneSetWidth) {
        position = 0;
      }
      
      scrollContainer.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

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

        {/* Carousel Container - Infinite Scroll */}
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-7xl overflow-hidden">
              {/* Horizontal Logo Row - Seamless infinite scroll */}
              <div 
                ref={scrollRef}
                className="flex items-center gap-3 md:gap-6 lg:gap-8"
                style={{ width: 'fit-content', willChange: 'transform' }}
              >
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={`${logo.id}-${index}`}
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
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import HeroSlider from '@/components/HeroSlider';
import { featuredProjects } from '@/data/projects';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="relative">
      {/* Full Screen Hero Slider */}
      <HeroSlider projects={featuredProjects} />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{item}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">
                  Feature {item}
                </h3>
                <p className="text-gray-600">
                  Professional service description placeholder
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


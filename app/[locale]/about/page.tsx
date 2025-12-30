'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
  const isTr = locale === 'tr';

  return {
    title: isTr ? 'Hakkımızda' : 'About Us',
    description: isTr
      ? 'Elektrik-elektronik sektöründe uzman ekibimizle hizmet veriyoruz.'
      : 'We serve with our expert team in the electrical-electronics sector.',
}

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            {t('title')}
          </motion.h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            {t('description')}
          </motion.p>
        </div>
      </section>
    </div>
  );
}


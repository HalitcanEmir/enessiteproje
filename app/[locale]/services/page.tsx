'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const t = useTranslations('services');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Navbar yüksekliği
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      id: 'electrical',
      title: t('electrical.title'),
      description: t('electrical.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
    },
    {
      id: 'electronic',
      title: t('electronic.title'),
      description: t('electronic.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50',
    },
    {
      id: 'smartBuilding',
      title: t('smartBuilding.title'),
      description: t('smartBuilding.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: 'from-green-500 to-teal-500',
      bgColor: 'from-green-50 to-teal-50',
    },
    {
      id: 'weakCurrent',
      title: t('weakCurrent.title'),
      description: t('weakCurrent.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
    },
    {
      id: 'maintenance',
      title: t('maintenance.title'),
      description: t('maintenance.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradient: 'from-red-500 to-rose-500',
      bgColor: 'from-red-50 to-rose-50',
    },
    {
      id: 'projectManagement',
      title: t('projectManagement.title'),
      description: t('projectManagement.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      gradient: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-50 to-blue-50',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Hero Image */}
      <section className="relative w-full h-[50vh] min-h-[400px] max-h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Gemini_Generated_Image_bd6k1lbd6k1lbd6k.png"
            alt="Electrical Control Room"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
            >
              {t('title')}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-1 bg-blue-500 mx-auto mb-5"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl mx-auto"
            >
              {t('subtitle')}
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Sentinel for Intersection Observer */}
      <div id="navbar-sentinel" className="absolute left-0 w-full h-1 pointer-events-none" style={{ top: '50vh' }} />

      {/* Service Cards Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToSection(service.id)}
                className="group relative bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`mb-5 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* CTA Arrow */}
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                    <span className="uppercase tracking-wide">{locale === 'tr' ? 'Detaylar' : 'Details'}</span>
                    <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 lg:p-12">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8 pb-6 border-b border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                        <div className="text-white">
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 whitespace-nowrap"
                    >
                      {tNav('getQuote')}
                    </Link>
                  </div>
                  
                  {/* Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {(t.raw(`${service.id}.items`) as string[]).map((item: string, itemIndex: number) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                        className="flex items-start gap-3 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 group"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200`}>
                            <svg className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="text-base md:text-lg text-gray-700 leading-relaxed">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {locale === 'tr' ? 'Projeniz İçin Teklif Alın' : 'Get a Quote for Your Project'}
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              {locale === 'tr' 
                ? 'Uzman ekibimiz projeniz için en uygun çözümleri sunmaya hazır. Hemen iletişime geçin.' 
                : 'Our expert team is ready to provide the most suitable solutions for your project. Contact us now.'}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 hover:bg-gray-50 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 text-lg"
            >
              {tNav('getQuote')}
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

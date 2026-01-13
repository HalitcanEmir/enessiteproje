'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ConsultancyPage() {
  const t = useTranslations('services.consultancy');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] max-h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Gemini_Generated_Image_bd6k1lbd6k1lbd6k.png"
            alt="Consultancy Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-5xl">✓</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  {t('title')}
                </h1>
              </div>
              <div className="w-20 h-1 bg-green-500 mx-auto mb-5" />
              <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl mx-auto">
                {t('description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sentinel for navbar */}
      <div id="navbar-sentinel" className="absolute left-0 w-full h-1 pointer-events-none" style={{ top: '50vh' }} />

      {/* Services Detail Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 pb-6 border-b border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center shadow-lg">
                      <span className="text-3xl">✓</span>
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        {t('title')}
                      </h2>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        {t('description')}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 whitespace-nowrap"
                  >
                    {tNav('getQuote')}
                  </Link>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(t.raw('items') as string[]).map((item: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-start gap-4 p-5 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-600 opacity-20 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                          <svg className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {locale === 'tr' ? 'Güvenilir Denetim' : 'Reliable Inspection'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {locale === 'tr' ? 'Titiz kontrol süreçleri' : 'Meticulous control processes'}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {locale === 'tr' ? 'Mevzuat Uyumu' : 'Regulatory Compliance'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {locale === 'tr' ? 'Tüm standartlara uygun' : 'Compliant with all standards'}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {locale === 'tr' ? 'Uzman Kadro' : 'Expert Staff'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {locale === 'tr' ? 'Deneyimli danışmanlar' : 'Experienced consultants'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Services Button */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-lg transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            {locale === 'tr' ? 'Tüm Hizmetlere Dön' : 'Back to All Services'}
          </Link>
        </div>
      </section>
    </div>
  );
}

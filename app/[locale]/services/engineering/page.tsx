'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function EngineeringPage() {
  const t = useTranslations('services.engineering');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Compact */}
      <section className="relative w-full h-[40vh] min-h-[350px] max-h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Gemini_Generated_Image_bd6k1lbd6k1lbd6k.png"
            alt="Engineering Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-indigo-900/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-5xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-6"
            >
              <div className="hidden md:block w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex-shrink-0 flex items-center justify-center border border-white/20">
                <span className="text-5xl">⚙️</span>
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                  {t('title')}
                </h1>
                <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
                  {t('description')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sentinel */}
      <div id="navbar-sentinel" className="absolute left-0 w-full h-1 pointer-events-none" style={{ top: '40vh' }} />

      {/* Main Content - Compact & Professional */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Services Grid - 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Left Column - Services */}
            <div className="lg:col-span-2 space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-6"
              >
                {locale === 'tr' ? 'Sunduğumuz Hizmetler' : 'Our Services'}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(t.raw('items') as string[]).map((item: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium leading-relaxed">{item}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Process Timeline - Horizontal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {locale === 'tr' ? 'Çalışma Sürecimiz' : 'Our Work Process'}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { num: '1', title: locale === 'tr' ? 'Analiz' : 'Analysis', icon: '📋' },
                    { num: '2', title: locale === 'tr' ? 'Tasarım' : 'Design', icon: '✏️' },
                    { num: '3', title: locale === 'tr' ? 'Proje' : 'Project', icon: '📐' },
                    { num: '4', title: locale === 'tr' ? 'Uygulama' : 'Implementation', icon: '✓' },
                  ].map((step, idx) => (
                    <div key={idx} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-2 text-white font-bold shadow-md">
                        {step.num}
                      </div>
                      <div className="text-2xl mb-1">{step.icon}</div>
                      <p className="text-sm font-semibold text-gray-700">{step.title}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Info Cards */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-6 lg:hidden"
              >
                {locale === 'tr' ? 'Proje Çıktıları' : 'Deliverables'}
              </motion.h2>

              {/* Deliverables Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {locale === 'tr' ? 'Proje Çıktıları' : 'Deliverables'}
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    { name: locale === 'tr' ? 'Teknik Çizimler' : 'Technical Drawings', format: 'DWG' },
                    { name: locale === 'tr' ? 'Hesap Raporları' : 'Calculation Reports', format: 'PDF' },
                    { name: locale === 'tr' ? 'Malzeme Listesi' : 'Material Lists', format: 'Excel' },
                    { name: locale === 'tr' ? 'Teknik Şartname' : 'Specifications', format: 'Word' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                        {item.format}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Standards */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                    {locale === 'tr' ? 'Standartlar' : 'Standards'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['TS EN', 'IEC', 'IEEE', 'TSE'].map((std, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-200">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/${locale}/contact`}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {locale === 'tr' ? 'Teklif Al' : 'Get Quote'}
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center pt-8 border-t border-gray-200">
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7" />
              </svg>
              {locale === 'tr' ? 'Tüm Hizmetlere Dön' : 'Back to All Services'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

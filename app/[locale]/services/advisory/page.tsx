'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AdvisoryPage() {
  const t = useTranslations('services.advisory');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[45vh] min-h-[400px] max-h-[500px] overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/Gemini_Generated_Image_bd6k1lbd6k1lbd6k.png"
            alt="Advisory Services"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                {t('title')}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                {t('description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sentinel */}
      <div id="navbar-sentinel" className="absolute left-0 w-full h-1 pointer-events-none" style={{ top: '45vh' }} />

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              
              {/* Services List */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                  {locale === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
                </h2>
                
                <div className="space-y-4">
                  {(t.raw('items') as string[]).map((item: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                        <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                  {locale === 'tr' ? 'Danışmanlık Süreci' : 'Advisory Process'}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { num: '01', title: locale === 'tr' ? 'Durum Analizi' : 'Situation Analysis' },
                    { num: '02', title: locale === 'tr' ? 'Çözüm Geliştirme' : 'Solution Development' },
                    { num: '03', title: locale === 'tr' ? 'Strateji Planlama' : 'Strategy Planning' },
                    { num: '04', title: locale === 'tr' ? 'Uygulama Desteği' : 'Implementation Support' },
                  ].map((step, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl font-bold text-gray-300 mb-2">{step.num}</div>
                      <p className="text-sm font-medium text-gray-700">{step.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                  {locale === 'tr' ? 'Danışmanlık Çıktıları' : 'Advisory Outputs'}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: locale === 'tr' ? 'Fizibilite Raporları' : 'Feasibility Reports', desc: 'PDF Format' },
                    { title: locale === 'tr' ? 'Maliyet Analizleri' : 'Cost Analysis', desc: 'Excel Format' },
                    { title: locale === 'tr' ? 'Strateji Belgeleri' : 'Strategy Documents', desc: 'Word/PDF' },
                    { title: locale === 'tr' ? 'Uygulama Planları' : 'Implementation Plans', desc: 'PDF/Excel' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-6">
                
                {/* Contact Card */}
                <div className="bg-gray-900 text-white rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-4">
                    {locale === 'tr' ? 'Teklif Alın' : 'Request a Quote'}
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {locale === 'tr' 
                      ? 'Projeniz için detaylı bilgi ve teklif almak üzere bizimle iletişime geçin.'
                      : 'Contact us for detailed information and a quote for your project.'}
                  </p>
                  <Link
                    href={`/${locale}/contact`}
                    className="block w-full text-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    {locale === 'tr' ? 'İletişime Geçin' : 'Contact Us'}
                  </Link>
                </div>

                {/* Standards */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    {locale === 'tr' ? 'Uzmanlık Alanlarımız' : 'Our Expertise'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      locale === 'tr' ? 'Enerji' : 'Energy',
                      locale === 'tr' ? 'Verimlilik' : 'Efficiency',
                      locale === 'tr' ? 'Maliyet' : 'Cost',
                      locale === 'tr' ? 'Sistem' : 'System'
                    ].map((std, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    {locale === 'tr' ? 'Neden Bizi Seçmelisiniz?' : 'Why Choose Us?'}
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">•</span>
                      <span>{locale === 'tr' ? 'Uzman danışman kadrosu' : 'Expert consultant team'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">•</span>
                      <span>{locale === 'tr' ? 'Veri odaklı analizler' : 'Data-driven analysis'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">•</span>
                      <span>{locale === 'tr' ? 'Uygulanabilir çözümler' : 'Practical solutions'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7" />
              </svg>
              {locale === 'tr' ? 'Tüm Hizmetlere Dön' : 'Back to Services'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

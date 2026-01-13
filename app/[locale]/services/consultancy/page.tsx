'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function ConsultancyPage() {
  const t = useTranslations('services.consultancy');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const servicesDetails = [
    {
      title: locale === 'tr' ? 'Proje Denetim ve Kontrol Hizmetleri' : 'Project Supervision and Control Services',
      description: locale === 'tr' 
        ? 'Elektrik ve elektronik sistemlerin uygulama sürecinde proje uygunluğunun kontrolü, montaj denetimi ve işletmeye alma testleri yapılır. Sahada düzenli takip ve raporlama sağlanır.'
        : 'Project compliance control, installation supervision and commissioning tests are performed during the application process of electrical and electronic systems. Regular monitoring and reporting are provided on site.'
    },
    {
      title: locale === 'tr' ? 'Mevzuat Uyumluluk Danışmanlığı' : 'Regulatory Compliance Consultancy',
      description: locale === 'tr'
        ? 'Elektrik tesisatı yönetmeliği, iş sağlığı ve güvenliği mevzuatı, yangın güvenliği standartları gibi konularda uyumluluk çalışmaları yürütülür. Eksiklikler tespit edilir ve çözüm önerileri sunulur.'
        : 'Compliance work is carried out on issues such as electrical installation regulations, occupational health and safety legislation, and fire safety standards. Deficiencies are identified and solutions are offered.'
    },
    {
      title: locale === 'tr' ? 'Teknik Süreç Yönetimi' : 'Technical Process Management',
      description: locale === 'tr'
        ? 'Projeden uygulamaya kadar tüm teknik süreçlerin yönetimi, koordinasyonu ve takibi sağlanır. Müteahhitler, tedarikçiler ve diğer paydaşlarla koordinasyon kurulur.'
        : 'Management, coordination and monitoring of all technical processes from project to implementation are provided. Coordination with contractors, suppliers and other stakeholders is established.'
    },
    {
      title: locale === 'tr' ? 'Kalite Güvence ve Test Hizmetleri' : 'Quality Assurance and Testing Services',
      description: locale === 'tr'
        ? 'Tamamlanan sistemlerin fonksiyon testleri, performans ölçümleri ve standartlara uygunluk testleri gerçekleştirilir. Test raporları ve protokoller düzenlenir.'
        : 'Function tests, performance measurements and compliance tests of completed systems are carried out. Test reports and protocols are prepared.'
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[45vh] min-h-[400px] max-h-[500px] overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/consultancy-hero.jpg"
            alt="Consultancy Services"
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
              
              {/* Services List - Expandable */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                  {locale === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
                </h2>
                
                <div className="space-y-3">
                  {servicesDetails.map((service, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleExpand(index)}
                        className="w-full flex items-center justify-between gap-4 p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <svg 
                            className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${expandedIndex === index ? 'rotate-90' : ''}`}
                            fill="none" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-gray-900 font-medium">{service.title}</span>
                        </div>
                        <svg 
                          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${expandedIndex === index ? 'rotate-180' : ''}`}
                          fill="none" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 bg-white border-t border-gray-200">
                              <p className="text-gray-700 leading-relaxed">{service.description}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                  {locale === 'tr' ? 'Çalışma Sürecimiz' : 'Our Work Process'}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { num: '01', title: locale === 'tr' ? 'Ön İnceleme' : 'Preliminary Review' },
                    { num: '02', title: locale === 'tr' ? 'Saha Denetimi' : 'Field Supervision' },
                    { num: '03', title: locale === 'tr' ? 'Raporlama' : 'Reporting' },
                    { num: '04', title: locale === 'tr' ? 'Takip' : 'Follow-up' },
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
                  {locale === 'tr' ? 'Raporlarımız' : 'Our Reports'}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: locale === 'tr' ? 'Denetim Raporları' : 'Supervision Reports', desc: 'PDF Format' },
                    { title: locale === 'tr' ? 'Uygunsuzluk Listesi' : 'Non-conformity List', desc: 'Excel Format' },
                    { title: locale === 'tr' ? 'Kontrol Listeleri' : 'Checklists', desc: 'PDF/Excel' },
                    { title: locale === 'tr' ? 'Aksiyon Planları' : 'Action Plans', desc: 'Word/PDF' },
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
                      ? 'Projeniz için denetim ve danışmanlık hizmeti almak üzere iletişime geçin.'
                      : 'Contact us for supervision and consultancy services for your project.'}
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
                    {locale === 'tr' ? 'Uyduğumuz Standartlar' : 'Our Standards'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['ISO 9001', 'ISO 14001', 'TSE', 'OHSAS'].map((std, idx) => (
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
                      <span>{locale === 'tr' ? 'Deneyimli denetim ekibi' : 'Experienced supervision team'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">•</span>
                      <span>{locale === 'tr' ? 'Detaylı raporlama' : 'Detailed reporting'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">•</span>
                      <span>{locale === 'tr' ? 'Sürekli takip' : 'Continuous monitoring'}</span>
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

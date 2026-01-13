'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function EngineeringPage() {
  const t = useTranslations('services.engineering');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const workflowSteps = [
    {
      step: '1',
      title: locale === 'tr' ? 'İhtiyaç Analizi' : 'Needs Analysis',
      description: locale === 'tr' ? 'Projenin teknik gereksinimleri ve beklentileri belirlenir.' : 'Technical requirements and expectations of the project are determined.',
      icon: '📋',
    },
    {
      step: '2',
      title: locale === 'tr' ? 'Ön Tasarım' : 'Preliminary Design',
      description: locale === 'tr' ? 'Kavramsal tasarım ve fizibilite çalışmaları yapılır.' : 'Conceptual design and feasibility studies are conducted.',
      icon: '✏️',
    },
    {
      step: '3',
      title: locale === 'tr' ? 'Detay Proje' : 'Detailed Design',
      description: locale === 'tr' ? 'Teknik çizimler, hesaplar ve spesifikasyonlar hazırlanır.' : 'Technical drawings, calculations and specifications are prepared.',
      icon: '📐',
    },
    {
      step: '4',
      title: locale === 'tr' ? 'Onay ve Uygulama' : 'Approval & Implementation',
      description: locale === 'tr' ? 'Projenin onaylanması ve sahada uygulanması.' : 'Project approval and field implementation.',
      icon: '✓',
    },
  ];

  const services = [
    {
      title: locale === 'tr' ? 'Elektrik-Elektronik Proje Tasarımı' : 'Electrical-Electronic Project Design',
      details: [
        locale === 'tr' ? 'Tek hat şemaları' : 'Single line diagrams',
        locale === 'tr' ? 'Aydınlatma projeleri' : 'Lighting projects',
        locale === 'tr' ? 'Güç dağıtım planları' : 'Power distribution plans',
        locale === 'tr' ? 'Pano montaj şemaları' : 'Panel mounting diagrams',
      ],
      icon: '⚡',
      color: 'blue',
    },
    {
      title: locale === 'tr' ? 'AG/OG Enerji Dağıtım Sistemleri' : 'LV/MV Energy Distribution Systems',
      details: [
        locale === 'tr' ? 'Trafo merkezi tasarımı' : 'Transformer substation design',
        locale === 'tr' ? 'Kablo hesaplamaları' : 'Cable calculations',
        locale === 'tr' ? 'Kompanzasyon sistemleri' : 'Compensation systems',
        locale === 'tr' ? 'Topraklama sistemleri' : 'Grounding systems',
      ],
      icon: '🔌',
      color: 'indigo',
    },
    {
      title: locale === 'tr' ? 'Zayıf Akım Sistemleri' : 'Weak Current Systems',
      details: [
        locale === 'tr' ? 'Yangın algılama sistemleri' : 'Fire detection systems',
        locale === 'tr' ? 'Güvenlik kamera altyapısı' : 'Security camera infrastructure',
        locale === 'tr' ? 'Network kablolama' : 'Network cabling',
        locale === 'tr' ? 'Ses ve anons sistemleri' : 'Audio and PA systems',
      ],
      icon: '📡',
      color: 'cyan',
    },
    {
      title: locale === 'tr' ? 'Aydınlatma ve Enerji Verimliliği' : 'Lighting and Energy Efficiency',
      details: [
        locale === 'tr' ? 'Aydınlatma hesapları (DIALux)' : 'Lighting calculations (DIALux)',
        locale === 'tr' ? 'LED dönüşüm projeleri' : 'LED conversion projects',
        locale === 'tr' ? 'Enerji analizi raporları' : 'Energy analysis reports',
        locale === 'tr' ? 'Tasarruf önerileri' : 'Savings recommendations',
      ],
      icon: '💡',
      color: 'yellow',
    },
  ];

  const deliverables = [
    { name: locale === 'tr' ? 'Teknik Çizimler (DWG)' : 'Technical Drawings (DWG)', format: 'AutoCAD', quantity: locale === 'tr' ? 'Tüm katlar' : 'All floors' },
    { name: locale === 'tr' ? 'Hesap Raporları' : 'Calculation Reports', format: 'PDF', quantity: locale === 'tr' ? 'Detaylı' : 'Detailed' },
    { name: locale === 'tr' ? 'Malzeme Listeleri' : 'Material Lists', format: 'Excel', quantity: locale === 'tr' ? 'Kapsamlı' : 'Comprehensive' },
    { name: locale === 'tr' ? 'Teknik Şartnameler' : 'Technical Specifications', format: 'Word/PDF', quantity: locale === 'tr' ? 'Tam' : 'Complete' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] max-h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Gemini_Generated_Image_bd6k1lbd6k1lbd6k.png"
            alt="Engineering Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-5xl">⚙️</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  {t('title')}
                </h1>
              </div>
              <div className="w-20 h-1 bg-blue-500 mx-auto mb-5" />
              <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl mx-auto">
                {t('description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sentinel for navbar */}
      <div id="navbar-sentinel" className="absolute left-0 w-full h-1 pointer-events-none" style={{ top: '50vh' }} />

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {locale === 'tr' ? 'Mühendislik Hizmetleri Nedir?' : 'What are Engineering Services?'}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {locale === 'tr'
                  ? 'Elektrik ve elektronik mühendislik hizmetlerimiz, projenizin her aşamasında profesyonel destek sağlar. Tasarımdan uygulamaya, hesaplamalardan onaylara kadar tüm teknik süreçleri yönetiyoruz.'
                  : 'Our electrical and electronic engineering services provide professional support at every stage of your project. We manage all technical processes from design to implementation, calculations to approvals.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {locale === 'tr' ? 'Çalışma Süreci' : 'Work Process'}
            </h2>
            <p className="text-lg text-gray-600">
              {locale === 'tr' ? 'Projeniz 4 aşamada tamamlanır' : 'Your project is completed in 4 stages'}
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                      {step.step}
                    </div>
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transform -translate-y-1/2" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {locale === 'tr' ? 'Hizmet Detayları' : 'Service Details'}
            </h2>
            <p className="text-lg text-gray-600">
              {locale === 'tr' ? 'Sunduğumuz mühendislik hizmetleri ve kapsamları' : 'Engineering services we offer and their scope'}
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Table */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {locale === 'tr' ? 'Proje Çıktıları' : 'Project Deliverables'}
            </h2>
            <p className="text-lg text-gray-600">
              {locale === 'tr' ? 'Projeniz sonunda alacağınız dokümanlar' : 'Documents you will receive at the end of your project'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        {locale === 'tr' ? 'Doküman Tipi' : 'Document Type'}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        {locale === 'tr' ? 'Format' : 'Format'}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        {locale === 'tr' ? 'Kapsam' : 'Scope'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {deliverables.map((item, index) => (
                      <tr key={index} className="hover:bg-blue-50 transition-colors duration-150">
                        <td className="px-6 py-4 text-gray-900 font-medium">{item.name}</td>
                        <td className="px-6 py-4 text-gray-600">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            {item.format}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Standards & Compliance */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                {locale === 'tr' ? 'Uyduğumuz Standartlar' : 'Standards We Comply With'}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['TS EN', 'IEC', 'IEEE', 'TSE'].map((standard, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                      <span className="text-xl font-bold text-blue-600">{standard}</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">{standard}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {locale === 'tr' ? 'Projeniz İçin Teklif Alın' : 'Get a Quote for Your Project'}
            </h2>
            <p className="text-lg md:text-xl text-blue-50 mb-8 leading-relaxed">
              {locale === 'tr'
                ? 'Mühendislik hizmetleriniz için uzman ekibimizle iletişime geçin. Size özel çözümler üretelim.'
                : 'Contact our expert team for your engineering services. Let us create custom solutions for you.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 hover:bg-gray-50 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 text-lg"
              >
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {locale === 'tr' ? 'Teklif Almak İçin İletişime Geçin' : 'Contact Us for a Quote'}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold rounded-xl transition-all duration-200 text-lg"
              >
                {locale === 'tr' ? 'Tüm Hizmetler' : 'All Services'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

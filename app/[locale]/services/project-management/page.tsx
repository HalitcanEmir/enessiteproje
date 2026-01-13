'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectManagementPage() {
  const locale = useLocale();

  const services = [
    {
      title: locale === 'tr' ? 'Proje Planlama ve Koordinasyon' : 'Project Planning and Coordination',
      description: locale === 'tr'
        ? 'Proje başlangıcından bitişine kadar tüm süreçlerin profesyonel yönetimi.'
        : 'Professional management of all processes from project start to finish.',
      icon: '📋',
    },
    {
      title: locale === 'tr' ? 'Saha Yönetimi ve Denetim' : 'Site Management and Supervision',
      description: locale === 'tr'
        ? 'Şantiye organizasyonu, iş gücü yönetimi ve kalite denetimi hizmetleri.'
        : 'Construction site organization, workforce management and quality control services.',
      icon: '👷',
    },
    {
      title: locale === 'tr' ? 'Teknik Çizim ve Dokümantasyon' : 'Technical Drawing and Documentation',
      description: locale === 'tr'
        ? 'AutoCAD ve Revit ile teknik çizimler, hesap raporları ve dokümantasyon.'
        : 'Technical drawings, calculation reports and documentation with AutoCAD and Revit.',
      icon: '📐',
    },
    {
      title: locale === 'tr' ? 'Maliyet Kontrolü ve Raporlama' : 'Cost Control and Reporting',
      description: locale === 'tr'
        ? 'Proje bütçesi takibi, maliyet analizi ve düzenli raporlama.'
        : 'Project budget tracking, cost analysis and regular reporting.',
      icon: '💰',
    },
    {
      title: locale === 'tr' ? 'Alt Yüklenici Yönetimi' : 'Subcontractor Management',
      description: locale === 'tr'
        ? 'Alt yüklenici seçimi, koordinasyonu ve performans takibi.'
        : 'Subcontractor selection, coordination and performance tracking.',
      icon: '🤝',
    },
    {
      title: locale === 'tr' ? 'As-Built Proje Hazırlama' : 'As-Built Project Preparation',
      description: locale === 'tr'
        ? 'Uygulama sonrası gerçek durumu gösteren son proje çizimleri.'
        : 'Final project drawings showing the actual situation after implementation.',
      icon: '📄',
    },
  ];

  const benefits = [
    {
      title: locale === 'tr' ? 'Tecrübeli Ekip' : 'Experienced Team',
      description: locale === 'tr'
        ? 'Sektörde 15+ yıl deneyimli proje yöneticileri'
        : 'Project managers with 15+ years of industry experience',
    },
    {
      title: locale === 'tr' ? 'Zamanında Teslimat' : 'On-Time Delivery',
      description: locale === 'tr'
        ? 'Proje programına uygun teslimat garantisi'
        : 'Guarantee of delivery according to project schedule',
    },
    {
      title: locale === 'tr' ? 'Şeffaflık' : 'Transparency',
      description: locale === 'tr'
        ? 'Düzenli raporlama ile tam şeffaflık'
        : 'Full transparency with regular reporting',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] max-h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/project-3.jpg"
            alt="Project Management"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">📋</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  {locale === 'tr' ? 'Proje Yönetimi' : 'Project Management'}
                </h1>
              </div>
              <div className="w-20 h-1 bg-cyan-500 mb-5" />
              <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">
                {locale === 'tr'
                  ? 'Profesyonel proje yönetimi, koordinasyon ve teknik danışmanlık hizmetleri ile projelerinizi başarıya ulaştırıyoruz.'
                  : 'We lead your projects to success with professional project management, coordination and technical consulting services.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sentinel for navbar */}
      <div id="navbar-sentinel" className="absolute left-0 w-full h-1 pointer-events-none" style={{ top: '50vh' }} />

      {/* Services Grid */}
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
              {locale === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'tr'
                ? 'Proje yönetimi alanında sunduğumuz kapsamlı hizmetler'
                : 'Comprehensive services we offer in project management'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              {locale === 'tr' ? 'Neden Bizi Seçmelisiniz?' : 'Why Choose Us?'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-600 to-blue-700">
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
            <p className="text-lg md:text-xl text-cyan-50 mb-8 leading-relaxed">
              {locale === 'tr'
                ? 'Proje yönetimi hizmetleriniz için uzman ekibimizle iletişime geçin.'
                : 'Contact our expert team for your project management services.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-cyan-600 hover:bg-gray-50 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 text-lg"
              >
                {locale === 'tr' ? 'İletişime Geçin' : 'Contact Us'}
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
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

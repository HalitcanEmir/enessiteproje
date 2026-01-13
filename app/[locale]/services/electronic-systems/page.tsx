'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ElectronicSystemsPage() {
  const locale = useLocale();

  const services = [
    {
      title: locale === 'tr' ? 'Endüstriyel Otomasyon Sistemleri' : 'Industrial Automation Systems',
      description: locale === 'tr'
        ? 'Üretim süreçlerinizi otomatikleştiren akıllı sistem çözümleri ve entegrasyonları.'
        : 'Smart system solutions and integrations that automate your production processes.',
      icon: '🤖',
    },
    {
      title: locale === 'tr' ? 'PLC ve SCADA Programlama' : 'PLC and SCADA Programming',
      description: locale === 'tr'
        ? 'Siemens, Allen Bradley, Schneider marka PLC programlama ve SCADA yazılımları.'
        : 'Siemens, Allen Bradley, Schneider PLC programming and SCADA software.',
      icon: '💻',
    },
    {
      title: locale === 'tr' ? 'Kontrol Panoları İmalatı' : 'Control Panel Manufacturing',
      description: locale === 'tr'
        ? 'Özel tasarım kontrol panoları, motor kontrol merkezleri ve dağıtım panoları.'
        : 'Custom designed control panels, motor control centers and distribution boards.',
      icon: '⚙️',
    },
    {
      title: locale === 'tr' ? 'Motor Sürücü Sistemleri' : 'Motor Drive Systems',
      description: locale === 'tr'
        ? 'Değişken hız sürücüleri (VFD) ve soft starter sistemleri kurulumu.'
        : 'Variable frequency drives (VFD) and soft starter systems installation.',
      icon: '🔄',
    },
    {
      title: locale === 'tr' ? 'Proses Kontrol ve Monitoring' : 'Process Control and Monitoring',
      description: locale === 'tr'
        ? 'Gerçek zamanlı izleme sistemleri ve proses kontrol çözümleri.'
        : 'Real-time monitoring systems and process control solutions.',
      icon: '📊',
    },
    {
      title: locale === 'tr' ? 'Elektronik Cihaz Kurulumu' : 'Electronic Device Installation',
      description: locale === 'tr'
        ? 'Sensörler, aktüatörler ve elektronik kontrol elemanları kurulumu.'
        : 'Installation of sensors, actuators and electronic control elements.',
      icon: '🔌',
    },
  ];

  const benefits = [
    {
      title: locale === 'tr' ? 'İleri Teknoloji' : 'Advanced Technology',
      description: locale === 'tr'
        ? 'Son teknoloji otomasyon çözümleri ve ekipmanlar'
        : 'State-of-the-art automation solutions and equipment',
    },
    {
      title: locale === 'tr' ? 'Özelleştirilebilir' : 'Customizable',
      description: locale === 'tr'
        ? 'İhtiyaçlarınıza özel tasarlanmış sistemler'
        : 'Systems designed specifically for your needs',
    },
    {
      title: locale === 'tr' ? 'Teknik Eğitim' : 'Technical Training',
      description: locale === 'tr'
        ? 'Personel eğitimi ve devreye alma desteği'
        : 'Staff training and commissioning support',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] max-h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/project-2.jpg"
            alt="Electronic Systems"
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
                <span className="text-5xl">🔌</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  {locale === 'tr' ? 'Elektronik Sistemler' : 'Electronic Systems'}
                </h1>
              </div>
              <div className="w-20 h-1 bg-blue-500 mb-5" />
              <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">
                {locale === 'tr'
                  ? 'Endüstriyel otomasyon, kontrol sistemleri ve elektronik cihaz entegrasyonu ile üretim süreçlerinizi optimize ediyoruz.'
                  : 'We optimize your production processes with industrial automation, control systems and electronic device integration.'}
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
                ? 'Elektronik sistemler alanında sunduğumuz kapsamlı hizmetler'
                : 'Comprehensive services we offer in electronic systems'}
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
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
                ? 'Elektronik sistem ve otomasyon projeleriniz için uzman ekibimizle iletişime geçin.'
                : 'Contact our expert team for your electronic systems and automation projects.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 hover:bg-gray-50 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 text-lg"
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

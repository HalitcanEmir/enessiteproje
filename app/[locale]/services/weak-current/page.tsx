'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WeakCurrentPage() {
  const locale = useLocale();

  const services = [
    {
      title: locale === 'tr' ? 'Yangın Algılama ve Söndürme' : 'Fire Detection and Suppression',
      description: locale === 'tr'
        ? 'Adresli yangın algılama sistemleri ve otomatik söndürme sistemleri kurulumu.'
        : 'Addressable fire detection systems and automatic suppression systems installation.',
      icon: '🔥',
    },
    {
      title: locale === 'tr' ? 'CCTV Güvenlik Kameraları' : 'CCTV Security Cameras',
      description: locale === 'tr'
        ? 'IP ve analog kamera sistemleri, kayıt cihazları ve video yönetim yazılımları.'
        : 'IP and analog camera systems, recording devices and video management software.',
      icon: '📹',
    },
    {
      title: locale === 'tr' ? 'Geçiş Kontrol ve Alarm' : 'Access Control and Alarm',
      description: locale === 'tr'
        ? 'Biyometrik ve kartlı geçiş kontrol sistemleri, hırsız alarm sistemleri.'
        : 'Biometric and card access control systems, burglar alarm systems.',
      icon: '🔐',
    },
    {
      title: locale === 'tr' ? 'Yapısal Kablolama (Data Network)' : 'Structured Cabling (Data Network)',
      description: locale === 'tr'
        ? 'Cat6, Cat6A, fiber optik kablolama ve network altyapı kurulumu.'
        : 'Cat6, Cat6A, fiber optic cabling and network infrastructure installation.',
      icon: '🌐',
    },
    {
      title: locale === 'tr' ? 'Ses ve Görüntü Sistemleri' : 'Audio and Video Systems',
      description: locale === 'tr'
        ? 'Toplantı odası ses sistemleri, projeksiyon ve video konferans sistemleri.'
        : 'Meeting room audio systems, projection and video conferencing systems.',
      icon: '🔊',
    },
    {
      title: locale === 'tr' ? 'Nurse Call ve Hastane Sistemleri' : 'Nurse Call and Hospital Systems',
      description: locale === 'tr'
        ? 'Hasta çağrı sistemleri ve hastane iletişim altyapısı çözümleri.'
        : 'Patient call systems and hospital communication infrastructure solutions.',
      icon: '🏥',
    },
  ];

  const benefits = [
    {
      title: locale === 'tr' ? 'Güvenlik' : 'Security',
      description: locale === 'tr'
        ? '7/24 aktif güvenlik ve izleme sistemleri'
        : '24/7 active security and monitoring systems',
    },
    {
      title: locale === 'tr' ? 'Entegrasyon' : 'Integration',
      description: locale === 'tr'
        ? 'Tüm sistemlerin tek platformda yönetimi'
        : 'Management of all systems on a single platform',
    },
    {
      title: locale === 'tr' ? 'Scalability' : 'Scalability',
      description: locale === 'tr'
        ? 'Gelecekte genişletilebilir altyapı'
        : 'Future-expandable infrastructure',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] max-h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/project-1.jpg"
            alt="Weak Current Systems"
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
                <span className="text-5xl">📡</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  {locale === 'tr' ? 'Zayıf Akım Sistemleri' : 'Weak Current Systems'}
                </h1>
              </div>
              <div className="w-20 h-1 bg-purple-500 mb-5" />
              <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">
                {locale === 'tr'
                  ? 'Güvenlik, iletişim ve veri altyapısı sistemlerinin kurulumu ve entegrasyonu ile işletmenizi güvence altına alıyoruz.'
                  : 'We secure your business with the installation and integration of security, communication and data infrastructure systems.'}
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
                ? 'Zayıf akım sistemleri alanında sunduğumuz kapsamlı hizmetler'
                : 'Comprehensive services we offer in weak current systems'}
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-purple-600 to-pink-700">
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
            <p className="text-lg md:text-xl text-purple-50 mb-8 leading-relaxed">
              {locale === 'tr'
                ? 'Zayıf akım ve güvenlik sistemi projeleriniz için uzman ekibimizle iletişime geçin.'
                : 'Contact our expert team for your weak current and security system projects.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-purple-600 hover:bg-gray-50 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 text-lg"
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

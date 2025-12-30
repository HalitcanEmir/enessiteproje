'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('company')}</h3>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold">Company Name</span>
            </div>
            <p className="text-gray-400 text-sm">
              Electrical and electronic solutions for corporate projects
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/projects`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@company.com</li>
              <li>Phone: +90 XXX XXX XX XX</li>
              <li>Address: Istanbul, Turkey</li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {currentYear} Company Name. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}


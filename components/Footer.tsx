'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { href: `/${locale}`, label: tNav('home') },
    { href: `/${locale}/about`, label: tNav('about') },
    { href: `/${locale}/services`, label: tNav('services') },
    { href: `/${locale}/projects`, label: tNav('projects') },
    { href: `/${locale}/contact`, label: tNav('contact') },
  ];

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <Link href={`/${locale}`} className="inline-block mb-4">
              <div className="bg-white px-3 py-2 rounded-lg inline-block">
                <Image
                  src="/images/logo.png"
                  alt="Company Logo"
                  width={180}
                  height={60}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            
            {/* Slogan */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              {t('slogan')}
            </p>
            
            {/* CTA Button */}
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center px-6 py-2.5 border-2 border-primary text-primary font-semibold text-sm rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
            >
              {t('getQuote')}
            </Link>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6 text-white">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <span className="absolute -left-4 w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6 text-white">
              {t('contact')}
            </h3>
            <ul className="space-y-4">
              {/* Email */}
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wide">{t('email')}</span>
                  <a
                    href="mailto:info@company.com"
                    className="block text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    info@company.com
                  </a>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wide">{t('phone')}</span>
                  <a
                    href="tel:+905551234567"
                    className="block text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    +90 555 123 45 67
                  </a>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wide">{t('address')}</span>
                  <p className="text-gray-400 text-sm">
                    {t('addressValue')}
                  </p>
                </div>
              </li>

              {/* Working Hours */}
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wide">{t('workingHours')}</span>
                  <p className="text-gray-400 text-sm">
                    {t('workingHoursValue')}
                  </p>
                </div>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A110611007&keywords=cüneyt%20çetinel%20mühendislik%20müşavirlik&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=18a8c748-58f7-45cd-9050-e1582a556350&sid=e%2CY&spellCorrectionEnabled=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-900 hover:bg-primary transition-colors duration-200 text-gray-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-900 hover:bg-primary transition-colors duration-200 text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-900 hover:bg-primary transition-colors duration-200 text-gray-400 hover:text-white"
                aria-label="Twitter/X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {currentYear} Company Name. {t('copyright')}
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link
                href={`/${locale}/kvkk`}
                className="text-gray-500 hover:text-primary transition-colors duration-200"
              >
                {t('kvkk')}
              </Link>
              <Link
                href={`/${locale}/cookies`}
                className="text-gray-500 hover:text-primary transition-colors duration-200"
              >
                {t('cookies')}
              </Link>
              <Link
                href={`/${locale}/sitemap`}
                className="text-gray-500 hover:text-primary transition-colors duration-200"
              >
                {t('sitemap')}
              </Link>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                scale: isVisible ? 1 : 0 
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary hover:bg-primary-dark text-white transition-colors duration-200"
              aria-label={t('scrollTop')}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

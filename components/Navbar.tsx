'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { servicesMenu } from '@/data/servicesMenu';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: `/${locale}`, label: t('home'), hasDropdown: false },
    { href: `/${locale}/about`, label: t('about'), hasDropdown: false },
    { href: `/${locale}/services`, label: t('services'), hasDropdown: true },
    { href: `/${locale}/projects`, label: t('projects'), hasDropdown: false },
    { href: `/${locale}/contact`, label: t('contact'), hasDropdown: false },
  ];

  // Scroll detection for compact navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isServicesOpen]);

  const toggleLocale = () => {
    const newLocale = locale === 'tr' ? 'en' : 'tr';
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-[#0a1929] border-b border-[#1a3a5a] transition-all duration-300 ${
          isScrolled ? 'h-[72px]' : 'h-[76px]'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo - Left */}
            <Link href={`/${locale}`} className="flex items-center flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={120}
                height={40}
                className="h-10 object-contain"
                priority
              />
            </Link>

            {/* Desktop Menu - Center */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              {navItems.map((item) => {
                const active = isActive(item.href);
                if (item.hasDropdown) {
                  return (
                    <div key={item.href} ref={servicesRef} className="relative">
                      <div
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                        className="relative"
                      >
                        <Link
                          href={item.href}
                          className={`relative px-3 py-2 text-sm font-medium text-gray-300 uppercase tracking-[0.5px] transition-colors duration-200 ${
                            active ? 'text-white' : 'hover:text-white'
                          }`}
                        >
                          {item.label}
                          {active && (
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3b82f6]" />
                          )}
                        </Link>
                      </div>

                      {/* Dropdown Menu */}
                      {isServicesOpen && (
                        <div
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                          className="absolute top-full left-0 mt-1 w-56 bg-[#1a2332] shadow-lg border border-[#1a3a5a]/50 overflow-hidden"
                        >
                          <div className="py-2">
                            {servicesMenu.map((service, index) => (
                              <Link
                                key={index}
                                href={`/${locale}${service.href}`}
                                className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#243447] transition-colors duration-150"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {service.title[locale as 'tr' | 'en']}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium text-gray-300 uppercase tracking-[0.5px] transition-colors duration-200 ${
                      active ? 'text-white' : 'hover:text-white'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3b82f6]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Section - Language Toggle + CTA */}
            <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
              {/* Language Toggle */}
              <button
                onClick={toggleLocale}
                className="text-sm font-medium text-gray-300 hover:text-[#3b82f6] transition-colors duration-200 uppercase tracking-[0.5px]"
                aria-label="Toggle language"
              >
                {locale === 'tr' ? 'TR | EN' : 'EN | TR'}
              </button>

              {/* CTA Button */}
              <Link
                href={`/${locale}/contact`}
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-5 py-2 rounded-md font-medium text-sm transition-colors duration-200"
              >
                {t('getQuote')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0a1929] z-40 lg:hidden pt-20">
          <div className="flex flex-col h-full">
            {/* Mobile Nav Items */}
            <nav className="flex-1 px-6 py-8 space-y-1 overflow-y-auto">
              {navItems.map((item) => {
                const active = isActive(item.href);
                if (item.hasDropdown) {
                  return (
                    <div key={item.href}>
                      <button
                        onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)}
                        className={`flex items-center justify-between w-full px-4 py-4 text-base font-medium uppercase tracking-[0.5px] transition-colors ${
                          active
                            ? 'text-white border-b border-[#3b82f6]'
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isServicesMobileOpen ? 'rotate-180' : ''
                          }`}
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
                      {isServicesMobileOpen && (
                        <div className="pl-4 border-l border-[#1a3a5a] mt-1 mb-4">
                          {servicesMenu.map((service, index) => (
                            <Link
                              key={index}
                              href={`/${locale}${service.href}`}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-4 py-3 text-sm text-gray-400 hover:text-white transition-colors duration-150"
                            >
                              {service.title[locale as 'tr' | 'en']}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-4 text-base font-medium uppercase tracking-[0.5px] transition-colors border-b ${
                      active
                        ? 'text-white border-[#3b82f6]'
                        : 'text-gray-300 hover:text-white border-[#1a3a5a]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Footer */}
            <div className="p-6 border-t border-[#1a3a5a] space-y-4">
              {/* Language Toggle */}
              <button
                onClick={() => {
                  toggleLocale();
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-base font-medium text-gray-300 hover:text-white uppercase tracking-[0.5px] transition-colors border border-[#1a3a5a] rounded-md"
              >
                {locale === 'tr' ? 'TR | EN' : 'EN | TR'}
              </button>
              {/* CTA Button */}
              <Link
                href={`/${locale}/contact`}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-[#3b82f6] hover:bg-[#2563eb] text-white px-5 py-3 rounded-md font-medium text-base transition-colors duration-200"
              >
                {t('getQuote')}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from going under navbar */}
      <div className={isScrolled ? 'h-[72px]' : 'h-[76px]'} />
    </>
  );
}

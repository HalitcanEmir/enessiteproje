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
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const servicesRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: `/${locale}`, label: t('home'), hasDropdown: false },
    { href: `/${locale}/about`, label: t('about'), hasDropdown: false },
    { href: `/${locale}/services`, label: t('services'), hasDropdown: true },
    { href: `/${locale}/projects`, label: t('projects'), hasDropdown: false },
    { href: `/${locale}/contact`, label: t('contact'), hasDropdown: false },
  ];

  // Scroll handler for navbar show/hide
  useEffect(() => {
    // Reset scroll position on page change
    lastScrollYRef.current = 0;
    setIsNavbarVisible(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY < 10) {
        // At the very top, always show navbar
        setIsNavbarVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down, hide navbar
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up, show navbar
        setIsNavbarVisible(true);
      }
      
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  // Intersection Observer for hero mode detection
  useEffect(() => {
    // Reset scroll state on page change
    setIsScrolled(false);
    lastScrollYRef.current = 0;

    // Small delay to ensure DOM is ready after navigation
    let observer: IntersectionObserver | null = null;
    let scrollHandler: (() => void) | null = null;
    
    const timeoutId = setTimeout(() => {
      const sentinel = document.getElementById('navbar-sentinel');
      if (!sentinel) {
        // Fallback to scrollY threshold if sentinel not found
        scrollHandler = () => {
          setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', scrollHandler, { passive: true });
        scrollHandler();
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // When sentinel is visible = we're in hero mode
            // When sentinel is not visible = we've scrolled past hero
            setIsScrolled(!entry.isIntersecting);
          });
        },
        {
          threshold: 0,
          rootMargin: '0px 0px 0px 0px',
        }
      );

      observer.observe(sentinel);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        const sentinel = document.getElementById('navbar-sentinel');
        if (sentinel) observer.unobserve(sentinel);
      }
      if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler);
      }
    };
  }, [pathname]);

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
        className={`fixed top-0 left-0 right-0 z-50 h-[84px] transition-all duration-500 ${
          isScrolled ? 'bg-[#0a1929] shadow-[0_8px_20px_rgba(0,0,0,0.25)]' : ''
        } ${
          isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{
          transition: 'transform 0.3s ease-in-out, background-color 0.5s ease, box-shadow 0.5s ease',
        }}
      >
        {/* Background - semi-transparent gradient when on hero, solid when scrolled */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled
              ? 'bg-[#0a1929]'
              : 'bg-gradient-to-b from-black/20 via-black/15 to-transparent backdrop-blur-sm'
          }`}
        />

        {/* Bottom border - only when scrolled */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        )}

        {/* Inner container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full max-w-[1280px] relative">
          <div className="flex items-center justify-between h-full">
            {/* Logo - Left */}
            <Link 
              href={`/${locale}`} 
              className="flex items-center gap-3 flex-shrink-0"
            >
              <div className="relative flex items-center justify-center h-[50px] w-[50px] bg-white rounded-md p-1">
                <Image
                  src="/images/eneslogo3.jpeg"
                  alt="Cüneyt Çetinel Mühendislik"
                  width={50}
                  height={50}
                  className="object-contain h-full w-full"
                  priority
                  style={{ objectPosition: 'center center' }}
                />
              </div>
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
                          className={`px-3 py-2 text-sm font-medium uppercase tracking-wide transition-opacity duration-200 ${
                            isScrolled
                              ? 'text-white hover:opacity-80'
                              : 'text-white hover:opacity-80'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </div>

                      {/* Dropdown Menu */}
                      {isServicesOpen && (
                        <div
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                          className="absolute top-full left-0 mt-2 w-56 bg-[#0f1e2e] shadow-xl border border-[#1a3a5a]/50 backdrop-blur-md overflow-hidden rounded-lg"
                        >
                          <div className="py-2">
                            {servicesMenu.map((service, index) => (
                              <Link
                                key={index}
                                href={`/${locale}${service.href}`}
                                className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#1a2a3a] transition-colors duration-150"
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
                    className={`px-3 py-2 text-sm font-medium uppercase tracking-wide transition-opacity duration-200 ${
                      isScrolled
                        ? 'text-white hover:opacity-80'
                        : 'text-white hover:opacity-80'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Right Section - Language Toggle + CTA */}
            <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
              {/* Language Toggle */}
              <button
                onClick={toggleLocale}
                className={`text-sm font-medium uppercase tracking-wide transition-opacity duration-200 ${
                  isScrolled
                    ? 'text-white hover:opacity-80'
                    : 'text-white hover:opacity-80'
                }`}
                aria-label="Toggle language"
              >
                {locale === 'tr' ? 'TR | EN' : 'EN | TR'}
              </button>

              {/* CTA Button - only show when scrolled */}
              {isScrolled && (
                <Link
                  href={`/${locale}/contact`}
                  className="px-5 py-2.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium text-sm rounded-lg transition-colors duration-200"
                >
                  {t('getQuote')}
                </Link>
              )}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:opacity-80 transition-opacity duration-200"
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
        <div className="fixed inset-0 bg-[#0a1929] z-40 lg:hidden pt-[84px]">
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
                        className={`flex items-center justify-between w-full px-4 py-4 text-base font-medium uppercase tracking-[0.8px] transition-colors ${
                          active
                            ? 'text-white border-b border-blue-500'
                            : 'text-gray-300 hover:text-white border-b border-[#1a3a5a]'
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
                    className={`block px-4 py-4 text-base font-medium uppercase tracking-[0.8px] transition-colors border-b ${
                      active
                        ? 'text-white border-blue-500'
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
                className="w-full px-4 py-3 text-base font-medium text-gray-300 hover:text-white uppercase tracking-[0.8px] transition-colors border border-[#1a3a5a] rounded-xl hover:border-gray-600"
              >
                {locale === 'tr' ? 'TR | EN' : 'EN | TR'}
              </button>
              {/* CTA Button */}
              <Link
                href={`/${locale}/contact`}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-[#3b82f6] hover:bg-[#2563eb] text-white px-5 py-3 rounded-xl font-medium text-base transition-colors duration-200 shadow-lg"
              >
                {t('getQuote')}
              </Link>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

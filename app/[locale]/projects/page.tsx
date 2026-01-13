'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projectsData, ProjectCard } from '@/data/projectsData';

type FilterType = 'all' | 'ongoing' | 'featured' | 'completed';

export default function ProjectsPage() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [projects, setProjects] = useState<ProjectCard[]>(projectsData);
  const [isFilterFixed, setIsFilterFixed] = useState(false);

  // Load projects from localStorage (admin changes) or use default data
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedProjects = localStorage.getItem('projectsData');
      if (savedProjects) {
        setProjects(JSON.parse(savedProjects));
      }
    }
  }, []);

  // Make filter bar fixed when scrolling past hero section
  useEffect(() => {
    const handleScroll = () => {
      // Get the actual hero section height from DOM
      const heroSection = document.querySelector('section');
      if (!heroSection) return;
      
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      const navbarHeight = 84;
      
      // Fix filter bar when hero section scrolls past navbar
      setIsFilterFixed(heroBottom <= navbarHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Filter projects based on active filter
  const filteredProjects = projects.filter((project) => {
    switch (activeFilter) {
      case 'ongoing':
        return project.status === 'ongoing';
      case 'completed':
        return project.status === 'completed';
      case 'featured':
        return project.featured === true;
      default:
        return true;
    }
  });

  const filters: FilterType[] = ['all', 'ongoing', 'featured', 'completed'];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] max-h-[550px] overflow-hidden bg-white">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/project-1.jpg"
            alt="Projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/55" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              {t('title')}
            </h1>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-5" />
            <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Sentinel for Intersection Observer - detects when hero is scrolled past */}
      <div id="navbar-sentinel" className="absolute left-0 w-full h-1 pointer-events-none" style={{ top: '50vh' }} />

      {/* Filters Section - Becomes Fixed on Scroll */}
      <div 
        className={`${isFilterFixed ? 'fixed' : 'relative'} top-[84px] left-0 right-0 z-40 transition-all duration-300 ${
          isFilterFixed 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/80' 
            : 'bg-gradient-to-b from-gray-50/80 to-white border-b border-gray-100'
        } w-full`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center overflow-x-auto scrollbar-hide">
            <div className="inline-flex items-center gap-2 md:gap-3 py-3 px-2 rounded-xl bg-white/50">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-semibold rounded-lg transition-all duration-300 whitespace-nowrap overflow-hidden ${
                    activeFilter === filter
                      ? 'text-white shadow-lg shadow-blue-500/30'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                  }`}
                >
                  {/* Active Background with Gradient */}
                  {activeFilter === filter && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Text */}
                  <span className="relative z-10 tracking-wide">
                    {t(`filters.${filter}`)}
                  </span>
                  
                  {/* Active Indicator Dot */}
                  {activeFilter === filter && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      {/* Spacer to prevent content jump when filter becomes fixed */}
      {isFilterFixed && <div className="h-[72px]" />}

      {/* Projects Grid Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link
                    href={`/${locale}/projects/${project.slug}`}
                    className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full group"
                  >
                    {/* Image Container */}
                    <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200">
                      <Image
                        src={project.imageUrl}
                        alt={project.imageAlt[locale as 'tr' | 'en']}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#3b82f6] transition-colors duration-200">
                        {project.title[locale as 'tr' | 'en']}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{project.location[locale as 'tr' | 'en']}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            // Empty State
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 md:py-20"
            >
              <div className="max-w-md mx-auto">
                <svg
                  className="w-16 h-16 mx-auto text-gray-300 mb-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('emptyState.title')}
                </h3>
                <p className="text-gray-600">
                  {t('emptyState.description')}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
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

  // Filter projects based on active filter
  const filteredProjects = projectsData.filter((project) => {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] max-h-[550px] overflow-hidden">
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

      {/* Filters Section */}
      <section className="bg-white border-b border-gray-100 sticky top-[72px] md:top-[76px] z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-1 md:gap-2 py-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 md:px-6 py-2 text-sm md:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                    activeFilter === filter
                      ? 'text-[#3b82f6] border-b-2 border-[#3b82f6]'
                      : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
                  }`}
                >
                  {t(`filters.${filter}`)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

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

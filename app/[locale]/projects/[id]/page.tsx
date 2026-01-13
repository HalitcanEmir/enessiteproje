'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { projectsData, type ProjectCard } from '@/data/projectsData';

export default function ProjectDetailPage() {
  const params = useParams();
  const locale = useLocale() as 'tr' | 'en';
  const t = useTranslations('projects');
  const projectSlug = params?.id as string;
  
  const [project, setProject] = useState<ProjectCard | null>(null);
  const [loading, setLoading] = useState(true);

  // Load project from localStorage (admin changes) or default data
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let allProjects = projectsData;
      
      // Check if there are admin-created/updated projects in localStorage
      const savedProjects = localStorage.getItem('projectsData');
      if (savedProjects) {
        try {
          allProjects = JSON.parse(savedProjects);
        } catch (error) {
          console.error('Error parsing projects from localStorage:', error);
        }
      }

      // Find project by slug
      const foundProject = allProjects.find((p) => p.slug === projectSlug);
      setProject(foundProject || null);
      setLoading(false);
    }
  }, [projectSlug]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">{locale === 'tr' ? 'Yükleniyor...' : 'Loading...'}</p>
        </div>
      </div>
    );
  }

  // Project not found
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md mx-auto px-4">
          <svg
            className="w-20 h-20 mx-auto text-gray-300 mb-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            <path d="M9 12L9 12.01M15 12L15 12.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {locale === 'tr' ? 'Proje Bulunamadı' : 'Project Not Found'}
          </h1>
          <p className="text-gray-600 mb-8">
            {locale === 'tr' 
              ? 'Aradığınız proje bulunamadı veya kaldırılmış olabilir.' 
              : 'The project you are looking for could not be found or may have been removed.'}
          </p>
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
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
              <path d="M15 19l-7-7 7-7" />
            </svg>
            {locale === 'tr' ? 'Projelere Dön' : 'Back to Projects'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image Section */}
      <section className="relative h-[60vh] min-h-[400px] max-h-[600px] w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.imageAlt[locale]}
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {project.title[locale]}
              </h1>
              
              {/* Project Meta Info */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-base md:text-lg">{project.location[locale]}</span>
                </div>
                
                <span className="text-white/50">•</span>
                
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-base md:text-lg">{project.year}</span>
                </div>
                
                <span className="text-white/50">•</span>
                
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'completed' 
                    ? 'bg-green-500/20 text-green-200' 
                    : 'bg-blue-500/20 text-blue-200'
                }`}>
                  {project.status === 'completed' 
                    ? (locale === 'tr' ? 'Tamamlandı' : 'Completed')
                    : (locale === 'tr' ? 'Devam Ediyor' : 'Ongoing')}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sentinel for navbar */}
      <div id="navbar-sentinel" className="absolute left-0 w-full h-1 pointer-events-none" style={{ top: '60vh' }} />

      {/* Content Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Project Details */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {locale === 'tr' ? 'Proje Detayları' : 'Project Details'}
                </h2>
                
                {project.description && (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                      {project.description[locale]}
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Tags */}
              {project.tags && project.tags[locale] && project.tags[locale].length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-8"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {locale === 'tr' ? 'Hizmetler' : 'Services'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags[locale].map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column - Project Info Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-50 rounded-xl p-6 sticky top-24"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {locale === 'tr' ? 'Proje Bilgileri' : 'Project Information'}
                </h3>
                
                <div className="space-y-4">
                  {/* Location */}
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      {locale === 'tr' ? 'Konum' : 'Location'}
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      {project.location[locale]}
                    </p>
                  </div>

                  {/* Year */}
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      {locale === 'tr' ? 'Yıl' : 'Year'}
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      {project.year}
                    </p>
                  </div>

                  {/* Status */}
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      {locale === 'tr' ? 'Durum' : 'Status'}
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      {project.status === 'completed' 
                        ? (locale === 'tr' ? 'Tamamlandı' : 'Completed')
                        : (locale === 'tr' ? 'Devam Ediyor' : 'Ongoing')}
                    </p>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div>
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {locale === 'tr' ? 'Öne Çıkan' : 'Featured'}
                      </span>
                    </div>
                  )}

                  {/* Architect Info */}
                  {project.architect && (project.architect.name || project.architect.logo) && (
                    <div className="pt-4 mt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500 mb-3">
                        {locale === 'tr' ? 'Proje Mimarı' : 'Project Architect'}
                      </p>
                      <div className="flex items-center gap-3">
                        {project.architect.logo && (
                          <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg border border-gray-200 p-2 flex items-center justify-center">
                            <img
                              src={project.architect.logo}
                              alt={project.architect.name || 'Architect Logo'}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        {project.architect.name && (
                          <div className="flex-1">
                            <p className="text-base font-semibold text-gray-900">
                              {project.architect.name}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12"
          >
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-200"
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
                <path d="M15 19l-7-7 7-7" />
              </svg>
              {locale === 'tr' ? 'Projelere Dön' : 'Back to Projects'}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

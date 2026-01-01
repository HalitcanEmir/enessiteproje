'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { projectsData, ProjectCard } from '@/data/projectsData';

export default function ProjectsSection() {
  const t = useTranslations('projectsSection');
  const locale = useLocale();
  const projects = projectsData.slice(0, 6); // İlk 6 projeyi göster

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} locale={locale as 'tr' | 'en'} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-end"
        >
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center text-primary hover:text-primary-dark font-semibold text-lg transition-colors group"
          >
            {t('viewAll')}
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: ProjectCard;
  index: number;
  locale: 'tr' | 'en';
}

function ProjectCard({ project, index, locale }: ProjectCardProps) {
  const t = useTranslations('projectsSection');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link
        href={`/${locale}/projects/${project.slug}`}
        className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
      >
        {/* Image Container */}
        <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden bg-gray-200">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt[locale]}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* View Details Text (appears on hover) */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-sm font-medium flex items-center">
              {t('viewDetails')}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 md:p-6">
          {/* Project Title */}
          <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
            {project.title[locale]}
          </h3>

          {/* Location and Year */}
          <p className="text-gray-600 text-sm md:text-base mb-4">
            {project.location[locale]} • {project.year}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags[locale].map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="inline-block px-3 py-1 text-xs md:text-sm bg-gray-100 text-secondary rounded-full border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}


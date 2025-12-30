'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { featuredProjects } from '@/data/projects';

export default function ProjectDetailPage() {
  const params = useParams();
  const locale = useLocale();
  const projectId = params?.id as string;

  const project = featuredProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary mb-4">
            {locale === 'tr' ? 'Proje Bulunamadı' : 'Project Not Found'}
          </h1>
          <Link
            href={`/${locale}/projects`}
            className="text-primary hover:text-primary-dark"
          >
            {locale === 'tr' ? 'Projelere Dön' : 'Back to Projects'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src={project.image}
          alt={project.title[locale as 'tr' | 'en']}
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title[locale as 'tr' | 'en']}
              </h1>
              {project.category && (
                <p className="text-lg text-gray-200">
                  {project.category[locale as 'tr' | 'en']}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-secondary mb-6">
              {locale === 'tr' ? 'Proje Detayları' : 'Project Details'}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {project.description[locale as 'tr' | 'en']}
            </p>
            {project.fullDescription && (
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.fullDescription[locale as 'tr' | 'en']}
              </p>
            )}
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center text-primary hover:text-primary-dark font-semibold"
            >
              <svg
                className="w-5 h-5 mr-2"
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


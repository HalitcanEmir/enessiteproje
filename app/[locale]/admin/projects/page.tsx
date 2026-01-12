'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData, ProjectCard } from '@/data/projectsData';

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<ProjectCard[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem('adminAuth');
    if (auth !== 'true') {
      router.push('/tr/admin');
      return;
    }
    setIsAuthenticated(true);

    // Load projects from localStorage or use default data
    const savedProjects = localStorage.getItem('projectsData');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      setProjects(projectsData);
      localStorage.setItem('projectsData', JSON.stringify(projectsData));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    router.push('/tr/admin');
  };

  const handleDelete = (slug: string) => {
    if (confirm('Bu projeyi silmek istediğinizden emin misiniz?')) {
      const updatedProjects = projects.filter(p => p.slug !== slug);
      setProjects(updatedProjects);
      localStorage.setItem('projectsData', JSON.stringify(updatedProjects));
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header - Sticky */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Proje Yönetimi</h1>
            <div className="flex items-center gap-4">
              <Link
                href="/tr/projects"
                target="_blank"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Siteyi Görüntüle
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Çıkış Yap
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add New Project Button */}
        <div className="mb-6">
          <Link
            href="/tr/admin/projects/new"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Yeni Proje Ekle
          </Link>
        </div>

        {/* Projects List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto max-h-[calc(100vh-250px)] relative">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Görsel
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Proje Adı
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Lokasyon
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Yıl
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Durum
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Öne Çıkan
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projects.map((project) => (
                  <tr key={project.slug} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={project.imageUrl}
                          alt={project.imageAlt.tr}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {project.title.tr}
                      </div>
                      <div className="text-sm text-gray-500">
                        {project.title.en}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{project.location.tr}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{project.year}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        project.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status === 'completed' ? 'Tamamlandı' : 'Devam Ediyor'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {project.featured ? (
                        <span className="text-yellow-500">★</span>
                      ) : (
                        <span className="text-gray-300">☆</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href={`/tr/admin/projects/edit/${project.slug}`}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        Düzenle
                      </Link>
                      <button
                        onClick={() => handleDelete(project.slug)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Henüz proje eklenmemiş.</p>
          </div>
        )}
      </main>
    </div>
  );
}

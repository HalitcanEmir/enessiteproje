'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { ProjectCard } from '@/data/projectsData';

export default function EditProjectPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [formData, setFormData] = useState<ProjectCard | null>(null);

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth !== 'true') {
      router.push('/tr/admin');
      return;
    }
    setIsAuthenticated(true);

    // Load project data
    const savedProjects = localStorage.getItem('projectsData');
    if (savedProjects) {
      const projects: ProjectCard[] = JSON.parse(savedProjects);
      const project = projects.find(p => p.slug === slug);
      if (project) {
        setFormData(project);
        setImagePreview(project.imageUrl);
      } else {
        router.push('/tr/admin/projects');
      }
    }
  }, [router, slug]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        if (formData) {
          setFormData({ ...formData, imageUrl: base64String });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    // Update project in localStorage
    const savedProjects = localStorage.getItem('projectsData');
    if (savedProjects) {
      const projects: ProjectCard[] = JSON.parse(savedProjects);
      const updatedProjects = projects.map(p => 
        p.slug === slug ? formData : p
      );
      localStorage.setItem('projectsData', JSON.stringify(updatedProjects));
    }

    // Redirect back to projects list
    router.push('/tr/admin/projects');
  };

  const handleTagsChange = (value: string, lang: 'tr' | 'en') => {
    if (!formData) return;
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData({ ...formData, tags: { ...formData.tags, [lang]: tags } });
  };

  if (!isAuthenticated || !formData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header - Sticky */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/tr/admin/projects"
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Projeyi Düzenle</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Proje Görseli *
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                {imagePreview && (
                  <div className="relative w-full h-64 mb-4">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                    <span>Yeni Dosya Yükle</span>
                    <input
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF maks 10MB</p>
              </div>
            </div>
          </div>

          {/* Turkish Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Proje Başlığı (Türkçe) *
            </label>
            <input
              type="text"
              value={formData.title.tr}
              onChange={(e) => setFormData({ ...formData, title: { ...formData.title, tr: e.target.value } })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* English Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Proje Başlığı (İngilizce) *
            </label>
            <input
              type="text"
              value={formData.title.en}
              onChange={(e) => setFormData({ ...formData, title: { ...formData.title, en: e.target.value } })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lokasyon (Türkçe) *
              </label>
              <input
                type="text"
                value={formData.location.tr}
                onChange={(e) => setFormData({ ...formData, location: { ...formData.location, tr: e.target.value } })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lokasyon (İngilizce) *
              </label>
              <input
                type="text"
                value={formData.location.en}
                onChange={(e) => setFormData({ ...formData, location: { ...formData.location, en: e.target.value } })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Yıl *
            </label>
            <input
              type="number"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="2000"
              max="2100"
              required
            />
          </div>

          {/* Tags */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Etiketler (Türkçe)
              </label>
              <input
                type="text"
                value={formData.tags.tr.join(', ')}
                onChange={(e) => handleTagsChange(e.target.value, 'tr')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Taahhüt, Alçak Gerilim, Pano"
              />
              <p className="mt-1 text-sm text-gray-500">Virgülle ayırın</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Etiketler (İngilizce)
              </label>
              <input
                type="text"
                value={formData.tags.en.join(', ')}
                onChange={(e) => handleTagsChange(e.target.value, 'en')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Contracting, Low Voltage, Panel"
              />
              <p className="mt-1 text-sm text-gray-500">Separate with commas</p>
            </div>
          </div>

          {/* Image Alt Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Görsel Alt Metni (Türkçe) *
              </label>
              <input
                type="text"
                value={formData.imageAlt.tr}
                onChange={(e) => setFormData({ ...formData, imageAlt: { ...formData.imageAlt, tr: e.target.value } })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Görsel Alt Metni (İngilizce) *
              </label>
              <input
                type="text"
                value={formData.imageAlt.en}
                onChange={(e) => setFormData({ ...formData, imageAlt: { ...formData.imageAlt, en: e.target.value } })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Proje Durumu *
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as 'ongoing' | 'completed' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="ongoing">Devam Ediyor</option>
              <option value="completed">Tamamlandı</option>
            </select>
          </div>

          {/* Featured */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">
              Öne Çıkan Proje
            </label>
          </div>

          {/* Submit Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Değişiklikleri Kaydet
            </button>
            <Link
              href="/tr/admin/projects"
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              İptal
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}

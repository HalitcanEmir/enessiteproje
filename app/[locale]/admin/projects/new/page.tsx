'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ProjectCard } from '@/data/projectsData';

export default function NewProjectPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [architectLogoPreview, setArchitectLogoPreview] = useState<string>('');
  const [formData, setFormData] = useState<ProjectCard>({
    slug: '',
    title: { tr: '', en: '' },
    description: { tr: '', en: '' },
    location: { tr: '', en: '' },
    year: new Date().getFullYear(),
    tags: { tr: [], en: [] },
    imageUrl: '',
    imageAlt: { tr: '', en: '' },
    status: 'ongoing',
    featured: false,
    architect: {
      name: '',
      logo: '',
    },
  });

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth !== 'true') {
      router.push('/tr/admin');
      return;
    }
    setIsAuthenticated(true);
  }, [router]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        setFormData({ ...formData, imageUrl: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleArchitectLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setArchitectLogoPreview(base64String);
        setFormData({ 
          ...formData, 
          architect: { 
            ...formData.architect!, 
            logo: base64String 
          } 
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate slug from title if not provided
    const slug = formData.slug || formData.title.tr
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    const newProject = { ...formData, slug };

    // Save to localStorage
    const savedProjects = localStorage.getItem('projectsData');
    const projects = savedProjects ? JSON.parse(savedProjects) : [];
    projects.push(newProject);
    localStorage.setItem('projectsData', JSON.stringify(projects));

    // Redirect back to projects list
    router.push('/tr/admin/projects');
  };

  const handleTagsChange = (value: string, lang: 'tr' | 'en') => {
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData({ ...formData, tags: { ...formData.tags, [lang]: tags } });
  };

  if (!isAuthenticated) {
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
            <h1 className="text-2xl font-bold text-gray-900">Yeni Proje Ekle</h1>
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
                {imagePreview ? (
                  <div className="relative w-full h-64 mb-4">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                    <span>Dosya Yükle</span>
                    <input
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={handleImageUpload}
                      required
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

          {/* Turkish Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Proje Açıklaması (Türkçe)
            </label>
            <textarea
              value={formData.description?.tr || ''}
              onChange={(e) => setFormData({ ...formData, description: { ...formData.description, tr: e.target.value, en: formData.description?.en || '' } })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Proje hakkında detaylı açıklama yazın..."
            />
          </div>

          {/* English Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Proje Açıklaması (İngilizce)
            </label>
            <textarea
              value={formData.description?.en || ''}
              onChange={(e) => setFormData({ ...formData, description: { tr: formData.description?.tr || '', en: e.target.value } })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Write detailed description about the project..."
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Slug (URL için)
            </label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Boş bırakılırsa otomatik oluşturulur"
            />
            <p className="mt-1 text-sm text-gray-500">Örnek: corporate-electrical-infrastructure</p>
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

          {/* Architect Info Section */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Mimar Bilgileri</h3>
            
            {/* Architect Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mimar İsmi
              </label>
              <input
                type="text"
                value={formData.architect?.name || ''}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  architect: { 
                    ...formData.architect!, 
                    name: e.target.value 
                  } 
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Örn: Mimar Adı Soyadı"
              />
              <p className="mt-1 text-sm text-gray-500">Projeyi tasarlayan mimar/mimarlık firması ismi</p>
            </div>

            {/* Architect Logo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mimar Logosu
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleArchitectLogoUpload}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {architectLogoPreview && (
                <div className="mt-4">
                  <img
                    src={architectLogoPreview}
                    alt="Mimar Logo Preview"
                    className="w-32 h-32 object-contain border border-gray-200 rounded-lg bg-white p-2"
                  />
                </div>
              )}
              <p className="mt-1 text-sm text-gray-500">Mimar/Mimarlık firmasının logosu (opsiyonel)</p>
            </div>
          </div>

          {/* Featured */}
          <div className="flex items-center border-t border-gray-200 pt-6">
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
              Projeyi Kaydet
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

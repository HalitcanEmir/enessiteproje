'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const t = useTranslations('contact');
  const tFooter = useTranslations('footer');
  const locale = useLocale();
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ company: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  // Placeholder phone and WhatsApp numbers (should be replaced with real ones)
  const phoneNumber = '+905551234567';
  const whatsappNumber = '+905551234567';
  const mapUrl = 'https://www.google.com/maps?q=Istanbul,Turkey';

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-16 md:py-20 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t('heading')}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Sentinel for Intersection Observer - detects when hero is scrolled past */}
      <div id="navbar-sentinel" className="absolute left-0 w-full h-1 pointer-events-none" style={{ top: 'calc(16rem + 5rem)' }} />

      {/* Main Content Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-900 via-gray-950 to-black relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 md:p-8 shadow-xl">
                {submitStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t('successTitle')}
                    </h3>
                    <p className="text-gray-300">{t('successMessage')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {submitStatus === 'error' && (
                      <div className="bg-amber-900/30 border border-amber-700/50 text-amber-200 px-4 py-3 rounded-lg text-sm">
                        {t('errorMessage')}
                      </div>
                    )}

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {t('company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all duration-200 text-white placeholder-gray-400"
                        placeholder={t('company')}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {t('email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all duration-200 text-white placeholder-gray-400"
                        placeholder={t('email')}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {t('phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all duration-200 text-white placeholder-gray-400"
                        placeholder="+90 5xx xxx xx xx"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {t('message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all duration-200 resize-none text-white placeholder-gray-400"
                        placeholder={t('message')}
                      />
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#3b82f6] hover:bg-[#2563eb] disabled:bg-[#3b82f6]/70 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            <span>{t('sending')}</span>
                          </>
                        ) : (
                          <span>{t('sendButton')}</span>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Quick Contact Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 md:p-8 shadow-xl">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {t('quickContact')}
                </h3>
                <div className="space-y-3">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-3 p-3 border border-white/20 rounded-lg hover:border-[#3b82f6] hover:bg-[#3b82f6]/10 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 bg-[#3b82f6]/20 rounded-lg flex items-center justify-center group-hover:bg-[#3b82f6] transition-colors duration-200">
                      <svg
                        className="w-5 h-5 text-[#3b82f6] group-hover:text-white transition-colors duration-200"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="font-medium text-white">{t('callButton')}</span>
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 border border-white/20 rounded-lg hover:border-[#3b82f6] hover:bg-[#3b82f6]/10 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 bg-[#3b82f6]/20 rounded-lg flex items-center justify-center group-hover:bg-[#3b82f6] transition-colors duration-200">
                      <svg
                        className="w-5 h-5 text-[#3b82f6] group-hover:text-white transition-colors duration-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <span className="font-medium text-white">{t('whatsappButton')}</span>
                  </a>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 md:p-8 shadow-xl">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {tFooter('contact')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#3b82f6] mt-0.5 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-400">{tFooter('email')}</p>
                      <a
                        href="mailto:info@example.com"
                        className="text-white hover:text-[#3b82f6] transition-colors duration-200"
                      >
                        info@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#3b82f6] mt-0.5 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-400">{tFooter('phone')}</p>
                      <a
                        href={`tel:${phoneNumber}`}
                        className="text-white hover:text-[#3b82f6] transition-colors duration-200"
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#3b82f6] mt-0.5 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-400">{tFooter('address')}</p>
                      <p className="text-white">{tFooter('addressValue')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#3b82f6] mt-0.5 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-400">{tFooter('workingHours')}</p>
                      <p className="text-white">{tFooter('workingHoursValue')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 md:p-8 shadow-xl">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {t('mapTitle')}
                </h3>
                <div className="relative h-48 bg-gray-800/50 rounded-lg overflow-hidden mb-4 border border-white/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-gray-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#60a5fa] font-medium transition-colors duration-200"
                >
                  <span>{t('mapButton')}</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

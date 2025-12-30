export interface Project {
  id: string;
  image: string;
  title: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  fullDescription?: {
    tr: string;
    en: string;
  };
  category?: {
    tr: string;
    en: string;
  };
}

export const featuredProjects: Project[] = [
  {
    id: 'project-1',
    image: '/images/projects/project-1.jpg',
    title: {
      tr: 'Kurumsal Elektrik Altyapı Projesi',
      en: 'Corporate Electrical Infrastructure Project',
    },
    description: {
      tr: 'Büyük ölçekli kurumsal tesisler için kapsamlı elektrik altyapı çözümleri ve uygulama hizmetleri',
      en: 'Comprehensive electrical infrastructure solutions and implementation services for large-scale corporate facilities',
    },
    category: {
      tr: 'Elektrik Altyapı',
      en: 'Electrical Infrastructure',
    },
  },
  {
    id: 'project-2',
    image: '/images/projects/project-2.jpg',
    title: {
      tr: 'Endüstriyel Elektronik Sistem Entegrasyonu',
      en: 'Industrial Electronic System Integration',
    },
    description: {
      tr: 'Modern endüstriyel tesisler için elektronik sistem entegrasyonu ve otomasyon çözümleri',
      en: 'Electronic system integration and automation solutions for modern industrial facilities',
    },
    category: {
      tr: 'Sistem Entegrasyonu',
      en: 'System Integration',
    },
  },
  {
    id: 'project-3',
    image: '/images/projects/project-3.jpg',
    title: {
      tr: 'Akıllı Bina Otomasyon ve Taahhüt Projesi',
      en: 'Smart Building Automation and Contracting Project',
    },
    description: {
      tr: 'Yenilikçi akıllı bina sistemleri, otomasyon ve bakım hizmetleri ile kapsamlı taahhüt çözümleri',
      en: 'Comprehensive contracting solutions with innovative smart building systems, automation and maintenance services',
    },
    category: {
      tr: 'Akıllı Bina Sistemleri',
      en: 'Smart Building Systems',
    },
  },
];


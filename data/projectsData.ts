export interface ProjectCard {
  slug: string;
  title: {
    tr: string;
    en: string;
  };
  location: {
    tr: string;
    en: string;
  };
  year: number;
  tags: {
    tr: string[];
    en: string[];
  };
  imageUrl: string;
  imageAlt: {
    tr: string;
    en: string;
  };
  status: 'ongoing' | 'completed';
  featured: boolean;
}

export const projectsData: ProjectCard[] = [
  {
    slug: 'corporate-electrical-infrastructure',
    title: {
      tr: 'Kurumsal Elektrik Altyapı Projesi',
      en: 'Corporate Electrical Infrastructure Project',
    },
    location: {
      tr: 'Ankara',
      en: 'Ankara',
    },
    year: 2024,
    tags: {
      tr: ['Taahhüt', 'Alçak Gerilim', 'Pano'],
      en: ['Contracting', 'Low Voltage', 'Panel'],
    },
    imageUrl: '/images/projects/project-1.jpg',
    imageAlt: {
      tr: 'Kurumsal elektrik altyapı projesi görseli',
      en: 'Corporate electrical infrastructure project image',
    },
    status: 'completed',
    featured: true,
  },
  {
    slug: 'industrial-system-integration',
    title: {
      tr: 'Endüstriyel Sistem Entegrasyonu',
      en: 'Industrial System Integration',
    },
    location: {
      tr: 'İstanbul',
      en: 'Istanbul',
    },
    year: 2024,
    tags: {
      tr: ['Sistem Entegrasyonu', 'Otomasyon'],
      en: ['System Integration', 'Automation'],
    },
    imageUrl: '/images/projects/project-2.jpg',
    imageAlt: {
      tr: 'Endüstriyel sistem entegrasyonu projesi görseli',
      en: 'Industrial system integration project image',
    },
    status: 'ongoing',
    featured: true,
  },
  {
    slug: 'smart-building-automation',
    title: {
      tr: 'Akıllı Bina Otomasyon Projesi',
      en: 'Smart Building Automation Project',
    },
    location: {
      tr: 'İzmir',
      en: 'Izmir',
    },
    year: 2023,
    tags: {
      tr: ['Akıllı Bina', 'Zayıf Akım', 'Taahhüt'],
      en: ['Smart Building', 'Weak Current', 'Contracting'],
    },
    imageUrl: '/images/projects/project-3.jpg',
    imageAlt: {
      tr: 'Akıllı bina otomasyon projesi görseli',
      en: 'Smart building automation project image',
    },
    status: 'completed',
    featured: true,
  },
  {
    slug: 'data-center-electrical',
    title: {
      tr: 'Veri Merkezi Elektrik Projesi',
      en: 'Data Center Electrical Project',
    },
    location: {
      tr: 'Ankara',
      en: 'Ankara',
    },
    year: 2023,
    tags: {
      tr: ['Yüksek Gerilim', 'Pano', 'Taahhüt'],
      en: ['High Voltage', 'Panel', 'Contracting'],
    },
    imageUrl: '/images/projects/project-1.jpg',
    imageAlt: {
      tr: 'Veri merkezi elektrik projesi görseli',
      en: 'Data center electrical project image',
    },
    status: 'completed',
    featured: false,
  },
  {
    slug: 'hospital-electronic-systems',
    title: {
      tr: 'Hastane Elektronik Sistemleri',
      en: 'Hospital Electronic Systems',
    },
    location: {
      tr: 'Bursa',
      en: 'Bursa',
    },
    year: 2024,
    tags: {
      tr: ['Zayıf Akım', 'Elektronik Sistemler'],
      en: ['Weak Current', 'Electronic Systems'],
    },
    imageUrl: '/images/projects/project-2.jpg',
    imageAlt: {
      tr: 'Hastane elektronik sistemleri projesi görseli',
      en: 'Hospital electronic systems project image',
    },
    status: 'ongoing',
    featured: false,
  },
  {
    slug: 'shopping-mall-electrical',
    title: {
      tr: 'AVM Elektrik Taahhüt Projesi',
      en: 'Shopping Mall Electrical Contracting Project',
    },
    location: {
      tr: 'İstanbul',
      en: 'Istanbul',
    },
    year: 2023,
    tags: {
      tr: ['Taahhüt', 'Alçak Gerilim', 'Aydınlatma'],
      en: ['Contracting', 'Low Voltage', 'Lighting'],
    },
    imageUrl: '/images/projects/project-3.jpg',
    imageAlt: {
      tr: 'AVM elektrik taahhüt projesi görseli',
      en: 'Shopping mall electrical contracting project image',
    },
    status: 'completed',
    featured: false,
  },
];


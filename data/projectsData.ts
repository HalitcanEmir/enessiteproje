export interface ProjectCard {
  slug: string;
  title: {
    tr: string;
    en: string;
  };
  description?: {
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
    description: {
      tr: 'Ankara\'da bulunan büyük ölçekli kurumsal bina için elektrik altyapı projesi. Alçak gerilim sistemleri, pano montajı ve elektrik taahhüt işlerini kapsayan kapsamlı bir projedir.',
      en: 'Electrical infrastructure project for a large-scale corporate building in Ankara. A comprehensive project covering low voltage systems, panel assembly, and electrical contracting work.',
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
    description: {
      tr: 'İstanbul\'daki endüstriyel tesiste kapsamlı sistem entegrasyonu ve otomasyon çözümleri. Modern üretim süreçleri için akıllı sistemler ve kontrol panelleri kurulumu.',
      en: 'Comprehensive system integration and automation solutions at an industrial facility in Istanbul. Installation of smart systems and control panels for modern production processes.',
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
    description: {
      tr: 'İzmir\'de modern ofis binası için akıllı bina otomasyon sistemleri. Zayıf akım sistemleri, güvenlik, aydınlatma ve iklim kontrol sistemlerinin entegrasyonu.',
      en: 'Smart building automation systems for a modern office building in Izmir. Integration of weak current systems, security, lighting, and climate control systems.',
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
    description: {
      tr: 'Ankara\'da yeni veri merkezi için yüksek gerilim sistemleri ve güç dağıtım panoları kurulumu. Kesintisiz güç kaynakları ve yedekleme sistemleri ile kritik altyapı.',
      en: 'Installation of high voltage systems and power distribution panels for a new data center in Ankara. Critical infrastructure with uninterruptible power supplies and backup systems.',
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
    description: {
      tr: 'Bursa\'da özel hastane için elektronik sistemler ve zayıf akım altyapısı. Hasta takip sistemleri, iletişim ağları ve güvenlik sistemlerinin kurulumu.',
      en: 'Electronic systems and weak current infrastructure for a private hospital in Bursa. Installation of patient monitoring systems, communication networks, and security systems.',
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
    description: {
      tr: 'İstanbul\'da büyük alışveriş merkezi için elektrik taahhüt işleri. Alçak gerilim sistemleri, dekoratif aydınlatma ve enerji yönetim sistemleri.',
      en: 'Electrical contracting work for a large shopping mall in Istanbul. Low voltage systems, decorative lighting, and energy management systems.',
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


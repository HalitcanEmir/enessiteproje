export interface ServiceItem {
  title: {
    tr: string;
    en: string;
  };
  href: string;
  icon: string;
}

export const servicesMenu: ServiceItem[] = [
  {
    title: {
      tr: 'Elektrik Taahhüt',
      en: 'Electrical Contracting',
    },
    href: '/services/electrical-contracting',
    icon: '⚡',
  },
  {
    title: {
      tr: 'Elektronik Sistemler',
      en: 'Electronic Systems',
    },
    href: '/services/electronic-systems',
    icon: '🔌',
  },
  {
    title: {
      tr: 'Akıllı Bina Sistemleri',
      en: 'Smart Building Systems',
    },
    href: '/services/smart-building',
    icon: '🏢',
  },
  {
    title: {
      tr: 'Zayıf Akım Sistemleri',
      en: 'Weak Current Systems',
    },
    href: '/services/weak-current',
    icon: '📡',
  },
  {
    title: {
      tr: 'Bakım ve Onarım',
      en: 'Maintenance & Repair',
    },
    href: '/services/maintenance',
    icon: '🔧',
  },
  {
    title: {
      tr: 'Proje Yönetimi',
      en: 'Project Management',
    },
    href: '/services/project-management',
    icon: '📋',
  },
];


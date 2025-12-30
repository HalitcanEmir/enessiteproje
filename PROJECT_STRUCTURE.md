# Proje Yapısı ve Planı

## 📁 Klasör Yapısı

```
enesproje/
├── app/
│   ├── [locale]/              # Dil bazlı route'lar (TR/EN)
│   │   ├── layout.tsx         # Locale layout (Navbar + Footer)
│   │   ├── page.tsx           # Ana sayfa (/tr, /en)
│   │   ├── about/
│   │   │   └── page.tsx       # Hakkımızda
│   │   ├── services/
│   │   │   └── page.tsx       # Hizmetlerimiz
│   │   ├── projects/
│   │   │   └── page.tsx       # Projelerimiz
│   │   └── contact/
│   │       └── page.tsx       # İletişim
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global Tailwind stilleri
├── components/
│   ├── Navbar.tsx             # Navigasyon menüsü (dil değiştirme dahil)
│   └── Footer.tsx             # Footer bileşeni
├── messages/
│   ├── tr.json                # Türkçe çeviriler
│   └── en.json                # İngilizce çeviriler
├── i18n.ts                    # next-intl yapılandırması
├── middleware.ts              # Dil yönlendirme middleware'i
├── tailwind.config.ts         # Tailwind CSS yapılandırması
├── next.config.js             # Next.js yapılandırması
└── package.json               # Bağımlılıklar
```

## 🛣️ Route Yapısı

### Türkçe (TR)
- `/tr` - Ana sayfa
- `/tr/about` - Hakkımızda
- `/tr/services` - Hizmetlerimiz
- `/tr/projects` - Projelerimiz
- `/tr/contact` - İletişim

### İngilizce (EN)
- `/en` - Home
- `/en/about` - About Us
- `/en/services` - Services
- `/en/projects` - Projects
- `/en/contact` - Contact

## 🌐 i18n Yaklaşımı

**Kullanılan Kütüphane:** `next-intl`

**Neden next-intl?**
1. ✅ Next.js App Router ile tam uyumlu
2. ✅ Server Components desteği
3. ✅ SEO dostu URL yapısı (`/tr/...`, `/en/...`)
4. ✅ Type-safe çeviriler
5. ✅ Kolay kullanım ve yönetim
6. ✅ Middleware ile otomatik dil yönlendirme

**Çalışma Prensibi:**
- `middleware.ts` tüm istekleri yakalar ve dil prefix'ini kontrol eder
- `app/[locale]/` klasörü dinamik locale parametresini alır
- `messages/tr.json` ve `messages/en.json` dosyaları çevirileri içerir
- `useTranslations()` hook'u ile client component'lerde çeviriler kullanılır
- `getTranslations()` ile server component'lerde çeviriler kullanılır

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Primary (Mavi):** `#1e40af` - Ana marka rengi
- **Primary Dark:** `#1e3a8a` - Koyu ton
- **Primary Light:** `#3b82f6` - Açık ton
- **Secondary (Siyah):** `#000000` - Metin ve vurgular
- **Accent:** `#2563eb` - Hover ve etkileşimler

### Animasyonlar
- **Framer Motion** kullanılıyor
- Kurumsal ve abartısız animasyonlar
- Hover efektleri, giriş geçişleri, section reveal
- Performans odaklı (viewport-based animations)

## 📱 Responsive Tasarım

- **Mobile First** yaklaşım
- Breakpoints:
  - Mobile: `< 768px`
  - Tablet: `768px - 1024px`
  - Desktop: `> 1024px`
- Tailwind CSS responsive utility classes kullanılıyor

## 🔧 Teknik Detaylar

### Bağımlılıklar
```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "next-intl": "^3.0.0",
  "framer-motion": "^10.16.0",
  "tailwindcss": "^3.3.0",
  "typescript": "^5.0.0"
}
```

### Özellikler
- ✅ TypeScript strict mode
- ✅ ESLint yapılandırması
- ✅ App Router (Next.js 13+)
- ✅ Server ve Client Components
- ✅ SEO optimizasyonu (metadata API)
- ✅ Font optimizasyonu (Inter)

## 🚀 Geliştirme Adımları

1. **Bağımlılıkları yükle:**
   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlat:**
   ```bash
   npm run dev
   ```

3. **Build al:**
   ```bash
   npm run build
   ```

4. **Production çalıştır:**
   ```bash
   npm start
   ```

## 📝 Yeni Sayfa Ekleme

1. `app/[locale]/` altında yeni klasör oluştur
2. `page.tsx` dosyası ekle
3. `messages/tr.json` ve `messages/en.json` dosyalarına çevirileri ekle
4. `components/Navbar.tsx` içinde menüye link ekle

## 🔄 Çeviri Ekleme

`messages/tr.json` ve `messages/en.json` dosyalarını düzenle:

```json
{
  "newSection": {
    "title": "Başlık",
    "description": "Açıklama"
  }
}
```

Kullanım (Client Component):
```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function MyPage() {
  const t = useTranslations('newSection');
  return <h1>{t('title')}</h1>;
}
```

Kullanım (Server Component):
```tsx
import { getTranslations } from 'next-intl/server';

export default async function MyPage() {
  const t = await getTranslations('newSection');
  return <h1>{t('title')}</h1>;
}
```

## 🎯 Sonraki Adımlar

1. Logo ve marka bilgilerini güncelle
2. Gerçek içerikleri ekle
3. Proje galerisi ekle
4. İletişim formu backend entegrasyonu
5. SEO metadata'ları optimize et
6. Analytics entegrasyonu
7. Performans optimizasyonu


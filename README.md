# Kurumsal Elektrik-Elektronik Web Sitesi

Next.js 14, TypeScript, Tailwind CSS ve Framer Motion kullanılarak geliştirilmiş çok dilli kurumsal web sitesi.

## Teknoloji Stack

- **Framework:** Next.js 14 (App Router)
- **Dil:** TypeScript
- **Stil:** Tailwind CSS
- **Animasyon:** Framer Motion
- **i18n:** next-intl
- **SEO:** Next.js Metadata API

## Özellikler

- ✅ Çok dilli destek (Türkçe/İngilizce)
- ✅ Responsive tasarım (mobil/tablet/desktop)
- ✅ SEO optimizasyonu
- ✅ Kurumsal ve modern tasarım
- ✅ Performanslı animasyonlar
- ✅ Mavi + siyah renk paleti

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcıda açın: [http://localhost:3000](http://localhost:3000)

## Proje Yapısı

```
enesproje/
├── app/
│   ├── [locale]/          # Dil bazlı route'lar
│   │   ├── layout.tsx     # Locale layout
│   │   ├── page.tsx       # Ana sayfa
│   │   ├── about/         # Hakkımızda
│   │   ├── services/      # Hizmetler
│   │   ├── projects/      # Projeler
│   │   └── contact/       # İletişim
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global stiller
├── components/
│   ├── Navbar.tsx         # Navigasyon
│   └── Footer.tsx         # Footer
├── messages/
│   ├── tr.json           # Türkçe çeviriler
│   └── en.json           # İngilizce çeviriler
├── i18n.ts               # i18n yapılandırması
├── middleware.ts         # Next-intl middleware
└── tailwind.config.ts    # Tailwind yapılandırması
```

## Route Yapısı

- `/tr` - Türkçe ana sayfa
- `/en` - İngilizce ana sayfa
- `/tr/about` - Türkçe hakkımızda
- `/en/about` - İngilizce hakkımızda
- `/tr/services` - Türkçe hizmetler
- `/en/services` - İngilizce hizmetler
- `/tr/projects` - Türkçe projeler
- `/en/projects` - İngilizce projeler
- `/tr/contact` - Türkçe iletişim
- `/en/contact` - İngilizce iletişim

## i18n Yaklaşımı

Proje `next-intl` kullanıyor çünkü:
- Next.js App Router ile tam uyumlu
- Server Components desteği
- SEO dostu URL yapısı (`/tr/...`, `/en/...`)
- Type-safe çeviriler
- Kolay kullanım ve yönetim

## Renk Paleti

- **Primary (Mavi):** `#1e40af` (ana renk)
- **Secondary (Siyah):** `#000000` (metin ve vurgular)
- **Accent:** `#2563eb` (hover ve etkileşimler)

## Geliştirme

### Yeni sayfa ekleme

1. `app/[locale]/` altında yeni klasör oluşturun
2. `page.tsx` dosyası ekleyin
3. `messages/tr.json` ve `messages/en.json` dosyalarına çevirileri ekleyin

### Çeviri ekleme

`messages/tr.json` ve `messages/en.json` dosyalarını düzenleyin:

```json
{
  "newSection": {
    "title": "Başlık",
    "description": "Açıklama"
  }
}
```

Kullanım:
```tsx
const t = useTranslations('newSection');
<h1>{t('title')}</h1>
```

## Build

```bash
npm run build
npm start
```

## Lisans

Özel proje - Tüm hakları saklıdır.


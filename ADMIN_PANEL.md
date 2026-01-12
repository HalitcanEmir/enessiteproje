# Admin Panel Kullanım Kılavuzu

## 🔐 Giriş Bilgileri

Admin paneline erişmek için:
- **URL:** `http://localhost:3000/tr/admin`
- **Şifre:** `admin123`

## 📋 Özellikler

### ✅ Tamamlanan Özellikler

1. **Kimlik Doğrulama Sistemi**
   - Basit şifre tabanlı giriş
   - LocalStorage ile oturum yönetimi

2. **Proje Listesi**
   - Tüm projeleri görüntüleme
   - Görsel önizleme
   - Durum göstergesi (Tamamlandı/Devam Ediyor)
   - Öne çıkan proje işareti

3. **Proje Ekleme**
   - Türkçe ve İngilizce başlık
   - Lokasyon bilgisi (iki dilde)
   - Yıl seçimi
   - Etiketler (virgülle ayrılmış)
   - Resim yükleme (Base64)
   - Görsel alt metni
   - Proje durumu (Devam Ediyor/Tamamlandı)
   - Öne çıkan proje işareti

4. **Proje Düzenleme**
   - Mevcut proje bilgilerini düzenleme
   - Yeni resim yükleme
   - Tüm alanları güncelleme

5. **Proje Silme**
   - Onay ile güvenli silme

6. **Resim Yükleme**
   - Drag & drop veya dosya seçimi
   - Anlık önizleme
   - Base64 formatında kayıt

## 🚀 Kullanım

### Admin Paneline Giriş

1. Tarayıcınızda `http://localhost:3000/tr/admin` adresine gidin
2. Şifre: `admin123` girin
3. "Giriş Yap" butonuna tıklayın

### Yeni Proje Ekleme

1. Admin panelinde "Yeni Proje Ekle" butonuna tıklayın
2. Formu doldurun:
   - **Proje Görseli:** Resim yükleyin (zorunlu)
   - **Başlık (TR/EN):** İki dilde proje adı (zorunlu)
   - **Slug:** URL için (otomatik oluşturulur)
   - **Lokasyon (TR/EN):** Şehir bilgisi (zorunlu)
   - **Yıl:** Proje yılı (zorunlu)
   - **Etiketler (TR/EN):** Virgülle ayırın (opsiyonel)
   - **Alt Metin (TR/EN):** Görsel açıklaması (zorunlu)
   - **Durum:** Devam Ediyor/Tamamlandı
   - **Öne Çıkan:** Ana sayfada gösterilsin mi?
3. "Projeyi Kaydet" butonuna tıklayın

### Proje Düzenleme

1. Proje listesinde düzenlemek istediğiniz projenin yanındaki "Düzenle" linkine tıklayın
2. Formu güncelleyin
3. "Değişiklikleri Kaydet" butonuna tıklayın

### Proje Silme

1. Proje listesinde silmek istediğiniz projenin yanındaki "Sil" linkine tıklayın
2. Onay mesajını kabul edin

## 💾 Veri Saklama

**Mevcut Sistem:** LocalStorage
- Tüm projeler tarayıcının localStorage'ında saklanır
- Değişiklikler anında yansır
- Tarayıcı verisi silinirse projeler kaybolur

**Not:** Gerçek üretim ortamı için bir veritabanı entegrasyonu önerilir (MongoDB, PostgreSQL, vb.)

## 📁 Dosya Yapısı

```
app/
├── [locale]/
│   ├── admin/
│   │   ├── page.tsx                    # Giriş sayfası
│   │   ├── layout.tsx                  # Admin layout
│   │   └── projects/
│   │       ├── page.tsx               # Proje listesi
│   │       ├── new/
│   │       │   └── page.tsx           # Yeni proje
│   │       └── edit/
│   │           └── [slug]/
│   │               └── page.tsx       # Proje düzenle
│   └── projects/
│       └── page.tsx                    # Güncellenmiş (localStorage okur)
└── api/
    └── projects/
        ├── route.ts                    # GET/POST endpoints
        └── [slug]/
            └── route.ts                # GET/PUT/DELETE endpoints
```

## 🔒 Güvenlik Notları

**ÖNEMLİ:** Mevcut sistem demo amaçlıdır. Üretim için:

1. ✅ Gerçek kimlik doğrulama sistemi kullanın (NextAuth.js, Auth0, vb.)
2. ✅ API endpoint'lerini koruyun
3. ✅ Resim yüklemeyi sunucu tarafında yapın
4. ✅ Veritabanı kullanın (MongoDB, PostgreSQL, Supabase, vb.)
5. ✅ HTTPS kullanın
6. ✅ Rate limiting ekleyin
7. ✅ Input validation yapın
8. ✅ XSS ve CSRF koruması ekleyin

## 🎨 Resim Yükleme

Resimler şu an Base64 formatında localStorage'a kaydediliyor. Bu yaklaşım:

**Avantajları:**
- Hızlı prototipleme
- Sunucu gereksiz
- Basit implementasyon

**Dezavantajları:**
- Büyük dosyalar için performans sorunu
- Depolama sınırı (5-10MB)
- Tarayıcıya bağımlı

**Üretim İçin Öneriler:**
- Cloudinary
- AWS S3
- Vercel Blob Storage
- Supabase Storage

## 🔧 Geliştirme Önerileri

### Veritabanı Entegrasyonu

**Supabase ile Örnek:**

```bash
npm install @supabase/supabase-js
```

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

### NextAuth.js ile Authentication

```bash
npm install next-auth
```

## 📱 Mobil Uyumluluk

Admin paneli responsive tasarıma sahiptir:
- ✅ Mobil cihazlarda kullanılabilir
- ✅ Tablet uyumlu
- ✅ Masaüstü optimize

## 🐛 Sorun Giderme

### Projeler Görünmüyor
- Tarayıcı console'unu kontrol edin
- LocalStorage'ı temizleyin ve sayfayı yenileyin
- Giriş yapmış olduğunuzdan emin olun

### Resim Yüklenmiyor
- Dosya boyutunu kontrol edin (maks 10MB önerilir)
- Desteklenen formatlar: JPG, PNG, GIF, WebP
- Tarayıcı console'unda hata mesajlarını kontrol edin

### Değişiklikler Yansımıyor
- Sayfayı yenileyin (Ctrl/Cmd + R)
- LocalStorage'ı kontrol edin (F12 > Application > Local Storage)
- Farklı sekme açmayı deneyin

## 📞 Destek

Herhangi bir sorunla karşılaşırsanız:
1. Browser console'u kontrol edin (F12)
2. Network tab'ı inceleyin
3. LocalStorage verilerini kontrol edin

## 🚀 Sonraki Adımlar

1. **Veritabanı:** MongoDB veya PostgreSQL entegrasyonu
2. **Authentication:** NextAuth.js ile güvenli giriş
3. **Resim Upload:** Cloudinary veya S3 entegrasyonu
4. **SEO:** Metadata yönetimi
5. **Analytics:** Proje görüntülenme istatistikleri
6. **Çoklu Kullanıcı:** Rol bazlı yetkilendirme
7. **Bulk Upload:** Toplu proje ekleme
8. **Kategori Yönetimi:** Proje kategorileri
9. **Sürükleme:** Proje sıralaması
10. **Galeri:** Her proje için çoklu resim

## 📝 Lisans

Bu admin paneli proje için özel olarak geliştirilmiştir.

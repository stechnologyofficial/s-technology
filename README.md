# S-Technology

Modern, modüler ve kullanıcı dostu web teknolojileri platformu. Araçlar ve oyunlar için açık kaynak çözümler.

## 🚀 Özellikler

- **Modern Tasarım**: Dark tema, gradient efektler ve glassmorphism
- **Modüler Yapı**: Temiz kod prensipleri ile geliştirilmiş bileşenler
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Performanslı**: React 19 + Vite ile optimize edilmiş
- **GitHub Pages Uyumlu**: Statik site olarak kolayca deploy edilebilir

## 🛠️ Teknolojiler

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: Wouter

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
pnpm install

# Geliştirme sunucusunu başlat
pnpm dev

# Production build oluştur
pnpm build

# Build'i önizle
pnpm preview
```

## 🌐 GitHub Pages Deployment

### 1. Vite Config Güncelleme

`vite.config.ts` dosyasında `base` parametresini repository adınızla güncelleyin:

```typescript
export default defineConfig({
  base: '/repository-adi/', // GitHub repo adınız
  // ... diğer ayarlar
});
```

### 2. GitHub Actions ile Otomatik Deploy

`.github/workflows/deploy.yml` dosyası otomatik deployment için hazır. Sadece GitHub repository ayarlarından:

1. **Settings** → **Pages** → **Source** → **GitHub Actions** seçin
2. Her `main` branch'e push'ta otomatik deploy olacak

### 3. Manuel Deploy

```bash
# Build oluştur
pnpm build

# dist/public klasörünü gh-pages branch'ine push et
pnpm deploy
```

## 📁 Proje Yapısı

```
s-technology/
├── client/
│   ├── public/          # Statik dosyalar
│   └── src/
│       ├── components/  # Yeniden kullanılabilir bileşenler
│       │   ├── ui/      # shadcn/ui bileşenleri
│       │   ├── Header.tsx
│       │   └── Footer.tsx
│       ├── pages/       # Sayfa bileşenleri
│       │   ├── Home.tsx
│       │   ├── Tools.tsx
│       │   └── Games.tsx
│       ├── App.tsx      # Ana uygulama
│       └── index.css    # Global stiller
├── vite.config.ts       # Vite yapılandırması
└── package.json
```

## 🎨 Tasarım Sistemi

### Renk Paleti

- **Primary**: Mavi tonları (oklch(0.65 0.25 240))
- **Secondary**: Mor tonları (oklch(0.6 0.2 300))
- **Accent**: Yeşil tonları (oklch(0.65 0.22 160))

### Tipografi

- **Font**: Inter (Sans-serif)
- **Mono**: JetBrains Mono

### Animasyonlar

- `animate-gradient`: Gradient animasyonu
- `animate-float`: Yüzen animasyon
- `animate-glow`: Işıltı efekti
- `animate-slide-up`: Yukarı kayma

## 🔧 Geliştirme

### Yeni Araç Ekleme

`client/src/pages/Tools.tsx` dosyasındaki `tools` array'ine yeni araç ekleyin:

```typescript
{
  id: "tool-id",
  title: "Araç Adı",
  description: "Araç açıklaması",
  tags: ["Tag1", "Tag2"],
  status: "active", // veya "beta", "coming-soon"
  icon: <IconComponent className="w-6 h-6" />,
}
```

### Yeni Oyun Ekleme

`client/src/pages/Games.tsx` dosyasındaki `games` array'ine yeni oyun ekleyin:

```typescript
{
  id: "game-id",
  title: "Oyun Adı",
  description: "Oyun açıklaması",
  genre: ["Genre1", "Genre2"],
  status: "live", // veya "beta", "coming-soon"
  icon: <IconComponent className="w-6 h-6" />,
}
```

## 📝 Lisans

Bu proje açık kaynak kodludur ve MIT lisansı altında sunulmaktadır.

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Pull request göndermekten çekinmeyin.

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📧 İletişim

Sorularınız için issue açabilir veya contact@s-technology.dev adresinden iletişime geçebilirsiniz.

---

**S-Technology** ile modern web teknolojilerini keşfedin! 🚀

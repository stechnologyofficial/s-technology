# YouTube Live Tracker - Proje Analizi

## 📋 Genel Bilgiler

### Proje İsmi
**YouTube Live Tracker** (YouTube Canlı Yayın Takip Aracı)

### Versiyon
1.0.0

### Lisans
MIT License

### Ürün İsmi
YouTube Live Tracker

---

## 🎯 Kullanım Amacı

YouTube Live Tracker, YouTube canlı yayınlarını takip etmek ve görsel overlay'ler oluşturmak için geliştirilmiş profesyonel bir masaüstü uygulamasıdır. Ana amaçları:

1. **Canlı Yayın Takibi**: YouTube canlı yayınlarındaki chat mesajlarını, süper chat'leri ve abonelik bildirimlerini gerçek zamanlı olarak yakalama ve görüntüleme
2. **Overlay Sistemi**: Streaming yazılımları (OBS, Streamlabs, vb.) ile kullanılabilecek şeffaf overlay pencereleri oluşturma
3. **Görsel Özelleştirme**: Overlay'lerde görüntülenen mesajların, medya içeriklerinin ve istatistiklerin tam özelleştirilmesi
4. **Proje Yönetimi**: Overlay'ler için kullanılan medya dosyalarını (resim, video, ses) yönetme
5. **Çoklu Dil Desteği**: 12 farklı dilde kullanıcı arayüzü desteği

---

## ✨ Özellikler

### 1. Canlı Yayın Özellikleri

#### YouTube Entegrasyonu
- **Canlı Chat Takibi**: Gerçek zamanlı chat mesajlarını yakalama ve görüntüleme
- **Süper Chat Desteği**: Ücretli mesajları (Super Chat) özel olarak gösterme
- **Abonelik Bildirimleri**: Yeni abonelerin bildirimlerini alma ve görüntüleme
- **API Key Desteği**: İsteğe bağlı YouTube Data API v3 anahtarı ile gelişmiş özellikler
- **Video ID Çıkarımı**: URL'den otomatik video ID tespit etme
- **Otomatik Yeniden Bağlanma**: Bağlantı koptuğunda otomatik yeniden bağlanma

#### Streamlabs Entegrasyonu
- Streamlabs Socket Token ile bağlantı
- Abonelik bildirimlerini Streamlabs üzerinden alma
- Bağlantı durumu takibi

#### YouTube İstatistikleri
- **Beğeni Sayısı**: `<webapi link="youtube:likes" t=30>`
- **Canlı İzleyici Sayısı**: `<webapi link="youtube:viewers" t=10>`
- **Toplam Görüntülenme**: `<webapi link="youtube:views" t=60>`
- **Kanal Abone Sayısı**: `<webapi link="youtube:subscribers" t=120>`
- **Yayın Başlığı**: `<webapi link="youtube:title" t=120>`
- **Kanal İsmi**: `<webapi link="youtube:channel" t=60>`
- **Kanal ID ve Video ID**: Görüntüleme desteği

### 2. Overlay Editör Sistemi

#### Layer Tipleri
1. **ChatBox Layer**: Chat mesajlarının görüntülendiği layer
2. **Subscriber Layer**: Abonelik bildirimlerinin gösterildiği layer
3. **Rich Text Layer**: Özelleştirilebilir metin layer'ı
   - Icon desteği (`<icon path='el' size=1>`)
   - Web API entegrasyonu (`<webapi link='api.com' t=10>`)
   - Çoklu shadow desteği
   - Outline (kenarlık) özellikleri
   - Fill (dolgu) özellikleri
   - Text properties (kalın, italik, alt çizgili, üstü çizgili)
4. **Camera Layer**: Webcam/kamera akışı görüntüleme
5. **Media Layer**: Video, resim ve ses dosyalarını oynatma
   - Video döngü desteği
   - Poster resmi
   - Object-fit seçenekleri (contain, cover, fill, none)
   - En-boy oranı koruma

#### Overlay Özellikleri
- **Çoklu Ekran Desteği**: Farklı ekranlara overlay yerleştirme
- **Z-Index Yönetimi**: Layer'ların sıralama önceliği
- **Şeffaflık Kontrolü**: 0-100% arası opacity ayarı
- **Pozisyon ve Boyut**: X, Y koordinatları ve genişlik/yükseklik ayarları
- **Hizalama Araçları**: 9 noktalı hizalama grid'i (Unity tarzı)
- **Sürükle-Bırak**: Canvas üzerinde layer'ları sürükleyerek konumlandırma
- **Görünürlük ve Kilit**: Layer'ları gizleme ve kilitleme
- **Gerçek Zamanlı Önizleme**: Overlay pencerelerinde anlık görüntüleme

### 3. Görüntüleme Ayarları

- **Font Boyutu**: Mesajlar için özelleştirilebilir font boyutu
- **Şeffaflık**: Mesaj arka plan şeffaflığı
- **Animasyonlar**: Mesaj giriş/çıkış animasyonları
- **Süre Ayarları**: Mesajların ekranda kalma süresi
- **Filtreleme**: Chat, Super Chat ve Membership mesajlarını ayrı ayrı göster/gizle
- **Stil Özelleştirmeleri**: Renk, arka plan, kenarlık ayarları

### 4. Proje Yönetimi

#### Dosya Yönetimi
- **Dosya Yükleme**: Sürükle-bırak ile medya dosyası yükleme
- **Klasör Yönetimi**: Klasör oluşturma ve yönetme
- **Dosya İşlemleri**:
  - Silme
  - Yeniden adlandırma
  - Taşıma
  - İndirme
- **Recursive Dosya Arama**: Icon dosyalarını recursive olarak arama
- **Dosya Önizleme**: Resim ve video dosyalarını önizleme

#### Proje Paneli
- Dosya tarayıcısı
- Drag & drop desteği
- Dosya operasyonları (sil, yeniden adlandır, taşı)
- Medya dosyası yönetimi

### 5. Çoklu Dil Desteği (i18n)

Desteklenen diller:
- 🇹🇷 Türkçe (tr)
- 🇬🇧 İngilizce (en)
- 🇩🇪 Almanca (de)
- 🇫🇷 Fransızca (fr)
- 🇪🇸 İspanyolca (es)
- 🇮🇹 İtalyanca (it)
- 🇷🇺 Rusça (ru)
- 🇯🇵 Japonca (ja)
- 🇰🇷 Korece (ko)
- 🇵🇹 Portekizce (pt)
- 🇨🇳 Çince (zh)
- 🇸🇦 Arapça (ar)

### 6. Kullanıcı Arayüzü

#### Tab Sistemi
1. **Yayın Ayarları** (Stream Settings): YouTube bağlantı ayarları
2. **Görünüm Ayarları** (Display Settings): Mesaj görüntüleme ayarları
3. **Tercihler** (Preferences): Genel uygulama tercihleri
4. **Overlay Editörü** (Overlay Editor): Layer yönetimi ve düzenleme
5. **Project**: Dosya yönetimi paneli
6. **Canlı Önizleme** (Live Preview): Mesajların gerçek zamanlı önizlemesi

#### Modern UI Özellikleri
- Unity tarzı Inspector paneli
- Canvas tabanlı overlay editörü
- Layer hiyerarşisi görünümü
- Gerçek zamanlı önizleme
- Responsive tasarım
- Özel title bar (minimize, maximize, close)
- Koyu/açık tema desteği

---

## 🛠 Teknoloji Yığını

### Backend (Node.js)
- **Express.js** (v4.18.2): HTTP sunucu ve RESTful API
- **WebSocket (ws)** (v8.14.2): Gerçek zamanlı iletişim
- **@hitomaru/masterchat** (v1.3.0): YouTube chat API entegrasyonu
- **Axios** (v1.6.0): HTTP istekleri
- **Multer** (v1.4.5-lts.1): Dosya yükleme işlemleri
- **dotenv** (v16.3.1): Ortam değişkenleri
- **font-list** (v1.5.1): Sistem font listesi
- **socket.io-client** (v4.7.5): Streamlabs entegrasyonu (opsiyonel)
- **png-to-ico** (v2.1.8): Icon dönüştürme

### Frontend
- **Vanilla JavaScript** (ES6+ Modülleri): Modern JavaScript modül sistemi
- **HTML5/CSS3**: Modern web teknolojileri
- **Canvas API**: Overlay editör canvas çizimi

### Desktop Framework
- **Electron** (v27.0.0): Masaüstü uygulama framework'ü
- **Electron Builder** (v24.6.4): Uygulama paketleme
- **IPC (Inter-Process Communication)**: Electron IPC ile backend-frontend iletişimi

### Geliştirme Araçları
- **Concurrently** (v8.2.2): Paralel komut çalıştırma
- **Wait-on** (v7.2.0): Sunucu hazır olana kadar bekleme

---

## 🏗 Mimari Yapı

### Modüler Mimari

Proje, modüler bir yapıya sahiptir. Orijinal 1028 satırlık `app.js` dosyası şu modüllere bölünmüştür:

#### Frontend Modülleri

1. **WebSocketManager** (`modules/websocket.js`)
   - WebSocket bağlantı yönetimi
   - Mesaj kuyruğu işleme
   - Otomatik yeniden bağlanma

2. **MessageManager** (`modules/messages.js`)
   - Chat mesajları görüntüleme
   - Superchat ve membership mesajları
   - HTML escape ve güvenlik

3. **SettingsManager** (`modules/settings.js`)
   - Ayarların localStorage'da saklanması
   - Ayar güncelleme ve yönetimi
   - Önizleme stili uygulama

4. **LayerManager** (`modules/layers.js`)
   - Overlay editör layer sistemi
   - Sürükle-bırak işlemleri
   - Layer görünürlük ve kilit yönetimi
   - Canvas üzerinde layer manipülasyonu

5. **UIManager** (`modules/ui.js`)
   - Kullanıcı arayüzü güncellemeleri
   - Tab sistemi yönetimi
   - Durum mesajları
   - Form yönetimi

6. **PreferencesManager** (`modules/PreferencesManager.js`)
   - Tercih ayarları yönetimi

7. **DisplaySettingsManager** (`modules/DisplaySettingsManager.js`)
   - Görüntüleme ayarları yönetimi

8. **StreamSettingsManager** (`modules/StreamSettingsManager.js`)
   - Yayın ayarları yönetimi

9. **ProjectManager** (`modules/ProjectManager.js`)
   - Proje dosya yönetimi

10. **ComponentManager** (`modules/ComponentManager.js`)
    - Overlay component'leri yönetimi

#### Backend Modülleri

1. **YouTubeService** (`server/youtube-service.js`)
   - YouTube canlı yayın bağlantısı
   - Chat mesajlarını yakalama
   - Super Chat ve Membership bildirimleri

2. **YouTubeStatsService** (`server/youtube-stats-service.js`)
   - YouTube istatistiklerini çekme (beğeni, izleyici, vb.)
   - API cache yönetimi

3. **StreamlabsService** (`server/streamlabs-service.js`)
   - Streamlabs Socket bağlantısı
   - Abonelik bildirimlerini alma

4. **FileManagerService** (`server/file-manager-service.js`)
   - Dosya yükleme, silme, taşıma işlemleri
   - Klasör yönetimi
   - Recursive dosya arama

### İletişim Katmanları

1. **HTTP REST API**: Express.js ile RESTful endpoint'ler
2. **WebSocket**: Gerçek zamanlı mesaj iletimi
3. **Electron IPC**: Main process ile renderer process arası iletişim

---

## 📁 Proje Yapısı

```
youtube-live-tracker/
├── assets/                          # Uygulama varlıkları
│   ├── icon.ico                     # Uygulama ikonu
│   ├── app-icon.png                 # Uygulama ikonu (PNG)
│   └── icons/                       # Icon kütüphanesi
│       ├── Arrow/                   # Ok ikonları
│       ├── Calendar/                # Takvim ikonları
│       ├── Communication/           # İletişim ikonları
│       ├── Edit/                    # Düzenleme ikonları
│       ├── Environment/             # Çevre ikonları
│       ├── File/                    # Dosya ikonları
│       ├── Interface/               # Arayüz ikonları
│       ├── Media/                   # Medya ikonları
│       ├── Navigation/              # Navigasyon ikonları
│       ├── Shape/                   # Şekil ikonları
│       ├── System/                  # Sistem ikonları
│       └── Warning/                 # Uyarı ikonları
│
├── dist/                            # Derlenmiş uygulama
│   └── win-unpacked/                # Windows unpacked build
│
├── electron/                        # Electron main process
│   ├── main.js                      # Ana Electron dosyası
│   ├── preload.js                   # Preload script
│   ├── overlay-logger.js            # Overlay log yönetimi
│   └── background/                  # Arka plan işlemleri
│
├── public/                          # Frontend dosyaları
│   ├── css/                         # Stil dosyaları
│   │   ├── base.css                 # Temel stiller
│   │   ├── forms.css                 # Form stilleri
│   │   ├── messages.css             # Mesaj stilleri
│   │   ├── overlay-base.css         # Overlay temel stilleri
│   │   ├── overlay-canvas.css       # Canvas stilleri
│   │   ├── overlay-components.css   # Component stilleri
│   │   ├── overlay-inspector.css    # Inspector stilleri
│   │   ├── overlay-layers.css       # Layer stilleri
│   │   ├── overlay-responsive.css  # Responsive stilleri
│   │   ├── overlay.css              # Genel overlay stilleri
│   │   ├── project.css              # Proje paneli stilleri
│   │   ├── stream-settings.css      # Yayın ayarları stilleri
│   │   ├── styles.css               # Ana stil dosyası
│   │   └── tabs.css                 # Tab navigasyon stilleri
│   │
│   ├── js/                          # JavaScript dosyaları
│   │   ├── app.js                   # Ana uygulama dosyası
│   │   ├── api.js                   # API çağrıları
│   │   ├── dom.js                   # DOM yardımcı fonksiyonları
│   │   ├── main.js                  # Ana başlatma
│   │   ├── messages.js               # Mesaj yönetimi
│   │   ├── settings.js               # Ayar yönetimi
│   │   ├── state.js                 # Uygulama durumu
│   │   ├── utils.js                 # Yardımcı fonksiyonlar
│   │   ├── ws.js                    # WebSocket yönetimi
│   │   ├── components/               # React benzeri component'ler
│   │   │   ├── TabNavigation.js     # Tab navigasyon component'i
│   │   │   └── TitleBar.js           # Title bar component'i
│   │   ├── i18n/                     # Çoklu dil desteği
│   │   │   └── index.js             # i18n yönetimi
│   │   ├── modules/                 # Modüler yapı
│   │   │   ├── ComponentManager.js  # Component yönetimi
│   │   │   ├── DisplaySettingsManager.js
│   │   │   ├── LayerManager.js      # Layer yönetimi
│   │   │   ├── PreferencesManager.js
│   │   │   ├── ProjectManager.js    # Proje yönetimi
│   │   │   ├── StreamSettingsManager.js
│   │   │   └── project/             # Proje modülleri
│   │   │       ├── projectDragDrop.js
│   │   │       ├── projectFileBrowser.js
│   │   │       ├── projectFileOperations.js
│   │   │       ├── projectPanel.js
│   │   │       └── projectUI.js
│   │   ├── overlay/                 # Overlay JavaScript modülleri
│   │   │   └── [32 overlay dosyası]
│   │   └── utils/                   # Yardımcı modüller
│   │       └── i18n.js              # i18n yardımcı fonksiyonları
│   │
│   ├── locales/                      # Çeviri dosyaları
│   │   ├── tr.json                   # Türkçe
│   │   ├── en.json                   # İngilizce
│   │   ├── de.json                   # Almanca
│   │   ├── fr.json                   # Fransızca
│   │   ├── es.json                   # İspanyolca
│   │   ├── it.json                   # İtalyanca
│   │   ├── ru.json                   # Rusça
│   │   ├── ja.json                   # Japonca
│   │   ├── ko.json                   # Korece
│   │   ├── pt.json                   # Portekizce
│   │   ├── zh.json                   # Çince
│   │   └── ar.json                   # Arapça
│   │
│   ├── index.html                   # Ana HTML dosyası
│   ├── overlay.html                 # Overlay HTML dosyası
│   └── logs/                        # Log dosyaları
│       └── overlay-console.md       # Overlay console log'ları
│
├── server/                          # Backend sunucu
│   ├── index.js                     # Ana sunucu dosyası
│   ├── youtube-service.js           # YouTube servisi
│   ├── youtube-stats-service.js     # YouTube istatistik servisi
│   ├── streamlabs-service.js        # Streamlabs servisi (opsiyonel)
│   └── file-manager-service.js        # Dosya yönetimi servisi
│
├── project/                        # Proje dosyaları (medya dosyaları burada)
│
├── scripts/                         # Build script'leri
│   └── generate-icon.js             # Icon oluşturma script'i
│
├── package.json                     # NPM bağımlılıkları
├── package-lock.json                # NPM lock dosyası
├── README.md                        # Orijinal README
├── ETIKETLER.txt                    # YouTube WebAPI etiketleri dokümantasyonu
├── WEBAPI_ETIKETLERI.txt            # WebAPI etiketleri
└── start.bat                        # Windows başlatma script'i
```

---

## 🚀 Kullanım Senaryoları

### Senaryo 1: YouTube Canlı Yayın Takibi
1. Uygulamayı aç
2. "Yayın Ayarları" sekmesine git
3. YouTube canlı yayın URL'sini veya Video ID'yi gir
4. (Opsiyonel) YouTube API Key ekle
5. "Yayını Başlat" butonuna tıkla
6. "Canlı Önizleme" sekmesinde chat mesajlarını gör

### Senaryo 2: Overlay Oluşturma
1. "Overlay Editörü" sekmesine git
2. Ekran seç (birden fazla ekran varsa)
3. "Overlay Aktif" toggle'ını aç
4. "Layer Ekle" butonuna tıkla
5. Layer tipini seç (ChatBox, Subscriber, Rich Text, Camera, Media)
6. Canvas üzerinde layer'ı konumlandır
7. Inspector panelinden özellikleri düzenle
8. Overlay penceresi otomatik olarak oluşturulur

### Senaryo 3: Rich Text Layer ile İstatistik Gösterme
1. Rich Text layer ekle
2. Rich Text içeriğine şunu yaz:
   ```
   Beğeni: <webapi link="youtube:likes" t=30>
   İzleyici: <webapi link="youtube:viewers" t=10>
   ```
3. Font, renk ve stil özelliklerini ayarla
4. Overlay'de canlı istatistikler görüntülenir

### Senaryo 4: Medya Dosyası Yükleme
1. "Project" sekmesine git
2. Dosyaları sürükle-bırak ile yükle
3. Veya klasör oluştur ve organize et
4. Media layer ekle ve dosya yolunu seç
5. Overlay'de medya dosyası görüntülenir

---

## 🔧 Yapılandırma

### Ortam Değişkenleri
- `PORT`: Sunucu portu (varsayılan: 3000)
- `NODE_ENV`: Geliştirme (`development`) veya üretim (`production`)
- `ELECTRON_DISABLE_HARDWARE_ACCELERATION`: GPU hızlandırmayı devre dışı bırak

### localStorage Ayarları
- Kullanıcı tercihleri
- Overlay konfigürasyonları
- Dil tercihi
- Display ayarları

---

## 📦 Build ve Dağıtım

### Geliştirme Modu
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
```

### Release Build
```bash
npm run build:release
```

### Çıktı
- `dist/YouTube-Live-Tracker-1.0.0-portable.exe`: Portable Windows uygulaması

---

## 🌟 Öne Çıkan Teknik Özellikler

### 1. Modüler Mimari
- ES6 modül sistemi
- Tek sorumluluk prensibi
- Kolay bakım ve genişletme

### 2. Electron IPC Kullanımı
- Ana process ile renderer process arası iletişim
- Overlay pencerelerinin yönetimi
- Sistem bilgilerine erişim (ekranlar, fontlar)

### 3. WebSocket Gerçek Zamanlı İletişim
- Backend'den frontend'e anlık mesaj iletimi
- Otomatik yeniden bağlanma
- Mesaj kuyruğu yönetimi

### 4. Canvas Tabanlı Overlay Editörü
- Görsel layer yönetimi
- Sürükle-bırak desteği
- Gerçek zamanlı önizleme

### 5. Çoklu Pencere Yönetimi
- Ana pencere + overlay pencereleri
- Z-index yönetimi
- Always-on-top desteği
- Mouse event forwarding

### 6. GPU Optimizasyonu
- Hardware acceleration
- GPU crash fallback mekanizması
- Performans optimizasyonları

---

## 📊 Performans Özellikleri

- **Düşük CPU Kullanımı**: Optimize edilmiş WebSocket bağlantıları
- **GPU Hızlandırma**: Electron GPU desteği
- **Bellek Yönetimi**: Efficient message queuing
- **Cache Mekanizması**: YouTube istatistikleri için cache
- **Lazy Loading**: Modül bazlı lazy loading

---

## 🔒 Güvenlik Özellikleri

- **Context Isolation**: Electron context isolation aktif
- **Node Integration**: Devre dışı (güvenlik için)
- **HTML Escape**: XSS saldırılarına karşı koruma
- **CORS**: Express CORS middleware
- **Preload Scripts**: Güvenli IPC iletişimi

---

## 📝 Önemli Notlar

### YouTube API Key
- İsteğe bağlıdır, ancak bazı özellikler için gerekebilir
- Abone sayısı gibi istatistikler için API key gereklidir
- API key almak için: https://console.cloud.google.com/apis/credentials

### Streamlabs Entegrasyonu
- Opsiyonel özellik
- Socket token gereklidir
- Abonelik bildirimleri için kullanılır

### Overlay Pencereleri
- Always-on-top özelliği aktif
- Mouse event'leri forward edilir (ana pencere ile etkileşim mümkün)
- Focus alınmaz (ana pencere focus'ta kalır)
- DevTools açıkken mouse event'leri aktif olur

---

## 🐛 Bilinen Sınırlamalar

1. **Sadece Windows Desteği**: Şu anda sadece Windows için build edilmiş (Electron cross-platform desteği var ancak build sadece Windows için yapılmış)
2. **Tek Overlay Tipi Limitasyonu**: ChatBox ve Subscriber layer'larından sadece bir tane eklenebilir (Rich Text ve Media için sınırsız)
3. **API Rate Limits**: YouTube API kullanımında rate limit sınırlamaları olabilir
4. **Font Listesi**: Bazı sistemlerde font listesi tam olarak alınamayabilir

---

## 🔮 Gelecek Geliştirmeler İçin Öneriler

1. **Mac ve Linux Desteği**: Cross-platform build desteği
2. **Plugin Sistemi**: Üçüncü parti plugin desteği
3. **Template Sistemi**: Hazır overlay şablonları
4. **Animasyon Editörü**: Gelişmiş animasyon düzenleme
5. **Cloud Sync**: Ayarların cloud'da senkronizasyonu
6. **Twitch Entegrasyonu**: Twitch chat desteği
7. **OBS Plugin**: OBS Studio için native plugin
8. **Test Framework**: Unit ve integration testleri
9. **TypeScript Migration**: Tip güvenliği için TypeScript'e geçiş
10. **WebRTC Desteği**: Daha gelişmiş kamera ve ekran paylaşımı

---

## 📚 Kaynaklar ve Dokümantasyon

### Kullanılan Kütüphaneler
- **Masterchat**: YouTube chat API wrapper
- **Electron**: Masaüstü uygulama framework'ü
- **Express**: Web sunucu framework'ü
- **WebSocket**: Gerçek zamanlı iletişim

### Dış API'ler
- **YouTube Data API v3**: İstatistikler için
- **Streamlabs Socket API**: Abonelik bildirimleri için

---

## 👥 Kullanıcı Hedef Kitlesi

1. **Streamer'lar**: YouTube'da canlı yayın yapan içerik üreticileri
2. **Moderatörler**: Chat moderasyonu yapan kişiler
3. **İçerik Editörleri**: Overlay tasarımı yapan tasarımcılar
4. **Geliştiriciler**: Overlay sistemini özelleştirmek isteyen geliştiriciler

---

## ✅ Sonuç

YouTube Live Tracker, profesyonel seviyede bir canlı yayın takip ve overlay yönetim aracıdır. Modüler mimarisi, geniş özellik seti ve kullanıcı dostu arayüzü ile streaming topluluğu için güçlü bir araç sunmaktadır. Özellikle YouTube canlı yayın chat'lerini takip etmek ve görsel overlay'ler oluşturmak isteyen kullanıcılar için ideal bir çözümdür.

---

**Dokümantasyon Tarihi**: 2024
**Proje Versiyonu**: 1.0.0
**Dokümantasyon Versiyonu**: 1.0


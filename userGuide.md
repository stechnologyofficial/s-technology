# S-Technology Kullanıcı Kılavuzu

## Genel Bakış

**S-Technology**, modern web teknolojileri ile geliştirilmiş araçlar ve oyunlar sunan açık kaynak bir platformdur. Platform, kullanıcı dostu arayüzü ve modüler yapısı ile kolayca genişletilebilir ve özelleştirilebilir.

**Erişim:** Genel kullanıma açık, giriş gerektirmez.

**Amaç:** Geliştiriciler ve kullanıcılar için faydalı araçlar ve eğlenceli oyunlar sunmak.

## Powered by Manus

S-Technology, modern ve güçlü teknolojilerle geliştirilmiştir. Proje, **React 19** ve **TypeScript** ile yazılmış, **Tailwind CSS 4** ve **shadcn/ui** bileşenleri ile stillendirilmiştir. **Vite** build aracı sayesinde yıldırım hızında derleme ve geliştirme deneyimi sunar. **Wouter** ile hafif ve performanslı routing sağlanır.

**Deployment:** Otomatik ölçeklendirme altyapısı ve global CDN ile GitHub Pages üzerinde barındırılır.

## Web Sitenizi Kullanma

S-Technology platformu üç ana bölümden oluşur. **Ana Sayfa**, platformun genel tanıtımını ve özelliklerini sergiler. Modern gradient efektler ve animasyonlarla zenginleştirilmiş hero bölümü, ziyaretçileri karşılar. "Araçları Keşfet" ve "Oyunları İncele" butonlarına tıklayarak ilgili sayfalara geçiş yapabilirsiniz.

**Araçlar** sayfasında, geliştirme süreçlerinizi hızlandıracak çeşitli araçlar listelenir. Her araç kartında başlık, açıklama, etiketler ve durum bilgisi bulunur. "Kullan" butonuna tıklayarak araca erişebilir, GitHub ikonuna tıklayarak kaynak kodunu görüntüleyebilirsiniz. Araçlar "Aktif", "Beta" veya "Yakında" durumlarında olabilir.

**Oyunlar** sayfasında, tarayıcınızda oynayabileceğiniz eğlenceli oyunlar yer alır. Oyun kartlarında tür bilgileri ve durum göstergeleri bulunur. "Oyna" butonuna tıklayarak oyunu başlatabilir, GitHub ikonundan kaynak koduna ulaşabilirsiniz.

Üst menüdeki navigasyon bağlantıları ile sayfalar arasında kolayca geçiş yapabilirsiniz. Mobil cihazlarda hamburger menü ikonu görünür ve tıklandığında navigasyon menüsü açılır.

## Web Sitenizi Yönetme

Platform statik bir web sitesi olduğundan, içerik yönetimi kod düzeyinde gerçekleştirilir. Yeni araç veya oyun eklemek için ilgili sayfa dosyalarındaki dizilere yeni öğeler eklemeniz yeterlidir.

**Araç Ekleme:** `client/src/pages/Tools.tsx` dosyasındaki `tools` dizisine yeni araç nesnesi ekleyin. Araç nesnesi `id`, `title`, `description`, `tags`, `status` ve `icon` alanlarını içermelidir.

**Oyun Ekleme:** `client/src/pages/Games.tsx` dosyasındaki `games` dizisine yeni oyun nesnesi ekleyin. Oyun nesnesi `id`, `title`, `description`, `genre`, `status` ve `icon` alanlarını içermelidir.

**Tasarım Özelleştirme:** `client/src/index.css` dosyasında renk paleti, tipografi ve animasyon ayarlarını değiştirebilirsiniz. Tema, dark mode için optimize edilmiştir ve oklch renk uzayı kullanılarak tanımlanmıştır.

**GitHub Pages Deployment:** Projeyi GitHub'a push ettiğinizde, `.github/workflows/deploy.yml` dosyasındaki GitHub Actions workflow'u otomatik olarak çalışır ve siteyi yayınlar. Repository ayarlarından Pages bölümünde kaynak olarak "GitHub Actions" seçilmelidir.

## Sonraki Adımlar

Manus AI ile istediğiniz zaman konuşarak değişiklik talep edebilir veya yeni özellikler ekleyebilirsiniz. Kendi araçlarınızı ve oyunlarınızı ekleyerek platformu kişiselleştirin. Kod tabanı modüler yapıda olduğundan, yeni bileşenler eklemek ve mevcut bileşenleri genişletmek oldukça kolaydır.

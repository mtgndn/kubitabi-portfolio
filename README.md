# Kubitabi Accessories Web Sitesi

Şıklık ve kaliteyi bir araya getiren takı ve aksesuar markası Kubitabi için hazırlanmış modern, hızlı ve mobil uyumlu React/Next.js tabanlı web sitesi.

---

## İçindekiler

- [Proje Hakkında](#proje-hakkında)
- [Özellikler](#özellikler)
- [Teknolojiler](#teknolojiler)
- [Kurulum ve Çalıştırma](#kurulum-ve-çalıştırma)
- [Proje Yapısı](#proje-yapısı)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Lisans](#lisans)

---

## Proje Hakkında

Bu proje Kubitabi Accessories markasının ürünlerini sergilemek, kullanıcıların ürünleri keşfetmesini sağlamak ve iletişim bilgilerini sunmak için tasarlanmış şık ve kullanıcı dostu bir web sitesidir.  

Mobil öncelikli tasarımı ve hızlı sayfa geçişleri sayesinde modern e-ticaret sitelerine uyumlu bir deneyim sağlar.

---

## Özellikler

- Anasayfa tanıtım bölümü ve öne çıkan ürün galerisinin yatay kaydırmalı gösterimi  
- Ürünler sayfasında detaylı ürün kartları, görseller ve satın alma linkleri  
- Responsive (mobil uyumlu) tasarım ve hamburger menü  
- İletişim sayfasında görsel destekli iletişim bilgileri  
- Admin paneli (şifre korumalı) ile ürün ekleme, güncelleme ve silme  
- Next.js 13 + React 18 ve Tailwind CSS kullanımı ile modern teknoloji altyapısı

---

## Teknolojiler

- [Next.js](https://nextjs.org/) - React tabanlı SSR ve SSG framework  
- [React](https://reactjs.org/) - UI geliştirme  
- [Tailwind CSS](https://tailwindcss.com/) - Hızlı ve özelleştirilebilir CSS  
- [MongoDB](https://www.mongodb.com/) - Ürün veritabanı (Admin panel backend kısmı için)  
- [Lucide Icons](https://lucide.dev/) - İkonlar  
- [Vercel](https://vercel.com/) - Hosting ve dağıtım (opsiyonel)

---

## Kurulum ve Çalıştırma

1. Depoyu klonlayın:  
   ```bash
   git clone https://github.com/kullaniciadi/kubitabi-accessories.git
   cd kubitabi-accessories
2. Bağımlılıkları yükleyin:

bash
Kopyala
Düzenle
npm install
# veya
yarn install

3. Geliştirme sunucusunu başlatın:
   npm run dev
  # veya
  yarn dev

4. Tarayıcınızda http://localhost:3000 adresini açın.

Proje Yapısı
/components   # Navbar, Footer, ProductCard, PageTransition, ScrollingGallery gibi UI bileşenleri
/pages        # Next.js sayfa dosyaları (Anasayfa, Ürünler, İletişim, Admin)
/public       # Statik dosyalar (logo, ürün görselleri, ikonlar)
/styles      # Global ve Tailwind ayarları (varsa)
/lib         # MongoDB bağlantısı ve yardımcı fonksiyonlar
/api         # Backend API route'ları (ürün yönetimi)

Lisans
Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakabilirsiniz.

İletişim
Proje hakkında soru veya önerileriniz için Metehan Günaydın ile iletişime geçebilirsiniz.

# Base Express API

Bu proje, modern ve ölçeklenebilir bir Express.js API başlangıç şablonudur.

## 🚀 Özellikler

- Express.js tabanlı RESTful API
- TypeScript desteği
- Modüler yapı ve temiz kod mimarisi
- JWT tabanlı kimlik doğrulama
- Otomatik API dokümantasyonu (Swagger/OpenAPI)
- Hata yönetimi ve loglama sistemi
- Veritabanı entegrasyonu
- Çevresel değişken yönetimi (.env)
- CORS yapılandırması
- Güvenlik önlemleri (Helmet, Rate Limiting)

## 🛠️ Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/MiktatMertCento/base-express-api.git
cd base-express-api
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Çevresel değişkenleri ayarlayın:
```bash
cp .env.example .env
```

4. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

## 📚 API Dokümantasyonu

API dokümantasyonuna aşağıdaki URL üzerinden erişebilirsiniz:
```
http://localhost:3000/swagger
```

## 🔧 Kullanılan Teknolojiler

- Node.js & Express.js
- TypeScript
- JWT (JSON Web Tokens)
- Swagger/OpenAPI
- MongoDB/PostgreSQL
- Winston (Loglama)
- Jest (Test)
- ESLint & Prettier

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakınız.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

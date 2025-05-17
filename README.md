# Soroban Token DApp

Bu proje, Stellar ağı üzerinde çalışan bir Soroban akıllı sözleşmesi ile entegre edilmiş bir token DApp (Decentralized Application) uygulamasıdır.  
Kullanıcılar Freighter cüzdanlarını bağlayarak token bakiyelerini görüntüleyebilir ve token transferleri gerçekleştirebilir.

## 🔧 Teknolojiler

- **Soroban**: Stellar blockchain üzerinde akıllı sözleşme altyapısı
- **Rust**: Akıllı sözleşme geliştirme dili
- **React.js**: Modern ve dinamik kullanıcı arayüzü
- **Freighter Wallet**: Kullanıcı kimlik doğrulama ve işlem imzalama aracı

## 🚀 Özellikler

- Akıllı sözleşme ile token yaratma ve yönetme
- Kullanıcı cüzdanı bağlantısı (Freighter ile)
- Token bakiyesi görüntüleme
- Token gönderme (transfer) arayüzü
- Modern, mobil uyumlu ve kullanıcı dostu arayüz

## 💻 Kurulum

### Backend (Soroban Contract)
```bash
cd HACKATHON-main
soroban config identity token-admin --global
soroban build





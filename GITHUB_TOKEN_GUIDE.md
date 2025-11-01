# GitHub Personal Access Token Oluşturma ve Kullanma

## Adım 1: Token Oluşturma

1. GitHub'a giriş yapın: https://github.com/login
2. Sağ üst köşeden profil resminize tıklayın → **Settings**
3. Sol menüden **Developer settings** seçin
4. **Personal access tokens** → **Tokens (classic)** seçin
5. **Generate new token** → **Generate new token (classic)** butonuna tıklayın
6. Formu doldurun:
   - **Note**: `s-technology-push` (veya istediğiniz bir isim)
   - **Expiration**: 90 days (veya istediğiniz süre)
   - **Scopes**: `repo` kutusunu işaretleyin (tüm repo izinleri)
7. Sayfanın en altından **Generate token** butonuna tıklayın
8. **ÖNEMLİ**: Oluşturulan token'ı hemen kopyalayın (bir daha gösterilmeyecek!)

## Adım 2: Token ile Push Yapma

Token'ı kopyaladıktan sonra:

```bash
git push -u origin main
```

Git sizden şunları isteyecek:
- **Username**: `stechnologyofficial`
- **Password**: Oluşturduğunuz Personal Access Token'ı yapıştırın (normal şifre değil!)

Windows Credential Manager token'ı otomatik olarak kaydedecek, bir daha sormayacak.

## Alternatif: Token'ı URL'e Dahil Etme

Eğer her seferinde girmek istemiyorsanız:

```bash
git remote set-url origin https://TOKEN@github.com/stechnologyofficial/s-technology.git
```

Bu yöntem güvenlik açısından önerilmez çünkü token URL'de görünecek.


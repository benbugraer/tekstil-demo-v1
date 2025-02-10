"use client";

import { Container } from "@/components/ui/container";

export default function CerezPolitikasi() {
  return (
    <Container className="py-16">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold mb-8">Çerez Politikası</h1>

        <p className="mb-6">
          Son güncellenme: {new Date().toLocaleDateString("tr-TR")}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Çerez Nedir?</h2>
          <p>
            Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınız tarafından
            bilgisayarınıza veya mobil cihazınıza kaydedilen küçük metin
            dosyalarıdır. Bu dosyalar sizin web sitemizde daha iyi bir deneyim
            yaşamanız için kullanılmaktadır.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. Hangi Çerezleri Kullanıyoruz?
          </h2>
          <p>Web sitemizde aşağıdaki çerez türlerini kullanmaktayız:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Zorunlu Çerezler:</strong> Sitenin çalışması için gerekli
              olan temel çerezlerdir.
            </li>
            <li>
              <strong>Performans Çerezleri:</strong> Sitemizin performansını
              analiz etmek ve iyileştirmek için kullanılır.
            </li>
            <li>
              <strong>İşlevsellik Çerezleri:</strong> Tercihlerinizi hatırlamak
              ve size özelleştirilmiş bir deneyim sunmak için kullanılır.
            </li>
            <li>
              <strong>Hedefleme/Reklam Çerezleri:</strong> Size ilgi
              alanlarınıza göre özelleştirilmiş reklamlar göstermek için
              kullanılır.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Çerezlerin Kullanım Amaçları
          </h2>
          <p>Çerezleri aşağıdaki amaçlarla kullanmaktayız:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Web sitemizin temel işlevlerini gerçekleştirmek</li>
            <li>Kullanıcı deneyimini iyileştirmek</li>
            <li>Site kullanımı hakkında istatistiksel veriler toplamak</li>
            <li>Kişiselleştirilmiş reklamlar sunmak</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. Çerezleri Nasıl Kontrol Edebilirsiniz?
          </h2>
          <p>
            Tarayıcınızın ayarlarını değiştirerek çerezleri kontrol edebilir
            veya silebilirsiniz. Ancak, çerezleri devre dışı bırakmanız
            durumunda web sitemizin bazı özellikleri düzgün çalışmayabilir.
          </p>
          <p className="mt-4">
            Çerez ayarlarınızı değiştirmek için tarayıcınızın yardım sayfasını
            ziyaret edebilirsiniz:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Safari</li>
            <li>Microsoft Edge</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Veri Güvenliği</h2>
          <p>
            Çerezler aracılığıyla toplanan verileriniz güvenli bir şekilde
            saklanmakta ve yetkisiz erişime karşı korunmaktadır.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Değişiklikler</h2>
          <p>
            Bu çerez politikasını herhangi bir zamanda güncelleme hakkını saklı
            tutarız. Güncellemeler web sitemizde yayınlandığı tarihte yürürlüğe
            girer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. İletişim</h2>
          <p>
            Çerez politikamız hakkında sorularınız veya endişeleriniz varsa,
            lütfen bizimle iletişime geçin:
          </p>
          <p className="mt-4">
            E-posta: info@example.com
            <br />
            Telefon: +90 533 533 53 53
            <br />
            Adres: İstanbul, Türkiye
          </p>
        </section>
      </div>
    </Container>
  );
}

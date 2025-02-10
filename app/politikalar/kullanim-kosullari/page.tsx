"use client";

import { Container } from "@/components/ui/container";

export default function KullanimKosullari() {
  return (
    <Container className="py-16">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold mb-8">Kullanım Koşulları</h1>

        <p className="mb-6">
          Son güncellenme: {new Date().toLocaleDateString("tr-TR")}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. Kabul Edilen Şartlar
          </h2>
          <p>
            Bu web sitesini kullanarak, aşağıda belirtilen kullanım koşullarını
            kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız, lütfen
            sitemizi kullanmayınız.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Hizmet Kullanımı</h2>
          <p>Web sitemiz üzerinden sunulan hizmetleri kullanırken:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Tüm yerel, ulusal ve uluslararası yasalara uygun davranmalısınız
            </li>
            <li>
              Sistemlerimize veya ağlarımıza zarar verecek faaliyetlerde
              bulunmamalısınız
            </li>
            <li>Diğer kullanıcıların haklarına saygı göstermelisiniz</li>
            <li>Hizmetlerimizi kötüye kullanmamalısınız</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Fikri Mülkiyet Hakları
          </h2>
          <p>
            Web sitemizdeki tüm içerik (metin, görsel, logo, tasarım vb.)
            şirketimizin fikri mülkiyeti altındadır. Bu içeriklerin izinsiz
            kullanımı, kopyalanması veya dağıtılması yasaktır.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Sorumluluk Reddi</h2>
          <p>
            Web sitemizdeki bilgiler &quot;olduğu gibi&quot; sunulmaktadır. Site
            içeriğinin doğruluğu, güncelliği ve kullanımından doğabilecek
            zararlardan sorumlu değiliz.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Hesap Güvenliği</h2>
          <p>Eğer bir hesap oluşturursanız:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Hesap bilgilerinizin güvenliğinden siz sorumlusunuz</li>
            <li>Hesabınızla yapılan tüm işlemlerden siz sorumlusunuz</li>
            <li>
              Şüpheli bir durum fark ederseniz derhal bizimle iletişime
              geçmelisiniz
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Değişiklikler</h2>
          <p>
            Bu kullanım koşullarını herhangi bir zamanda değiştirme hakkını
            saklı tutarız. Değişiklikler web sitemizde yayınlandığı anda
            yürürlüğe girer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. İletişim</h2>
          <p>
            Bu kullanım koşulları hakkında sorularınız veya endişeleriniz varsa,
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

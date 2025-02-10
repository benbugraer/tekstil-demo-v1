"use client";

import { Container } from "@/components/ui/container";

export default function GizlilikPolitikasi() {
  return (
    <Container className="py-16">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold mb-8">Gizlilik Politikası</h1>

        <p className="mb-6">
          Son güncellenme: {new Date().toLocaleDateString("tr-TR")}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Genel Bakış</h2>
          <p>
            Bu gizlilik politikası, websitemizi ziyaret ettiğinizde kişisel
            verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu
            açıklamaktadır. Gizliliğinize saygı duyuyor ve kişisel verilerinizi
            korumak için gerekli tüm önlemleri alıyoruz.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Toplanan Bilgiler</h2>
          <p>Aşağıdaki türde kişisel bilgileri toplayabiliriz:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>İsim ve iletişim bilgileri</li>
            <li>E-posta adresi</li>
            <li>Telefon numarası</li>
            <li>IP adresi ve tarayıcı bilgileri</li>
            <li>Çerezler aracılığıyla toplanan bilgiler</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Bilgilerin Kullanımı
          </h2>
          <p>Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Hizmetlerimizi sunmak ve geliştirmek</li>
            <li>Müşteri hizmetleri sağlamak</li>
            <li>Güvenlik ve doğrulama işlemleri</li>
            <li>Yasal yükümlülükleri yerine getirmek</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Bilgi Güvenliği</h2>
          <p>
            Kişisel verilerinizin güvenliğini sağlamak için endüstri standardı
            güvenlik önlemleri kullanıyoruz. Bu önlemler arasında şifreleme,
            güvenli veri depolama ve düzenli güvenlik değerlendirmeleri yer
            almaktadır.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Bilgi Paylaşımı</h2>
          <p>
            Kişisel bilgilerinizi üçüncü taraflarla paylaşmayız, ancak aşağıdaki
            durumlar istisnadır:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Yasal zorunluluk durumunda</li>
            <li>Sizin açık rızanız olduğunda</li>
            <li>Hizmet sağlayıcılarımızla işbirliği kapsamında</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Haklarınız</h2>
          <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>
              Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme
            </li>
            <li>
              Kişisel verilerinizin işlenme amacını ve bunların amacına uygun
              kullanılıp kullanılmadığını öğrenme
            </li>
            <li>
              Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı
              üçüncü kişileri bilme
            </li>
            <li>
              Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde
              bunların düzeltilmesini isteme
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. İletişim</h2>
          <p>
            Bu gizlilik politikası hakkında sorularınız veya endişeleriniz
            varsa, lütfen bizimle iletişime geçin:
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

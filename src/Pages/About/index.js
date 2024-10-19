import style from "./about.module.css";

function About() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>BMI (Vücut Kitle İndeksi) Nedir?</h1>
      <div className={style.content}>
        <p className={style.section}>
          Vücut kitle indeksi, bir kişinin boyuna göre ağırlığının ölçüsü olup,
          ağırlığın boyun karesine bölünmesi{" "}
          <span className={style.highlight}>(kg/m²)</span> ile hesaplanan bir
          değerdir.
        </p>
        <p className={style.section}>
          Vücut yağ miktarının bir göstergesi olarak alınır ve obezite durumunun
          belirlenmesini sağlar. Bu ölçüm, kişinin genel sağlığı hakkında önemli
          bir bilgi verir.
        </p>
        <p className={style.section}>
          Vücut kitle endeksi hesaplaması, kişinin sağlıklı bir kiloda olup
          olmadığının belirlenmesinde işe yarar. Endeksin yüksek veya düşük
          olması çeşitli sağlık sorunlarına işaret edebilir.
        </p>
        <p className={style.section}>
          <h3>Çocuklarda Vücut Kitle İndeksi Kaç Olmalıdır? </h3>
          Çocuk ve adölesanlarda
          (ergenlik dönemi), yetişkinlerde olduğu gibi belli bir sınıflandırma
          bulunmamaktadır. Fazla kilolu olma ve obezitenin tanımlanmasında
          farklı yaklaşımlar vardır. En sık kullanılan yöntemlerden birisi
          yüzdelik (persentil) ve z skoru değerlerinin kullanılmasıdır. Dünya
          Sağlık Örgütü tarafından en son yayımlanan referans aralığına göre
          obezitenin sınıflandırılması yapılmaktadır. Bu referanslara göre 5
          yaşın altındaki çocuklarda fazla kiloluluk >+2 SD veya >97. yüzdelik
          (persentil), obezite ise >+3 SD veya >99.yüzdelik olarak
          tanımlanmaktadır. 5-19 yaş grubundaki çocuklar ve adölesanlarda ise
          fazla kiloluluk >+1 SD veya >85.yüzdeliğin üzeri, obezite ise >+2 SD
          veya >97.yüzdeliğin üzeri olarak tanımlanmaktadır.
        </p>
        <p className={style.section}>
        <h3> Vücut Kitle İndeksi (Boy Kilo Endeksi) Sınıflandırması Neye Göre Değerlendirilir?</h3>
        Vücut kitle endeksi (boy kilo endeksi) sınıflandırması yaş ve cinsiyete göre değişkenlik gösterir. Dolayısıyla bireyi değerlendirirken tek başına BKİ ile değil, mümkünse vücut analizi ve bel çevresi ölçümlerini de göz önünde bulundurmak daha doğrudur. Vücuttaki toplam yağ miktarından çok, yağın vücutta bulunduğu bölge ve dağılımı daha önemlidir. Çünkü vücuttaki yağın bulunduğu bölge ve dağılımı, hastalıkların morbidite ve mortalitesi ile ilişkilendirilmektedir. 
        </p>
      </div>
    </div>
  );
}

export default About;

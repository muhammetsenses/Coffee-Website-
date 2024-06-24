import "./about.css";
import order1 from "../../assets/donut.png";
import SwipperAbout from "../../components/swipper/aboutswipper/aboutswipper";
const AboutUs = () => {
  return (
    <>
      <section>
        <div className="container mt-5">
          <h1 className="text-center fw-bold">Hakkımızda</h1>
          <div className="row mt-5 ">
            <div className="col-lg-6 p-5 first-content">
              <div>
                <img
                  className="img-fluid rounded-5"
                  src={order1}
                  alt="biz-kimiz"
                />
              </div>
            </div>
            <div className="col-lg-6 px-5">
              <h3 className="text-center fw-bold">Biz Kimiz</h3>
              <p className="first-content-text">
                EspressoLove olarak, kahve tutkumuzu sizinle paylaşmak için 2024
                yılında yola çıktık. Kuruluşumuzdan bu yana, her fincan kahveyi
                özenle hazırlayarak sizlere sunmaktan büyük mutluluk duyuyoruz.
                Amacımız, her ziyaretinizde benzersiz bir kahve deneyimi
                yaşatmak ve sizi evinizde hissettirecek sıcak bir ortam
                yaratmak.
              </p>
              <p className="first-content-text">
                Kahve, bizim için sadece bir içecek değil, aynı zamanda bir
                tutkudur. Dünyanın farklı bölgelerinden seçtiğimiz en kaliteli
                kahve çekirdeklerini, yılların deneyimine sahip baristalarımızın
                hünerli ellerinde benzersiz tatlara dönüştürüyoruz. Her bir
                kahve çekirdeğinin arkasında, emek ve özenle çalışan çiftçilerin
                hikayesi var. Biz, bu hikayeleri sizlerle paylaşmak ve her
                yudumda kahvenin kökenini hissettirmek için buradayız.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 p-5 col order-2 order-md-1">
              <h3 className="fw-bold">Kahvelerimiz</h3>
              <p className="second-content-text">
                EspressoLove’da, dünyanın dört bir yanından özenle seçilmiş
                kahve çekirdeklerini kullanarak, her biri ayrı bir özenle
                hazırlanan lezzetli kahveler sunuyoruz. İster güçlü bir
                espresso, ister yumuşak bir latte tercih edin, her fincan
                kahvemizde kalite ve lezzet garantisi veriyoruz. Baristalarımız,
                en iyi kahve deneyimini yaşamanız için kahve hazırlama sanatını
                büyük bir titizlikle icra ediyor. Ayrıca, özel tariflerimizle
                hazırlanan mevsimlik kahvelerimiz de mutlaka denemeniz gereken
                lezzetler arasında.
              </p>
              <h3 className="fw-bold ">Ferah ve Huzurlu Ortamımız</h3>
              <p className="second-content-text">
                EspressoLove, sadece kahvelerimizle değil, aynı zamanda ferah ve
                huzurlu ortamıyla da dikkat çekiyor. Modern ve şık tasarımımız,
                rahat oturma alanlarımız ve doğal ışıkla aydınlatılmış
                mekanımız, şehrin stresinden uzaklaşıp keyifli zaman geçirmeniz
                için ideal bir atmosfer sunuyor. Günün her saati, iş
                toplantılarınız, arkadaş buluşmalarınız veya yalnızca bir kitap
                eşliğinde kahvenizi yudumlamak için huzur dolu bir ortam
                sunuyoruz.
              </p>
            </div>
            <div className="col-lg-6 p-5 first-content  order-1 order-md-2">
              <div>
                <img
                  className="img-fluid rounded-5"
                  src={order1}
                  alt="biz-kimiz"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8">
              <h2 className="text-center fw-bold">Neden Biz</h2>
              <p className="second-content-text">
                Kahve bizim için sadece bir içecek değil, bir yaşam tarzıdır.
                Misyonumuz, en kaliteli kahveyi ve lezzetli atıştırmalıkları
                sizlere sunarken, aynı zamanda sıcak ve samimi bir ortam
                yaratmaktır. Müşteri memnuniyetini her zaman ön planda tutarak,
                her ziyaretinizde sizi güler yüzle karşılıyor ve en iyi hizmeti
                sunmak için çalışıyoruz. EspressoLove ailesi olarak, sizleri de
                bu keyifli deneyimi paylaşmak üzere kafemize bekliyoruz. Her
                fincanda aşk ve özen var, çünkü her yudum bizim için değerli.
              </p>
            </div>
          </div>
          <h2 className="text-center fw-bold display-6 mt-4">Galeri</h2>
          <SwipperAbout />
        </div>
      </section>
    </>
  );
};

export default AboutUs;

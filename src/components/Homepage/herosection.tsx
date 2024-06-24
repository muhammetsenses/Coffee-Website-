import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import donut from "../../assets/donut.png";
import "aos/dist/aos.css"
import { useEffect } from "react";
import Aos from "aos";

const slider = [
    {
        src:donut,
        title:"Mükemmel lezzet, keyifli bir tat!",
        text:"ESPRESSOLOVE kahvelerinin eşsiz lezzetleriyle yeni güne hazır mısın?"
    },
    {
        src:donut,
        title:"Mükemmel lezzet, keyifli bir tat!",
        text:"ESPRESSOLOVE kahvelerinin eşsiz lezzetleriyle yeni güne hazır mısın?"
    },
    {
        src:donut,
        title:"Mükemmel lezzet, keyifli bir tat!",
        text:"ESPRESSOLOVE kahvelerinin eşsiz lezzetleriyle yeni güne hazır mısın?"
    }
]
const HeroSection = () => {
  useEffect (() => {
    Aos.init({duration: 1500})
  } ,[])
  
  const handleSlideChange = () => {
    Aos.refresh();
  };
  return (
  <section className="hero-wrap">
    <Swiper
      pagination={{ dynamicBullets: true }}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="mySwiper"
      onSlideChange={handleSlideChange}
    >
      <div className="container">
        {slider.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="row py-5 gx-5 hero-row align-items-center">
              <div className="col-md-6">
                <div className="hero-img">
                  <img src={slide.src} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="hero-content" data-aos="fade-up">
                  <h1>{slide.title}</h1>
                  <p>{slide.text}</p>
                  <Link to="/menu" className="btn btn-danger p-3" data-aos="fade-up">
                    Tüm Ürünler
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  </section>
  )
};

export default HeroSection;
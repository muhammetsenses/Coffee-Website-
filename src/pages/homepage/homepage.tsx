import "./homepage.css";
import "swiper/css";
import "swiper/css/pagination";
import "./homepage.css";
import {
  HeroSection,
  DrinksSection,
  ServiceSection,
  CoffeeInfoSection,
} from "../../components/Homepage/homeIndex";
import { useEffect, useState } from "react";
import loadingmp4 from "../../assets/loadingg.mp4";

const Homepage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="loading-content">
        <video autoPlay loop muted src={loadingmp4}></video>
      </div>
    );
  }
  return (
    <>
      <HeroSection />
      <DrinksSection />
      <ServiceSection />
      <CoffeeInfoSection />
    </>
  );
};

export default Homepage;

// const Homepage = () => {

//   return (
//     <>
//       <section className="hero-wrap">
//         <Swiper
//           pagination={{
//             dynamicBullets: true,
//           }}
//           modules={[Pagination,Autoplay]}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           className="mySwiper"
//         >
//           <div className="container">
//             <SwiperSlide>
//               <div className="row py-5 gx-5 align-items-center">
//                 <div className="col-md-6">
//                   <div className="hero-img">
//                     <img src={donut} alt="" />
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="hero-content ">
//                     <h1>Mükemmel lezzet, keyifli bir tat!</h1>
//                     <p></p>
//                     <p>
//                       Colombia Coffee kahvelerinin eşsiz lezzetleriyle yeni güne
//                       hazır mısın?
//                     </p>
//                     <p></p>
//                     <Link to={"/menu"} className="btn btn-danger p-3">Tüm Ürünler</Link>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="row py-5 gx-5 align-items-center">
//                 <div className="col-md-6">
//                   <div className="hero-img">
//                     <img src={donut} alt="" />
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="hero-content ">
//                     <h1>Eşsiz  Lezzetler!</h1>
//                     <p></p>
//                     <p>
//                       Yazın ferahlaten lezzetleri için ESPRESSOLOVE'a bekliyoruz!
//                     </p>
//                     <p></p>
//                     <button className="btn btn-danger p-3">Tüm Ürünler</button>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="row py-5 gx-5 align-items-center">
//                 <div className="col-md-6">
//                   <div className="hero-img">
//                     <img src={donut} alt="" />
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="hero-content ">
//                     <h1>Çalışma Alanlarımız !</h1>
//                     <p></p>
//                     <p>
//                       Colombia Coffee kahvelerinin eşsiz lezzetleriyle yeni güne
//                       hazır mısın?
//                     </p>
//                     <p></p>
//                     <button className="btn btn-danger p-3">Tüm Ürünler</button>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           </div>
//         </Swiper>
//       </section>
//       <div className="container py-5 ">
//         <h1 className="text-center drinks-content-title  ">
//           ESPRESSOLOVE'a Özgü İçecekler
//         </h1>
//         <p className="text-center drinks-content-text">
//           Every Sip is Different Love!
//         </p>
//         <div className="row drinks g-5 justify-content-center">
//           <div className="col-lg-4 text-center mb-3">
//             <a href="">
//               <img
//                 className="img-fluid mx-auto drink-img"
//                 src={mangofresh}
//                 alt=""
//               />
//             </a>
//             <p className="p-3 text-uppercase lead fw-bold">
//               <a className="drink-names" href="">
//                 MANGO FRESH
//               </a>
//             </p>
//           </div>
//           <div className="col-lg-4 text-center mb-3">
//             <a href="">
//               <img
//                 className="img-fluid mx-auto drink-img"
//                 src={hollyfit}
//                 alt=""
//               />
//             </a>
//             <p className="p-3 text-uppercase lead fw-bold">
//               <a className="drink-names" href="">
//                 HOLLYFIT
//               </a>
//             </p>
//           </div>
//           <div className="col-lg-4 text-center mb-3">
//             <a href="">
//               <img
//                 className="img-fluid mx-auto drink-img"
//                 src={loveme}
//                 alt=""
//               />
//             </a>
//             <p className="p-3 text-uppercase lead fw-bold">
//               <a className="drink-names" href="">
//                 LOVE ME
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//       <section className="service">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
//               <div className="section-title style1 text-center mb-5">
//                 <span>
//                   <img style={{ width: "150px" }} src={logo} />
//                 </span>
//                 <h1 className="service-title">Kaliteli Kahve</h1>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-4 pt-3">
//               <div className="service-card">
//                 <div className="service-info">
//                   <div className="service-icon"><FaHeartCircleCheck className="service-item-icon"/></div>
//                   <div className="service-body">
//                   <br />
//                   <h3>Rahat Hissederim</h3>
//                   <p>İçtikçe rahatlatan lezzetleri sizde keşfedin</p>
//                   <br />
//                   </div>
//                 </div>
//               </div>
//               <div className="service-card">
//                 <div className="service-info">
//                   <div className="service-icon"><FaRankingStar className="service-item-icon"/></div>
//                   <div className="service-body">
//                   <br />
//                   <h3>Rahat Hissederim</h3>
//                   <p>İçtikçe rahatlatan lezzetleri sizde keşfedin</p>
//                   <br />
//                   </div>
//                 </div>
//               </div>
//               <div className="service-card">
//                 <div className="service-info">
//                   <div className="service-icon"><FaHeartCircleCheck className="service-item-icon"/></div>
//                   <div className="service-body">
//                   <br />
//                   <h3>Rahat Hissederim</h3>
//                   <p>İçtikçe rahatlatan lezzetleri sizde keşfedin</p>
//                   <br />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4"><div className="service-img"><img src={serviceimg} alt="" /></div></div>
//             <div className="col-lg-4 pt-3">
//               <div className="service-card">
//                 <div className="service-info">
//                   <div className="service-icon"><FaLeaf className="service-item-icon"/></div>
//                   <div className="service-body">
//                   <br />
//                   <h3>Rahat Hissederim</h3>
//                   <p>İçtikçe rahatlatan lezzetleri sizde keşfedin</p>
//                   <br />
//                   </div>
//                 </div>
//               </div>
//               <div className="service-card">
//                 <div className="service-info">
//                   <div className="service-icon"><FaHeartCircleCheck className="service-item-icon"/></div>
//                   <div className="service-body">
//                   <br />
//                   <h3>Rahat Hissederim</h3>
//                   <p>İçtikçe rahatlatan lezzetleri sizde keşfedin</p>
//                   <br />
//                   </div>
//                 </div>
//               </div>
//               <div className="service-card">
//                 <div className="service-info">
//                   <div className="service-icon"><FaClock className="service-item-icon"/></div>
//                   <div className="service-body">
//                   <br />
//                   <h3>Rahat Hissederim</h3>
//                   <p>İçtikçe rahatlatan lezzetleri sizde keşfedin</p>
//                   <br />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="py-4 pt-lg-5">
//         <div className="container">
//           <div className="position-relative"><img className="img-fluid coffe-info-img position-absolute-lg" src={donut} alt="cake" /></div>
//           <div className="row">
//             <div className="col-12 col-lg-8 offset-xl-6 col-xl-6">
//               <div className="card coffee-info-card shadow pb-0  rounded-4">
//                 <div className="card-body p-5">
//                   <h2>PJ'S COFFEE CATERING</h2>
//                   <h4 className="cursive mb-3 lead">Corporate & Social Events</h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum recusandae obcaecati delectus quaerat excepturi ratione?</p>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cumque, nemo molestiae sapiente quidem blanditiis distinctio, saepe minima dolores voluptates quam doloremque nisi! Ab hic dolorem excepturi aut alias ipsa.</p>
//                   <p><a className="btn btn-danger p-3" href="">Tüm Ürünler</a></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </>
//   );
// };

// export default Homepage;

import React from 'react';
import logo from '../../assets/logo.png';
import serviceimg from '../../assets/serviceimg.png';
import { FaHeartCircleCheck, FaLeaf, FaClock, FaRankingStar } from 'react-icons/fa6';
import ServiceIcon from "../../components/IconComp/iconCompanent"
import { IconType } from 'react-icons';


interface ServiceCardProps {
    icon: IconType;
    title: string;
    description: string;
  }
  
  const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
    <div className="service-card">
      <div className="service-info">
        <div className="service-icon">
        <ServiceIcon icon={icon} />
        </div>
        <div className="service-body">
          <br />
          <h3>{title}</h3>
          <p>{description}</p>
          <br />
        </div>
      </div>
    </div>
  );

  const services: { icon: IconType; title: string; description: string }[] = [
    { icon: FaHeartCircleCheck, title: "Rahat Hissederim", description: "İçtikçe rahatlatan lezzetleri sizde keşfedin" },
    { icon: FaRankingStar, title: "Kaliteli Hizmet", description: "En yüksek kalite standartlarına bağlı kalarak hizmet veriyoruz" },
    { icon: FaHeartCircleCheck, title: "Sağlıklı Seçenekler", description: "Sağlığınızı düşünerek hazırlanmış ürünler" },
    { icon: FaLeaf, title: "Doğa Dostu", description: "Çevreye duyarlı üretim ve paketleme" },
    { icon: FaClock, title: "Hızlı Servis", description: "Siparişleriniz en kısa sürede size ulaşır" },
    { icon: FaRankingStar, title: "Ferah Ortam", description: "Oturma alanlarımızla rahat ve konfor sunuyoruz" }
  ];
  
  const ServiceSection: React.FC = () => (
    <section className="service">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <div className="section-title style1 text-center mb-5">
              <span>
                <img style={{ width: "150px" }} src={logo} alt="logo" />
              </span>
              <h1 className="service-title">Kaliteli Kahve</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 pt-3">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
          <div className="col-lg-4">
            <div className="service-img">
              <img src={serviceimg} alt="service" />
            </div>
          </div>
          <div className="col-lg-4 pt-3">
            {services.slice(3).map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

export default ServiceSection;

//<section className="service">
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
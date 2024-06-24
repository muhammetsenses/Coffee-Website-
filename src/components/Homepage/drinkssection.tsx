import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import mangofresh from "../../assets/mango.png";
import hollyfit from "../../assets/hollyfit.png";
import loveme from "../../assets/loveme.png";

const drinks = [
  { src: mangofresh, name: "MANGO FRESH" },
  { src: hollyfit, name: "HOLLYFIT" },
  { src: loveme, name: "LOVE ME" },
];

const DrinksSection = () => {

   useEffect(() => {
     Aos.init({
      duration: 1500 });
   }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center drinks-content-title" >
        ESPRESSOLOVE'a Özgü İçecekler
      </h1>
      <p className="text-center drinks-content-text" >
        Every Sip is Different Love!
      </p>
      <div className="row drinks g-5 justify-content-center">
        {drinks.map((drink, index) => (
          <div key={index} className="col-lg-4 text-center mb-3">
            <a href="#">
              <img
                className="img-fluid mx-auto drink-img"
                src={drink.src}
                alt={drink.name}
              />
            </a>
            <p className="p-3 text-uppercase lead fw-bold">
              <a className="drink-names" href="#">
                {drink.name}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinksSection;

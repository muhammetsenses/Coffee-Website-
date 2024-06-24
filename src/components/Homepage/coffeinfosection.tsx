import {Link } from "react-router-dom";

import donut from "../../assets/donut.png";

const CoffeeInfoSection = () => (
  <section className="py-4 pt-lg-5">
    <div className="container">
      <div className="position-relative">
        <img className="img-fluid coffe-info-img position-absolute-lg" src={donut} alt="cake" />
      </div>
      <div className="row">
        <div className="col-12 col-lg-8 offset-xl-6 col-xl-6">
          <div className="card coffee-info-card shadow pb-0 rounded-4">
            <div className="card-body p-5" >
              <h2>ESPRESSOLOVE COFFEE CATERING</h2>
              <h4 className="cursive mb-3 lead">Corporate & Social Events</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum recusandae obcaecati delectus quaerat excepturi ratione?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cumque, nemo molestiae sapiente quidem blanditiis distinctio, saepe minima dolores voluptates quam doloremque nisi! Ab hic dolorem excepturi aut alias ipsa.</p>
              <p>
                <Link className="btn btn-danger p-3" to="/menu#top">
                  Tüm Ürünler
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
);

export default CoffeeInfoSection;
import "./menu.css";
import products from "../../Json/products.json";
import {useState } from "react";


interface Product {
  id: number;
  name: string;
  img: string;
}

const Menu = () => {
  const [currentCategory, setCurrentCategory] = useState("all");


  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
  };

  return (
    <>
    
      <section   className="menu">
        <div className="container">
          <div className="menu-title-content my-5">
            <ul className="menu-list" id="top">
              <li className="menu-list-item">
                <button onClick={() => handleCategoryChange("all")}>Tümü</button>
              </li>
              <li className="menu-list-item">
                <button onClick={() => handleCategoryChange("cold")}>Soğuk İçecekler</button>
              </li>
              <li className="menu-list-item">
                <button onClick={() => handleCategoryChange("hot")}>Sıcak İçecekler</button>
              </li>
              <li className="menu-list-item">
                <button onClick={() => handleCategoryChange("cakes")}>Tatlılar</button>
              </li>
            </ul>
          </div>
          <div className="row g-3" >
            {currentCategory === "all" && (
              <>
                {products.drinks.colds.map((item: Product) => (
                  <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 mb-2">
                    <div className="product-card">
                      <div className="product-img-content">
                        <img className="img-fluid p-4 product-img" src={item.img} alt={item.name} />
                      </div>
                      <div className="product-info">
                        <h3 className="text-center fw-bold">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
                {products.drinks.hots.map((item: Product) => (
                  <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 mb-2">
                    <div className="product-card">
                      <div className="product-img-content">
                        <img className="img-fluid p-4 product-img" src={item.img} alt={item.name} />
                      </div>
                      <div className="product-info">
                        <h3 className="text-center fw-bold">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
                {products.cakes.map((item: Product) => (
                  <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 mb-2">
                    <div className="product-card">
                      <div className="product-img-content">
                        <img className="img-fluid p-4 product-img" src={item.img} alt={item.name} />
                      </div>
                      <div className="product-info">
                        <h3 className="text-center fw-bold">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
            {currentCategory === "cold" && (
              <>
                {products.drinks.colds.map((item: Product) => (
                  <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 mb-2">
                    <div className="product-card">
                      <div className="product-img-content">
                        <img className="img-fluid p-4 product-img" src={item.img} alt={item.name} />
                      </div>
                      <div className="product-info">
                        <h3 className="text-center fw-bold">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
            {currentCategory === "hot" && (
              <>
                {products.drinks.hots.map((item: Product) => (
                  <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 mb-2">
                    <div className="product-card">
                      <div className="product-img-content">
                        <img className="img-fluid p-4 product-img" src={item.img} alt={item.name} />
                      </div>
                      <div className="product-info">
                        <h3 className="text-center fw-bold">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
            {currentCategory === "cakes" && (
              <>
                {products.cakes.map((item: Product) => (
                  <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 mb-2">
                    <div className="product-card">
                      <div className="product-img-content">
                        <img className="img-fluid p-4 product-img" src={item.img} alt={item.name} />
                      </div>
                      <div className="product-info">
                        <h3 className="text-center fw-bold">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        
      </section>
      
    </>
  );
};

export default Menu;

import "./HomePage.scss";
import { HeroPart } from "./components/HeroPart/HeroPart";
export const HomePage = () => {
  return (
    <>
      <HeroPart />
      <div className="subhead">
        <div className="shoplatest">Shop The Latest</div>
        <nav>
          <a href="#" className="nav-link">
            View All
          </a>
        </nav>
      </div>
      <section className="catalog-section">
        <div className="first-boxes-part">
          <div className="lira-earings">
            <div className="image-wrapper">
              <img src="./assests/lira earings.png" />
              <button className="add-to-cart-button">Add to cart</button>
            </div>
            <nav>
              <a href="#" className="catalog-element">
                Lira Earrings
              </a>
            </nav>
            <div className="catalog-price">$ 20,00</div>
          </div>
          <div className="hal-earings">
            <div className="image-wrapper">
              <img src="./assests/hal earings.png" />
              <button className="add-to-cart-button">Add to cart</button>
            </div>
            <nav>
              <a href="#" className="catalog-element">
                Hal Earrings
              </a>
            </nav>
            <div className="catalog-price">$ 25,00</div>
          </div>
          <div className="kaede-hear-pin">
            <div className="image-wrapper">
              <img src="./assests/kaede hear pin.png" />
              <button className="add-to-cart-button">Add to cart</button>
            </div>
            <nav>
              <a href="#" className="catalog-element">
                {" "}
                Kaede Hair Pin Set Of 3{" "}
              </a>
            </nav>
            <div className="catalog-price">$ 30,00</div>
          </div>
        </div>
        <div className="second-boxes-part">
          <div className="kaede-hear-pin">
            <div className="image-wrapper">
              <img src="./assests/kaede hear pin.png" />
              <button className="add-to-cart-button">Add to cart</button>
            </div>
            <nav>
              <a href="#" className="catalog-element">
                {" "}
                Kaede Hair Pin Set Of 3{" "}
              </a>
            </nav>
            <div className="catalog-price">$ 30,00</div>
          </div>
          <div className="hair-pin-set">
            <div className="image-wrapper">
              <img src="./assests/hairset-back.png" />
              <button className="add-to-cart-button">Add to cart</button>
            </div>
            <nav>
              <a href="#" className="catalog-element">
                Hair Pin Set of 3
              </a>
            </nav>
            <div className="catalog-price">$ 30,00</div>
          </div>
          <div className="plaine-necklace">
            <div className="image-wrapper">
              <img src="./assests/plaine necklace.png" />
              <button className="add-to-cart-button">Add to cart</button>
            </div>
            <nav>
              <a href="#" className="catalog-element">
                {" "}
                Plaine Necklace
              </a>
            </nav>
            <div className="catalog-price">$ 19,00</div>
          </div>
          <div className="yuki-set">
            <div className="image-wrapper">
              <div className="sale">
                <div className="text">-%21</div>
              </div>
              <img src="./assests/yuki hair set.png" />
              <button className="add-to-cart-button">Add to cart</button>
            </div>
            <nav>
              <a href="#" className="catalog-element">
                Yuki Hair Pin Set of 3
              </a>
            </nav>
            <div className="price">
              <div className="catalog-price">$ 29,00</div>
              <div className="sale-price">
                <div className="text"> $ 29,00</div>
                <div className="line"></div>
              </div>
              <div className="price-visible">$ 25,00</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

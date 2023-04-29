import "./CatalogPart.scss";
import liraEarings from "../../../../../assets/images/lira earings.png";
import halEarings from "../../../../../assets/images/hal earings.png";
import kaedeHearPin from "../../../../../assets/images/kaede hear pin.png";
import hairSetBack from "../../../../../assets/images/hairset-back.png";
import plaineNecklace from "../../../../../assets/images/plaine necklace.png";
import yukiHairSet from "../../../../../assets/images/yuki hair set.png";
export const CatalogPart = () => {
  return (
    <section className="catalog-section">
      <div className="first-boxes-part">
        <div className="lira-earings">
          <div className="image-wrapper">
            <img src={liraEarings} />
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
            <img src={halEarings} />
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
            <img src={kaedeHearPin} />
            <button className="add-to-cart-button">Add to cart</button>
          </div>
          <nav>
            <a href="#" className="catalog-element">
              Kaede Hair Pin Set Of 3
            </a>
          </nav>
          <div className="catalog-price">$ 30,00</div>
        </div>
      </div>
      <div className="second-boxes-part">
        <div className="kaede-hear-pin">
          <div className="image-wrapper">
            <img src={kaedeHearPin} />
            <button className="add-to-cart-button">Add to cart</button>
          </div>
          <nav>
            <a href="#" className="catalog-element">
              Kaede Hair Pin Set Of 3
            </a>
          </nav>
          <div className="catalog-price">$ 30,00</div>
        </div>
        <div className="hair-pin-set">
          <div className="image-wrapper">
            <img src={hairSetBack} />
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
            <img src={plaineNecklace} />
            <button className="add-to-cart-button">Add to cart</button>
          </div>
          <nav>
            <a href="#" className="catalog-element">
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
            <img src={yukiHairSet} />
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
  );
};

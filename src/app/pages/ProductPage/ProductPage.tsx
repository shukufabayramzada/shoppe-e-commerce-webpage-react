import "./ProductPage.scss";
import liraEarings from "../../../assets/images/lira earings.png";
import share from "../../../assets/icons/share.svg";
import starIcon from "../../../assets/icons/star.svg";
import facebook from "../../../assets/icons/facebook.svg";
import instagram from "../../../assets/icons/instagram.svg";
import twitter from "../../../assets/icons/twitter.svg";
import emailIcon from "../../../assets/icons/email icon.svg";
import whiteStar from "../../../assets/icons/white star.svg";
import halEarings from "../../../assets/images/hal earings.png";
import plaineNecklace from "../../../assets/images/plaine necklace.png";
import kaedeHearPin from "../../../assets/images/kaede hear pin.png";
import earings from "../../../assets/images/earings lira.png";

export const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="hero-container ">
        <div className="hero-first-subhead">
          <div className="images-part">
            <div className="left-part">
              <img src={liraEarings} />
              <img src={liraEarings} />
              <img src={liraEarings} />
              <img src={liraEarings} />
            </div>
            <div className="right-part">
              <img src={earings} />
            </div>
          </div>
          <div className="text-part">
            <div className="catalog-element">Lira Earrings</div>
            <div className="price-share">
              <div className="catalog-price">$ 20,00</div>
              <button className="share-button">
                <img src={share} />
              </button>
            </div>
            <div className="review">
              <div className="stars">
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
              </div>
              <div>1 customer review</div>
            </div>
            <div className="info-and-button">
              <div className="mobile-only">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat,...
              </div>
              <div className="info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat, augue a volutpat hendrerit, sapien tortor faucibus
                augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis consequat sed eu felis.
              </div>
              <div className="buttons">
                <div className="button-box">
                  <button className="toggle-btn">-</button>
                  <button className="toggle-btn">1</button>
                  <button className="toggle-btn">+</button>
                </div>
                <button className="cartbutton">ADD TO CART</button>
              </div>
            </div>
            <div className="view-more">
              <div className="text">View more</div>
              <button>{">"}</button>
            </div>
            <div className="hero-ended-line"></div>
            <div className="icons">
              <button>
                <img src={emailIcon} />
              </button>
              <button>
                <img src={facebook} />
              </button>
              <button>
                <img src={instagram} />
              </button>
              <button>
                <img src={twitter} />
              </button>
            </div>

            <div className="first-end-part">
              <div className="name">SKU:</div>
              <div className="subname">12</div>
            </div>
            <div className="second-end-part">
              <div className="name">Categories:</div>
              <div className="subname">Fashion, Style</div>
            </div>
          </div>
        </div>
        <div className="hero-second-subhead">
          <nav>
            <div className="link-button">
              <a href="#" className="nav-link">
                Description
              </a>
              <button className="link-mobile-only">{">"}</button>
            </div>
            <div className="link-button">
              <a href="#" className="nav-link">
                Aditional information{" "}
              </a>
              <button className="link-mobile-only">{">"}</button>
            </div>
            <div className="link-button">
              <a href="#" className="link">
                Reviews(0)
              </a>
              <button className="link-mobile-only">{">"}</button>
            </div>
          </nav>
          <div className="hero-ended-line"></div>
          <div className="text-boxes">
            <div className="left-text-box">
              <div className="subhead">2 Reviews for lira earings</div>
              <div className="personal-info">
                <div className="name">Scarlet withch</div>
                <div className="date">6 May, 2020</div>
              </div>
              <div className="stars">
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={whiteStar} />
                <img src={whiteStar} />
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet.{" "}
              </div>
              <div className="line"></div>
              <div className="personal-info-2">
                <div className="name">Scarlet withch</div>
                <div className="date">6 May, 2020</div>
              </div>
              <div className="stars">
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={whiteStar} />
                <img src={whiteStar} />
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet.{" "}
              </div>
            </div>
            <div className="right-text-box">
              <div className="subhead">Add a Review</div>
              <div className="required">
                Your email address will not be published. Required fields are
                marked *
              </div>
              <div className="your-review">Your Review*</div>
              <form className="input-group">
                <input type="text" className="input-field" />
                <input
                  type="text"
                  className="input-field"
                  placeholder="Enter your name*"
                  required
                />
                <input
                  type="email"
                  className="input-field"
                  placeholder="Enter your Email*"
                  required
                />
              </form>
              <div className="input-group-2">
                <input type="checkbox" className="checkbox" />
                <span>
                  Save my name, email, and website in this browser for the next
                  time I comment
                </span>
              </div>
              <div className="your-review">Your Rating*</div>
              <div className="stars">
                <img src={whiteStar} />
                <img src={whiteStar} />
                <img src={whiteStar} />
                <img src={whiteStar} />
                <img src={whiteStar} />
              </div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
        <div className="hero-third-subhead">
          <div className="subhead">Similar Items</div>
          <div className="first-boxes-part">
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
            <div className="plaine-necklace">
              <div className="image-wrapper">
                <img src={plaineNecklace} />
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
            <div className="kaede-hear-pin">
              <div className="image-wrapper">
                <img src={kaedeHearPin} />
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
          <div className="continue">
            <div className="text">Continue shopping</div>
            <button>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

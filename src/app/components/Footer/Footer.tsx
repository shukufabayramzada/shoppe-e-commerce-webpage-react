import "./Footer.scss";
import arrowButton from "../../../assets/icons/arrow.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import facebook from "../../../assets/icons/facebook.svg";
import instagram from "../../../assets/icons/instagram.svg";
import twitter from "../../../assets/icons/twitter.svg";

export const Footer = () => {
  return (
    <section className="footer-section">
      <div className="first-footer-line"></div>
      <div className="first-footer-part">
        <nav>
          <a href="#" className="nav-link">
            CONTACT
          </a>
          <a href="#" className="nav-link">
            TERMS OF SERVICES
          </a>
          <a href="#" className="nav-link">
            SHIPPING AND RETURNS
          </a>
        </nav>
        <div className="check-part">
          <div className="emailpart">
            <input
              type="text"
              className="suggest"
              placeholder="Give an email, get the newsletter."
            />
            <button>
              <img src={arrowButton} />
            </button>
          </div>
          <div className="lineitem"></div>
          <div className="input-group-2">
            <input type="checkbox" className="checkbox" />
            <span>i agree to the website’s terms and conditions</span>
          </div>
        </div>
      </div>
      <div className="second-footer-part">
        <div className="text">
          <div className="textbold">© 2021 Shelly.</div>
          <nav>
            <a href="#" className="nav-link">
              Terms of use
            </a>
          </nav>
          <div className="textbold">and</div>
          <nav>
            <a href="#" className="nav-link">
              privacy policy.
            </a>
          </nav>
        </div>
        <div className="ended-part">
          <div className="mobile-only">Follow us</div>
          <div className="icons">
            <button>
              <img src={linkedin} />
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
        </div>
      </div>
    </section>
  );
};

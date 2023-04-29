import "./Account.scss";
import firstSlider from "../../../assets/icons/slider button.svg";
import secondSlider from "../../../assets/icons/slider button 2.svg";
export const AccountPage = () => {
  return (
    <div className="account-page">
      <div className="hero-container">
        <div className="subhead">My Account</div>
        <div className="slider-part">
          <button className="light">
            <img src={firstSlider} />
          </button>
          <nav>
            <a href="#" className="nav-link-1">
              Dashboard
            </a>
            <a href="#" className="nav-link">
              Orders{" "}
            </a>
            <a href="#" className="nav-link">
              Downloads
            </a>
            <a href="#" className="nav-link-visible">
              Addresses
            </a>
            <a href="#" className="nav-link-visible">
              Account details
            </a>
            <a href="#" className="nav-link-visible">
              Logout
            </a>
          </nav>
          <button className="dark">
            <img src={secondSlider} />
          </button>
        </div>
        <div className="header-ended-line"></div>
      </div>
      <section className="text-part">
        <div className="first-rows">
          <div className="text">Hello Vitatheme (not Vitatheme?</div>
          <nav>
            <a href="#" className="nav-link">
              Log out
            </a>
          </nav>
          <div className="text">)</div>
        </div>
        <br />
        <div className="second-rows">
          <div className="part-of-text">
            From your account dashboard you can view your{" "}
          </div>
          <div className="part-of-text">
            <nav>
              <a href="#" className="nav-link">
                recent orders
              </a>
            </nav>
            <div className="text">,</div>
            <div className="text">manage your</div>
            <nav>
              <a href="#" className="nav-link">
                shipping and billing
              </a>
            </nav>
          </div>
          <div className="part-of-text">
            <nav>
              <a href="#" className="nav-link">
                addresses
              </a>
            </nav>
            <div className="text">,and edit your </div>
            <nav>
              <a href="#" className="nav-link">
                password and account
              </a>
            </nav>
          </div>
          <div className="part-of-text">
            <nav>
              <a href="#" className="nav-link">
                details
              </a>
            </nav>
            <div className="text">.</div>
          </div>
        </div>
      </section>
    </div>
  );
};

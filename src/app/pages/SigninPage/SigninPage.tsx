import { Link } from "react-router-dom";
import "./SigninPage.scss";
export const SigninPage = () => {
  return (
    <div className="signin-page">
      <div className="hero-container">
        <div className="subhead">Sign in</div>
        <form className="input-group">
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            required
          />
        </form>
        <div className="input-group-2">
          <input type="checkbox" className="checkbox" />
          <span>Remember me</span>
        </div>
        <button type="submit" className="submit">
          SIGN IN
        </button>
        <nav>
          <a href="#" className=" ended-text">
            Have you forgotten your password?
          </a>
        </nav>
        <div className="seperation-part">
          <div className="seperation-line"></div>
          <div className="text">or</div>
          <div className="seperation-line"></div>
        </div>
        <div className="no-account">
          If you don't have any account:
          <nav>
            <Link to="/register" className="register">
              Register
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

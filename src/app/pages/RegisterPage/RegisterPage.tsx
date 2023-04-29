import "./RegisterPage.scss";
export const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="hero-container">
        <div className="subhead">Register</div>
        <form className="input-group">
          <input type="text" className="input-field" placeholder="Username" />
          <input
            type="text"
            className="input-field"
            placeholder="Email Address"
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
          />
          <input
            type="password"
            className="input-field"
            placeholder="Confirm Password"
          />
        </form>
        <div className="input-group-2">
          <input type="checkbox" className="checkbox" />
          <span>Remember me</span>
        </div>
        <button id="register" type="submit" className="submit">
          Register
        </button>
      </div>
    </div>
  );
};

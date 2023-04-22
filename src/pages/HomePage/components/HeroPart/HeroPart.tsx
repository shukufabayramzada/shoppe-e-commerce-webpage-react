import './HeroPart.scss'
export const HeroPart = () => {
  return (
    <section className="hero-container">
      <div className="hero-section">
        <div className="about-section">Gold big hoops</div>
        <div className="price">$ 68,00</div>
        <button>View Product</button>
      </div>
      <div className="sliders">
        <button className="ellipse-1"></button>
        <button className="ellipse-2"></button>
        <button className="ellipse-2"></button>
        <button className="ellipse-2"></button>
        <button className="ellipse-2"></button>
      </div>
    </section>
  );
};

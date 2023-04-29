import "./HomePage.scss";
import { CatalogPart } from "./components/CatalogPart/CatalogPart";
import { HeroPart } from "./components/HeroPart/HeroPart";
export const HomePage = () => {
  return (
    <div className="home-page">
      <HeroPart />
      <div className="subhead">
        <div className="shoplatest">Shop The Latest</div>
        <nav>
          <a href="#" className="nav-link">
            View All
          </a>
        </nav>
      </div>
      <CatalogPart />
    </div>
  );
};

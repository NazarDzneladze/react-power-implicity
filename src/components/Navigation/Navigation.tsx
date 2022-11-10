import { ReactComponent as LogoIcon } from "../../assets/icons/navigation-logo.svg";
import "./navigation.scss";

export const Navigation = () => {
  return (
    <div className="navigation">
      <a href="/#" className="navigation__link-logo">
        <LogoIcon />
      </a>
      <nav className="navigation__nav">
        <a href="/#" className="navigation__nav-link">
          Features
        </a>
        <a href="/#" className="navigation__nav-link">
          Partners
        </a>
        <a href="/#" className="navigation__nav-link">
          Stories
        </a>
      </nav>
      <button className="navigation__button">Download for free</button>
      <div className="navigation__burger">
        <div className="burger-line1"></div>
        <div className="burger-line2"></div>
        <div className="burger-line3"></div>
      </div>
    </div>
  );
};

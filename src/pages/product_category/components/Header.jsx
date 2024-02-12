import { Link } from 'react-router-dom';
import bigMac from '../../../assets/images/category_hero.svg';

const Header = () => {
  return (
    <header id="hero-category">
      <div className="container">
        <div className="hero-columns">
          <div className="hero-text">
            <h1>Apple MacBook</h1>
            <p>
              Experience Next-Level Performance: Introducing the MacBook,
              Redefining Speed and Effieciency.
            </p>
            <div className="btn-container">
              <Link to="/" className="link">
                <span>Learn More</span>
                <i className="bx bx-chevron-right"></i>
              </Link>
              <Link to="/" className="btn">
                Buy
              </Link>
            </div>
          </div>
          <div className="hero-img">
            <img src={bigMac} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Link } from 'react-router-dom';
import bigMac from '../../../assets/images/category_hero.svg';

const Header = ({ category }) => {
  return (
    <header id="hero-category">
      <div className="container">
        <div className="hero-columns">
          <div className="hero-text">
            <h1>{category.heroTitle}</h1>
            <p>{category.heroDescription}</p>
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
            <img src={category.heroImage} alt="" width="668px" height="471px" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

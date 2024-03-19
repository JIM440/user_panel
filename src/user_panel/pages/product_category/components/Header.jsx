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
              <Link
                to={`/overview/${category.featuredProductName
                  .toLowerCase()
                  .replace(/\s/g, '')}`}
                className="link"
              >
                <span>Learn More</span>
                <i className="bx bx-chevron-right"></i>
              </Link>
              <Link
                to={`/buy/${category.featuredProductName
                  .toLowerCase()
                  .replace(/\s/g, '')}`}
                className="btn"
              >
                Buy
              </Link>
            </div>
          </div>
          <div className="hero-img">
            <img
              src="https://www.apple.com/v/ipad/home/ci/images/overview/hero/ipad_pro_hero__bh3eq6sqfjw2_large.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Link } from 'react-router-dom';
import LawEnforcement from '../../commons/LawEnforcement';
import ProductCatalogue from '../../commons/Product-catalogue';
import bigMac from '../../assets/images/category_hero.svg';

const Category = () => {
  return (
    <>
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

      {/* description */}
      <section id="description">
        <div className="container">
          <div>
            <h2>Overview</h2>
            <p>
              Welcome to our MacBook category, where you can discover the latest
              and most powerful laptops from Apple. Whether you're a student,
              creative professional, or business user, MacBook offers
              exceptional performance, stunning design, and a seamless user
              experience.
            </p>
          </div>
          <div>
            <h2>Performance</h2>
            <p>
              MacBooks are equipped with powerful processors, ample RAM, and
              lightning-fast storage, enabling you to effortlessly handle
              resource-intensive tasks such as graphic design, video editing,
              and software development. Experience unparalleled speed and
              efficiency in your work.
            </p>
          </div>
          <div>
            <h2>Design</h2>
            <p>
              Apple's meticulous attention to design is reflected in the sleek
              and elegant aesthetics of the MacBook lineup. With their slim
              profiles, aluminum unibody construction, and vibrant Retina
              displays, MacBooks truly stand out in any setting.
            </p>
          </div>
          <div>
            <h2>Integration</h2>
            <p>
              Seamlessly integrate your MacBook into the Apple ecosystem. Take
              advantage of features like Handoff, iCloud syncing, and Continuity
              to effortlessly switch between your MacBook and other Apple
              devices, ensuring a smooth and uninterrupted workflow.
            </p>
          </div>
        </div>
      </section>
      {/* choose macbook */}
      <section id="products">
        <div className="container">
          <h2>Choose Your MacBook</h2>
          <ProductCatalogue />
        </div>
      </section>
      <LawEnforcement />
    </>
  );
};

export default Category;

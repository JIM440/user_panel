import { Link } from 'react-router-dom';
import watch from '../assets/images/products/ipad.jpg';

const ProductCatalogue = ({className}) => {
  return (
    <>
      <div className={`product-container ${className}`}>
        <div className="product-card">
          <div className='product-image'>
            <img src={watch} alt="" />
          </div>
          <h3 className="name">Smart Watches</h3>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="btn-container">
            <Link to="/" className="link">
              <span>Learn More</span>
              <i class="bx bx-chevron-right"></i>
            </Link>
            <Link to="/" className="btn">
              Buy
            </Link>
          </div>
        </div>
        <div className="product-card">
          <div className='product-image'>
            <img src={watch} alt="" />
          </div>
          <h3 className="name">Smart Watches</h3>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="btn-container">
            <Link to="/" className="link">
              <span>Learn More</span>
              <i class="bx bx-chevron-right"></i>
            </Link>
            <Link to="/" className="btn">
              Buy
            </Link>
          </div>
        </div>
        <div className="product-card">
          <div className='product-image'>
            <img src={watch} alt="" />
          </div>
          <h3 className="name">Smart Watches</h3>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="btn-container">
            <Link to="/" className="link">
              <span>Learn More</span>
              <i class="bx bx-chevron-right"></i>
            </Link>
            <Link to="/" className="btn">
              Buy
            </Link>
          </div>
        </div>
        <div className="product-card">
          <div className='product-image'>
            <img src={watch} alt="" />
          </div>
          <h3 className="name">Smart Watches</h3>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="btn-container">
            <Link to="/" className="link">
              <span>Learn More</span>
              <i class="bx bx-chevron-right"></i>
            </Link>
            <Link to="/" className="btn">
              Buy
            </Link>
          </div>
        </div>
        <div className="product-card">
          <div className='product-image'>
            <img src={watch} alt="" />
          </div>
          <h3 className="name">Smart Watches</h3>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="btn-container">
            <Link to="/" className="link">
              <span>Learn More</span>
              <i class="bx bx-chevron-right"></i>
            </Link>
            <Link to="/" className="btn">
              Buy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCatalogue;

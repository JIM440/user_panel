import bigImage1 from '../../../assets/images/big-image-1.png';
import bigImage2 from '../../../assets/images/big-image-2.png';
import bigImage3 from '../../../assets/images/big-image-3.png';
import truck from '../../../assets/icons/detail/Free Shipping.svg';
import moneyBack from '../../../assets/icons/detail/Money Box.svg';
import support from '../../../assets/icons/detail/24 Hours Day Support.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductDetail = () => {
  const [visible, setVisible] = useState(1);

  const FuncVisible = (p) => {
    setVisible(p);
  };

  return (
    <section id="product-detail">
      <div className="container">
        <div className="product-detail-columns">
          {/* image container */}
          <div className="img">
            {/* small images */}
            <div className="small-images-container">
              <button
                onClick={() => {
                  FuncVisible(1);
                }}
                className="small-img active"
              >
                <img src={bigImage1} alt="" />
              </button>
              <button
                onClick={() => {
                  FuncVisible(2);
                }}
                className="small-img"
              >
                <img src={bigImage2} alt="" />
              </button>
              <button
                onClick={() => {
                  FuncVisible(3);
                }}
                className="small-img"
              >
                <img src={bigImage3} alt="" />
              </button>
            </div>
            {/* big image */}
            <div className="big-image">
              <img
                className={visible === 1 ? 'visible' : ''}
                src={bigImage1}
                alt="watch"
                style={{ transform: `translateX(${-100 * (visible - 1)}%)` }}
              />
              <img
                className={visible === 2 ? 'visible' : ''}
                src={bigImage2}
                alt="watch"
                style={{ transform: `translateX(${-100 * (visible - 1)}%)` }}
              />
              <img
                className={visible === 3 ? 'visible' : ''}
                src={bigImage3}
                alt="watch"
                style={{ transform: `translateX(${-100 * (visible - 1)}%)` }}
              />
            </div>
          </div>
          {/* text */}
          <div className="text">
            <h2>Apple Watch Series 9</h2>
            <p>
              Experience power and style with the MacBook Pro 2020. It features
              Intel processors, a stunning Retina display, Touch Bar, improved
              keyboard, ample storage, and long-lasting battery life. Connect
              effortlessly with Thunderbolt 3 ports and enjoy seamless macOS
              integration. Elevate your computing with the MacBook Pro 2020.
            </p>
            <div className="rating">
              <p>5 Stars</p>
              <Link to="/">5 reviews</Link>
            </div>
            <div className="price">
              <p className="discounted-price">$400</p>
              <p className="sale-price">$700</p>
            </div>
            <div className="color-container">
              <p>Colors:</p>
              <div className="colors">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
              </div>
            </div>
            <div className="btn-container">
              <button>Add To Cart</button>
              <Link to="/" className="btn">
                Buy Now
              </Link>
            </div>
            <div className="product-icons">
              <div>
                <img src={truck} alt="" />
                <span>Free Delivery</span>
              </div>
              <div>
                <img src={moneyBack} alt="" />
                <span>30 Days Money Back</span>
              </div>
              <div>
                <img src={support} alt="" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

import small from '../../assets/images/small-img.svg';
import bigImage from '../../assets/images/big-image.svg';
import truck from '../../assets/icons/detail/Free Shipping.svg';
import moneyBack from '../../assets/icons/detail/Money Box.svg';
import support from '../../assets/icons/detail/24 Hours Day Support.svg';
import ProductCatalogue from '../../commons/Product-catalogue';
import LawEnforcement from '../../commons/LawEnforcement';
import { Link } from 'react-router-dom';

const Detail = () => {
  return (
    <>
      {/* product detail */}
      <section id="product-detail">
        <div className="container">
          <div className="product-detail-columns">
            {/* image container */}
            <div className="img">
              {/* small images */}
              <div className="small-images-container">
                <button className="small-img active">
                  <img src={small} alt="" />
                </button>
                <button className="small-img">
                  <img src={small} alt="" />
                </button>
                <button className="small-img">
                  <img src={small} alt="" />
                </button>
              </div>
              {/* big image */}
              <div className="big-image">
                <img src={bigImage} alt="" />
              </div>
            </div>
            {/* text */}
            <div className="text">
              <h2>Apple Watch Series 9</h2>
              <p>
                Experience power and style with the MacBook Pro 2020. It
                features Intel processors, a stunning Retina display, Touch Bar,
                improved keyboard, ample storage, and long-lasting battery life.
                Connect effortlessly with Thunderbolt 3 ports and enjoy seamless
                macOS integration. Elevate your computing with the MacBook Pro
                2020.
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
      {/* related products */}
      <section id="related-products">
        <div className="container">
          <h2>Related Products</h2>
          <ProductCatalogue className="overflow" />
        </div>
      </section>
      {/* reviews */}
      <section id="reviews">
        <div className="container">
          <h2>Ratings & Reviews</h2>
          <div className="review-container">
            <div>
              <div>
                <p>5 Stars</p>
                <p>143 Reviews</p>
              </div>
              <button className="btn write">Write a Review</button>
            </div>
            <div className="review-list">
              <div className="review">
                <div className="name">
                  <span>MS</span>
                  <p>Maja Salvador</p>
                </div>
                <div className="rating-date">
                  <div className="stars">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </div>
                  <span>07/12/2021</span>
                </div>
                <p className="review-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque totam tempore at sint commodi eius ut id cumque fugiat,
                  inventore tempora, architecto aliquam enim velit. Et itaque ad
                  voluptate architecto.
                </p>
              </div>
              <div className="review">
                <div className="name">
                  <span>MS</span>
                  <p>Maja Salvador</p>
                </div>
                <div className="rating-date">
                  <div className="stars">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </div>
                  <span>07/12/2021</span>
                </div>
                <p className="review-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque totam tempore at sint commodi eius ut id cumque fugiat,
                  inventore tempora, architecto aliquam enim velit. Et itaque ad
                  voluptate architecto.
                </p>
              </div>
            </div>
            <Link to="/" className="link">
              <span>See All Reviews</span>
              <i className="bx bx-chevron-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <LawEnforcement />
    </>
  );
};

export default Detail;

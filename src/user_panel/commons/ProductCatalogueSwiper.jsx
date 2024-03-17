import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import watch from '../assets/images/products/ipad.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import ProductCategorySkeleton from './skeletons/ProductCategorySkeleton';
const ProductCatalogue = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);
  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        scrollbar={{ draggable: true }}
      >
        {products ? (
          <div className="product-container">
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="product-card">
                  <div className="product-image">
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
              </SwiperSlide>
            ))}
          </div>
        ) : (
          <ProductCategorySkeleton className={'overflow'} />
        )}
      </Swiper>
    </>
  );
};

export default ProductCatalogue;

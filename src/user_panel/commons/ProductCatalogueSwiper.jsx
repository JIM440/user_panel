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
      {products ? (
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView="auto"
          navigation
          scrollbar={{ draggable: true }}
          className="product-container"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="product-card">
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
                  <i className="bx bx-chevron-right"></i>
                </Link>
                <Link to="/" className="btn">
                  Buy
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ProductCategorySkeleton className={'overflow'} />
      )}
    </>
  );
};

export default ProductCatalogue;

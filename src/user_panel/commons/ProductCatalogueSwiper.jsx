import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCategorySkeleton from './skeletons/ProductCategorySkeleton';
const ProductCatalogue = ({ data }) => {
  return (
    <>
      {data ? (
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={32}
          slidesPerView="auto"
          navigation
          scrollbar={{ draggable: true }}
          className="product-container"
        >
          {data.map((product, index) => (
            <SwiperSlide key={index} className="product-card">
              <div className="product-image">
                <img
                  src="https://cdn-ipoint.waugi.com.ar/26496-large_default/iphone-15-pro-128gb.jpg"
                  alt=""
                />
              </div>
              <h3 className="name">{product.name}</h3>
              <p className="description">
                {product.description.long_description}
              </p>
              <div className="btn-container">
                <Link
                  to={`/overview/${product.name
                    .toLowerCase()
                    .replace(/\s/g, '')}`}
                  className="link"
                >
                  <span>Learn More</span>
                  <i className="bx bx-chevron-right"></i>
                </Link>
                <Link
                  to={`/buy/${product.name.toLowerCase().replace(/\s/g, '')}`}
                  className="btn"
                >
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

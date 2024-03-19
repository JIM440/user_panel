import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const ProductDetailImage = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={48}
      slidesPerView="auto"
      navigation
      pagination
      className="img"
    >
      <SwiperSlide>
        <img
          src="https://gait.com.qa/media/catalog/product/C/o/Conf-wtch9-Slvalu-bluSP__1.jpg?quality=100&fit=bounds&height=700&width=700"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ML763_VW_34FR+watch-case-45-stainless-gold-s9_VW_34FR+watch-face-45-stainless-gold-s9_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=MEp1NU0yNHJrRzJPTzV4alVta3BRbUtvSkhsRytqVWE5dUpMRCtqb2E5M0RsaU1LbHJSSUdkbzU1bnVMdkRDT2VPYzl6QnR0dWVTR2N5RXJHSkhsQXJBWkdiQ2pTTHVjdzZSbFp4dWtpVXRQQ2k0c3ptdHNUTktGQnRKZVhpNWtEbHJhREVkUlF5L0c3emxEY0c2QUJtdHpZVGZEajdNRW5XSVpDZ0FDVDlSc29VdkFQbWg1b0NDTTJLejlERVlKYkJZTnJwOEl1ajIwenExd0JnT0ZLb2VKN0llWWxoMUdoTXNrS00vWmQyOD0"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://static.fnac-static.com/fr-FR/fch/01/img/95826dcf-1c8f-41a4-a81b-7d94a8f108e4.jpeg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FNTW3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1676674564438"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductDetailImage;

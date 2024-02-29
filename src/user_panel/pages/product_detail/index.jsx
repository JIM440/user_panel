import LawEnforcement from '../../commons/LawEnforcement';
import ProductDetail from './components/ProductDetail';
import RelatedProducts from './components/RelatedProducts';
import Reviews from './components/Reviews';

const Detail = () => {
  return (
    <>
      {/* product detail */}
      <ProductDetail />

      {/* related products */}
      <RelatedProducts />

      {/* reviews */}
      <Reviews />

      {/* law enforcement */}
      <LawEnforcement />
    </>
  );
};

export default Detail;

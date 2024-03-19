import { useEffect, useState } from 'react';
import LawEnforcement from '../../commons/LawEnforcement';
import ProductDetail from './components/ProductDetail';
import RelatedProducts from './components/RelatedProducts';
import Reviews from './components/Reviews';
import { useParams } from 'react-router-dom';
import NotFound from '../notFound';

const Detail = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();
  useEffect(() => {
    const api = `https://appleproductsbackend.vercel.app/v1/product/search/name/?name=${name.toLowerCase()}`;
    fetch(api)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Data not found');
        }
        res.json();
      })
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }, [name]);
  if (isLoading) {
    return (
      <div
        style={{
          height: '100vh',
        }}
      ></div>
    );
  }
  if (!product) {
    return <NotFound />;
  }
  return (
    <>
      {/* product detail */}
      <ProductDetail product={product} />

      {/* related products */}
      <RelatedProducts product={product} />

      {/* reviews */}
      <Reviews product={product} />

      {/* law enforcement */}
      <LawEnforcement />
    </>
  );
};

export default Detail;

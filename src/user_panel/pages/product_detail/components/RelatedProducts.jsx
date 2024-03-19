import { useEffect, useState } from 'react';
import ProductCatalogueSwiper from '../../../commons/ProductCatalogueSwiper';
import ProductCategorySkeleton from '../../../commons/skeletons/ProductCategorySkeleton';

const RelatedProducts = ({ product }) => {
  const [relatedProducts, setRelatedProducts] = useState(null);
  useEffect(() => {
    const api = `https://appleproductsbackend.vercel.app/v1/product/search/category?category=${product.category}`;
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(
          data.filter((relatedProduct) => relatedProduct.name !== product.name)
        );
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }, []);
  return (
    <section id="related-products">
      <div className="container">
        <h2>Related Products</h2>
        <ProductCatalogueSwiper data={relatedProducts} />
      </div>
    </section>
  );
};

export default RelatedProducts;

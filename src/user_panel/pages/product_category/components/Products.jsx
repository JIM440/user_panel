import React, { useState } from 'react';
import ProductCatalogue from '../../../commons/Product-catalogue';
import ProductCategorySkeleton from '../../../commons/skeletons/ProductCategorySkeleton';

const Products = () => {
  const [products, setProducts] = useState(null);
  return (
    <section id="products">
      <div className="container">
        <h2>Choose Your MacBook</h2>
        {products ? <ProductCatalogue /> : <ProductCategorySkeleton />}
      </div>
    </section>
  );
};

export default Products;

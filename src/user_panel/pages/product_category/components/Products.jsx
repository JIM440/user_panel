import React, { useEffect, useState } from 'react';
import ProductCatalogue from '../../../commons/Product-catalogue';
import ProductCategorySkeleton from '../../../commons/skeletons/ProductCategorySkeleton';

const Products = ({ category }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch(
      `https://appleproductsbackend.vercel.app/v1/product/search/category?category=${category.categoryName}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <section id="products">
      <div className="container">
        <h2>Choose Your {category.categoryName}</h2>
        {products ? (
          <ProductCatalogue product={products} />
        ) : (
          <ProductCategorySkeleton />
        )}
      </div>
    </section>
  );
};

export default Products;

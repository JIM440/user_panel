import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCategorySkeleton from '../../../commons/skeletons/ProductCategorySkeleton';

const ProductCatalogue = () => {
  const [products, setProducts] = useState([]);

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
    <section id="product-catalogue-about">
      <div className="container">
        <h2>Explore Our Product Catalogue</h2>
        <p>
          Discover a world of Apple products at iStore. From the latest iPhone
          models to powerful MacBooks, iPads, and Apple Watches, our product
          range covers all your technology needs.
        </p>
        <div className="product-container overflow">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <h3 className="name">{product.title}</h3>
                <div className="btn-container">
                  <Link to="/detail" className="link">
                    <span>Learn More</span>
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <ProductCategorySkeleton />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalogue;

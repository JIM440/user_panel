import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCategorySkeleton from '../../../commons/skeletons/ProductCategorySkeleton';

const Products = () => {
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

  const handleOnclick = (id, title, image) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItem')) || [];

    const product = {
      id: id,
      name: title,
      quantity: 1,
      image: image,
    };

    cartItems.push(product);

    localStorage.setItem('cartItem', JSON.stringify(cartItems));
  };

  return (
    <section id="product-catalogue-about">
      <div className="container">
        <div className="product-container">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <h3 className="name">{product.title}</h3>
                <div className="btn-container">
                  <Link to="/" className="link">
                    <span>View Cart</span>
                  </Link>
                  <button
                    style={{
                      width: '300px',
                    }}
                    className="btn"
                    onClick={() => {
                      handleOnclick(product.id, product.title, product.image);
                    }}
                  >
                    <small>Add To Cart</small>
                  </button>
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

export default Products;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCategorySkeleton from '../../../../user_panel/commons/skeletons/ProductCategorySkeleton';

const ProductContainer = () => {
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
    <>
      <div className="product-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              className="product-card"
              key={product.id}
              style={{
                alignItems: 'start',
                height: 'fit-content',
              }}
            >
              <div
                className="product-image"
                style={{
                  alignSelf: 'center',
                }}
              >
                <img src={product.image} alt={product.title} />
              </div>
              <h3 className="name">{product.title}</h3>
              <p>Description</p>
              <p>Category</p>
              <p>
                Cost Price: <span>$400</span>
              </p>
              <p>
                Selling Price: <span>$450</span>
              </p>
              <div className="btn-container admin">
                <Link to="/overview" className="link">
                  <span>View</span>
                  <i className="bx bx-chevron-right"></i>
                </Link>
                <button>
                  <i className="bx bx-dots-horizontal-rounded"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <ProductCategorySkeleton />
        )}
      </div>
    </>
  );
};

export default ProductContainer;

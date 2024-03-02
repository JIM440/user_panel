import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCategorySkeleton from '../../../../user_panel/commons/skeletons/ProductCategorySkeleton';
import Header from '../../../commons/Header';
// images
import search from '../../../assets/icons/Search.svg';
import filter from '../../../assets/icons/Control Panel.svg';

const ProductCategories = () => {
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
      <Header text="Product Categories" />
      <div className="container">
        <div className="search-filters">
          <div className="search-container">
            <img src={search} alt="" />
            <input type="search" placeholder="Search" />
            <button>
              <img src={search} alt="" />
            </button>
          </div>
          <div className="filters-container">
            <select name="" id="">
              <option value="">All Categories</option>
              <option value="">Watch</option>
              <option value="">iPhone</option>
              <option value="">iPad</option>
              <option value="">AirPods</option>
              <option value="">MacBooks</option>
            </select>
            <select name="" id="">
              <option value="last added">Last Added</option>
              <option value="">Newest First</option>
              <option value="">Oldest First</option>
            </select>
          </div>
        </div>
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
      </div>
    </>
  );
};

export default ProductCategories;

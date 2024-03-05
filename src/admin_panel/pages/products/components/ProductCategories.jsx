import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCategorySkeleton from '../../../../user_panel/commons/skeletons/ProductCategorySkeleton';
import HeaderBtn from '../../../commons/HeaderBtn';
// images
import search from '../../../assets/icons/Search.svg';
import dots from '../../../assets/icons/horizontal-dots.png';

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

  // const products = [
  //   {
  //     id: 1,
  //     image: 'image',
  //     title: 'Apple Watch',
  //   },
  //   {
  //     id: 2,
  //     image: 'image',
  //     title: 'Apple iPad',
  //   },
  //   {
  //     id: 3,
  //     image: 'image',
  //     title: 'Apple MacBook',
  //   },
  //   {
  //     id: 4,
  //     image: 'image',
  //     title: 'iPhone 15 ProMax',
  //   },
  // ];

  return (
    <>
      <HeaderBtn
        text="Product Categories"
        url="/admin/product/category/add"
        urlText="Add Category"
      />
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
                  height: 'fit-content',
                }}
              >
                <div
                  className="product-image"
                  style={{
                    alignSelf: 'center',
                    backgroundColor: 'rgba(65, 105, 225, 0.53)',
                    borderRadius: '22px',
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
                  <div className="buttons grey-bg">
                    <button className="manage-icon">
                      <img src={dots} alt="" width="20px" height="20px" />{' '}
                    </button>
                    <div>
                      <Link to="edit">Edit</Link>
                      <button className="delete">Delete</button>
                    </div>
                  </div>
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

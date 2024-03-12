import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCategorySkeleton from '../../../../user_panel/commons/skeletons/ProductCategorySkeleton';
import HeaderBtn from '../../../commons/HeaderBtn';
// images
import search from '../../../assets/icons/Search.svg';
import dots from '../../../assets/icons/horizontal-dots.png';
import OrderbyDate from '../../../commons/OrderbyDate';
import Search from '../../../commons/Search';

const ProductCategories = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching products:', error);
  //     });
  // }, []);

  const products = [
    {
      id: '1',
      name: 'iPhone',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202834000',
    },
    {
      id: '2',
      name: 'iPad',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-air-wifi-green-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1644268592092',
    },
    {
      id: '3',
      name: 'MacBook',
      image:
        'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP854/mbp14-silver2.png',
    },
    {
      id: '4',
      name: 'Apple Watch',
      image:
        'https://i5.walmartimages.com/asr/3580b718-154d-427d-898c-05b3e46332ba.779952d7e83af1cd4883757c516eb7b5.png',
    },
    {
      id: '5',
      name: 'AirPods',
      image:
        'https://images.macrumors.com/t/2oOomFnia-hmIfwvXVejKx3mNEE=/1600x/article-new/2019/10/airpods-pro-roundup.jpg',
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);
    setFilteredProducts(
      products.filter((product) => product.name.toLowerCase().includes(text))
    );
  };

  return (
    <>
      <HeaderBtn
        text="Product Categories"
        url="/admin/products/categories/add"
        urlText="Add Category"
      />
      <div className="container">
        <div className="search-filters">
          <Search handleSearch={handleSearch} />
          <div className="filters-container">
            {/* sort by date */}
            <OrderbyDate />
          </div>
        </div>
        <div className="product-container product-container-admin">
          {products ? (
            filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  className="product-card"
                  key={product.id}
                  style={{
                    height: 'fit-content',
                    borderRadius: '22px',
                  }}
                >
                  <div
                    className="product-image"
                    style={{
                      alignSelf: 'center',
                      borderRadius: '22px',
                    }}
                  >
                    <img src={product.image} alt={product.name} />
                  </div>
                  <h3 className="name">{product.name}</h3>
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
              <p className="product-not-found">No Category Found!</p>
            )
          ) : (
            <ProductCategorySkeleton />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCategories;

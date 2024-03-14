import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCategorySkeleton from '../../../../user_panel/commons/skeletons/ProductCategorySkeleton';
import HeaderBtn from '../../../commons/HeaderBtn';
import handleSorting from '../../../utils/handlers/handleSort';

// images
import search from '../../../assets/icons/Search.svg';
import dots from '../../../assets/icons/horizontal-dots.png';

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
      date_added: new Date('2012-02-02'),
    },
    {
      id: '2',
      name: 'iPad',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-air-wifi-green-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1644268592092',
      date_added: new Date('2012-01-02'),
    },
    {
      id: '3',
      name: 'MacBook',
      image:
        'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP854/mbp14-silver2.png',
      date_added: new Date('2012-04-02'),
    },
    {
      id: '4',
      name: 'Apple Watch',
      image:
        'https://i5.walmartimages.com/asr/3580b718-154d-427d-898c-05b3e46332ba.779952d7e83af1cd4883757c516eb7b5.png',
      date_added: new Date('2012-06-02'),
    },
    {
      id: '5',
      name: 'AirPods',
      image:
        'https://images.macrumors.com/t/2oOomFnia-hmIfwvXVejKx3mNEE=/1600x/article-new/2019/10/airpods-pro-roundup.jpg',
      date_added: new Date('2012-07-02'),
    },
  ];

  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [orderByDateValue, setOrderByDateValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleOnchange = (e) => {
    if (e.target.name === 'order_by_date') {
      setOrderByDateValue(e.target.value);
      const search = products.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      const date = handleSorting(search, e.target.value);
      setDisplayedProducts(date);
    } else if (e.target.name === 'search') {
      setSearchValue(e.target.value);
      const search = products.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      const date = handleSorting(search, orderByDateValue);
      setDisplayedProducts(date);
    }
  };

  return (
    <>
      <HeaderBtn
        text="Product Categories"
        url="/admin/products/categories/add"
        urlText="Add Category"
      />
      <div className="container">
        {/* search and filter */}
        <div className="search-filters">
          <div className="search-container">
            <img src={search} alt="search icon" />
            <input
              type="search"
              placeholder="Search"
              name="search"
              onChange={handleOnchange}
            />
          </div>
          <div className="filters-container">
            {/* order by date */}
            <select name="order_by_date" id="" onChange={handleOnchange}>
              <option value="">Order By</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
        <div className="product-container product-container-admin">
          {products ? (
            displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
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

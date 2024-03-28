import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// fxns and components
import ProductCategorySkeleton from '../../../../user_panel/commons/skeletons/ProductCategorySkeleton';
import HeaderBtn from '../../../commons/HeaderBtn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// images
import search from '../../../assets/icons/Search.svg';
import dots from '../../../assets/icons/horizontal-dots.png';
import deleteData from '../../../utils/async_await/delete';
import Loader from '../../../layout/Loader';
const ProductCategories = () => {
  const [products, setProducts] = useState(null);
  const fetchProducts = () => {
    fetch('https://appleproductsbackend.vercel.app/v1/category/')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setDisplayedProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };
  useEffect(() => {
    fetch('https://appleproductsbackend.vercel.app/v1/category/')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setDisplayedProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);
  const [displayLoader, setDisplayLoader] = useState('hide');
  const [deleteId, setDeleteId] = useState(null);
  const [productName, setProductName] = useState('');
  // for the first display to confirm delete
  const [display, setDisplay] = useState(false);
  // for the second display to enter product name then delete the product
  const [inputDis, setInputDis] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleActiveIndex = (index) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index);
  };
  const handleClickOutside = () => {
    if (Number.isInteger(activeIndex)) {
      setActiveIndex(null);
    }
  };
  // perform product deletetion
  const performDelete = async () => {
    if (inputProductVal === productName) {
      setInputProductVal('');
      setDisplayLoader('show');

      await deleteData(
        `v1/category/${deleteId}`,
        `Category Deleted Succesfully`
      );

      setDisplayLoader('hide');
      fetchProducts();
      // window.location.reload();
      closeDisplay();
    } else {
      return;
    }
  };
  const closeDisplay = () => {
    setDisplay(false);
    setInputDis(false);
  };

  // used to store the value of the product to be deleted entered by user
  const [inputProductVal, setInputProductVal] = useState('');
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [orderByDateValue, setOrderByDateValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  // fomat date
  const FormatDate = (date) => {
    return new Date(date);
  };
  // handle sorting
  const handleSorting = (cat, orderByDateValue) => {
    if (orderByDateValue === 'newest') {
      return cat.sort((a, b) => {
        const dateA = FormatDate(a.createdAt);
        const dateB = FormatDate(b.createdAt);
        return dateA < dateB ? 1 : -1;
      });
    } else if (orderByDateValue === 'oldest') {
      return cat.sort((a, b) => {
        const dateA = FormatDate(a.createdAt);
        const dateB = FormatDate(b.createdAt);
        return dateA > dateB ? 1 : -1;
      });
    } else {
      return cat;
    }
  };
  const handleOnchange = (e) => {
    if (e.target.name === 'order_by_date') {
      setOrderByDateValue(e.target.value);
      const search = products.filter((product) =>
        product.categoryName.toLowerCase().includes(searchValue.toLowerCase())
      );
      const date = handleSorting(search, e.target.value);
      setDisplayedProducts(date);
    } else if (e.target.name === 'search') {
      setSearchValue(e.target.value);
      const search = products.filter((product) =>
        product.categoryName
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      const date = handleSorting(search, orderByDateValue);
      setDisplayedProducts(date);
    }
  };
  return (
    <>
      <Loader display={`${displayLoader}`} />
      <HeaderBtn
        text="Product Categories"
        url="/admin/products/categories/add"
        urlText="Add Category"
      />
      <div className="container" onClick={handleClickOutside}>
        {/* search and filter */}
        {products && (
          <div className="search-filters">
            <div className="search-container">
              <img src={search} alt="search icon" />
              <input
                type="search"
                placeholder="Search by category name"
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
        )}
        <div className="product-container product-container-admin">
          {products ? (
            displayedProducts.length > 0 ? (
              displayedProducts.map((product, index) => (
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
                    <img src={product.image} alt={product.categoryName} />
                  </div>
                  <h3 className="name">{product.categoryName}</h3>
                  <div className="btn-container admin">
                    <Link
                      to={`/${product.categoryName
                        .toLowerCase()
                        .replace(/\s/g, '')}`}
                      className="link"
                    >
                      <span>View</span>
                      <i className="bx bx-chevron-right"></i>
                    </Link>
                    <div className="buttons grey-bg">
                      <button
                        className="manage-icon"
                        onClick={() => {
                          toggleActiveIndex(index);
                        }}
                      >
                        <img src={dots} alt="" width="20px" height="20px" />
                      </button>
                      <div
                        className={`${index === activeIndex ? 'active' : ''}`}
                      >
                        <Link
                          className="blue"
                          to={`edit/${product.categoryName
                            .toLowerCase()
                            .replace(/\s/g, '')}`}
                        >
                          Edit
                        </Link>
                        <button
                          className="delete"
                          onClick={() => {
                            setDeleteId(product.id);
                            setProductName(product.categoryName);
                            setDisplay(true);
                          }}
                        >
                          Delete
                        </button>
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
        <div className={`confirm-delete ${display === true ? 'active' : ''}`}>
          <div>
            <p>Are you sure you want to delete this Category?</p>
            <div className="btn-container">
              <button
                className="btn danger"
                onClick={() => {
                  setDisplay(false);
                  setInputDis(true);
                }}
              >
                Delete
              </button>
              <button
                className="btn"
                onClick={() => {
                  closeDisplay();
                  setActiveIndex(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className={`confirm-delete ${inputDis === true ? 'active' : ''}`}>
          <div>
            <p>Enter category name to delete this category ({productName})</p>
            <input
              type="text"
              placeholder="Enter Product Name"
              style={{ width: '100%' }}
              value={inputProductVal}
              onChange={(e) => {
                setInputProductVal(e.target.value);
              }}
            />
            <div className="btn-container">
              <button
                className="btn danger"
                style={{
                  backgroundColor: `${
                    productName === inputProductVal ? 'red' : '#f006'
                  }`,
                  cursor: `${
                    productName === inputProductVal ? 'pointer' : 'default'
                  }`,
                }}
                onClick={() => {
                  if (inputProductVal === productName) {
                    performDelete();
                  }

                  setActiveIndex(null);
                }}
              >
                Delete
              </button>
              <button
                className="btn"
                onClick={() => {
                  closeDisplay();
                  setActiveIndex(null);
                  setInputProductVal('');
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
};

export default ProductCategories;

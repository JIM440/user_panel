import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// components
import HeaderBtn from '../../../commons/HeaderBtn';
// fxns
import deleteData from '../../../utils/async_await/delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// images
import dots from '../../../assets/icons/horizontal-dots.png';
import Loader from '../../../layout/Loader';

const HomeContent = () => {
  const [displayLoader, setDisplayLoader] = useState('hide');

  const [headerSlides, setHeaderSlides] = useState(null);
  const fetchSlides = () => {
    const api = 'https://appleproductsbackend.vercel.app/v1/hero';

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setHeaderSlides(data);
      })
      .catch((err) => console.log('Error', err));
  };

  useEffect(() => {
    const api = 'https://appleproductsbackend.vercel.app/v1/hero';

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setHeaderSlides(data);
      })
      .catch((err) => console.log('Error', err));
  }, []);

  const [deleteId, setDeleteId] = useState(null);
  const [display, setDisplay] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleActiveIndex = (index) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index);
  };

  const handleClickOutside = () => {
    if (Number.isInteger(activeIndex)) {
      setActiveIndex(null);
    }
  };

  const performDelete = async () => {
    setDisplayLoader('show');
    await deleteData(`v1/hero/${deleteId}`, 'Hero slide deleted successfully');
    fetchSlides();
    closeDisplay();
  };

  const closeDisplay = () => {
    setDisplay(false);
  };

  return (
    <>
      <Loader display={`${displayLoader}`} />
      <HeaderBtn
        text="Content Management - Home"
        url="add"
        urlText="Add Header Slide"
        className="btw"
      />
      {/* header slides */}
      <div className="container" onClick={handleClickOutside}>
        {headerSlides ? (
          headerSlides.length === 0 ? (
            <h2 style={{ textAlign: 'center' }}>
              No Header Slides Found!🚨🚨🚨
            </h2>
          ) : (
            <div className="admin-header-container">
              {headerSlides.map((slide, index) => (
                <div className="admin-header-box" key={index}>
                  <div className="img">
                    <img src={slide.image} alt="" />
                  </div>
                  <div className="content">
                    <h3>{slide.product_name}</h3>
                    <p>{slide.category_name}</p>
                    <p>{slide.description}</p>
                    <p>Position: {slide.slide_position}</p>
                    {/* <Link to={`${slide.product_name.toLowerCase().replace(/\s/g, '')}`}>pro
                    </Link> */}
                    <div className="buttons">
                      <button
                        className="manage-icon"
                        onClick={() => {
                          toggleActiveIndex(index);
                        }}
                      >
                        <img src={dots} alt="dots icon" />
                      </button>
                      <div
                        className={`${index === activeIndex ? 'active' : ''}`}
                      >
                        <Link to={`edit/${slide.id}`}>Edit</Link>
                        <button
                          className="delete"
                          onClick={() => {
                            setDeleteId(slide.id);
                            setDisplay(true);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="home-skeleton-content-container">
            <div className="home-skeleton-content-card">
              <div className="img"></div>
              <div className="text">
                <div></div>
                <div></div>
                <div></div>
                <div></div>

                <div></div>
              </div>
            </div>
            <div className="home-skeleton-content-card">
              <div className="img"></div>
              <div className="text">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="home-skeleton-content-card">
              <div className="img"></div>
              <div className="text">
                <div></div>
                <div></div>

                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`confirm-delete ${display === true ? 'active' : ''}`}>
        <div>
          <p>Are you sure you want to delete this header slide?</p>
          <div className="btn-container">
            <button
              className="btn danger"
              onClick={() => {
                performDelete();
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
              }}
            >
              Cancel
            </button>
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

export default HomeContent;

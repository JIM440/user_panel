import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderBtn from '../../../commons/HeaderBtn';
// images
import dots from '../../../assets/icons/horizontal-dots.png';
import deleteData from '../../../utils/async_await/delete';
import Loader from '../../../layout/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AboutContent = () => {
  // const [testimonials, setTestimonials] = useState([
  //   {
  //     testimonial_id: 1,
  //     author: 'John Doe',
  //     text: 'Great products and excellent customer service. I highly recommend iStore!',
  //     date: '2022-09-15',
  //     image: 'https://source.unsplash.com/featured/?person',
  //   },
  //   {
  //     testimonial_id: 2,
  //     author: 'Jane Smith',
  //     text: 'I love shopping at iStore. The quality of the products is top-notch!',
  //     date: '2022-09-18',
  //     image: 'https://source.unsplash.com/featured/?portrait',
  //   },
  //   {
  //     testimonial_id: 3,
  //     author: 'Alice Johnson',
  //     text: 'Amazing experience with iStore. Will definitely be a returning customer!',
  //     date: '2022-09-20',
  //     image: 'https://source.unsplash.com/featured/?nature',
  //   },
  // ]);
  const [testimonials, setTestimonials] = useState(null);
  const fetchData = () => {
    fetch(
      'https://appleproductsbackend.vercel.app/api/testimonial/fetchall'
    ).then((res) =>
      res.json().then((data) => {
        setTestimonials(data);
      })
    );
  };
  useEffect(() => {
    fetch(
      'https://appleproductsbackend.vercel.app/api/testimonial/fetchall'
    ).then((res) =>
      res.json().then((data) => {
        setTestimonials(data);
      })
    );
  }, []);
  const [displayLoader, setDisplayLoader] = useState('hide');

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
    await deleteData(
      `api/content/about/delete/${deleteId}`,
      'Testimonial Deleted Successfully'
    );
    fetchData();
    setDisplayLoader('hide');
    closeDisplay();
  };
  const closeDisplay = () => {
    setDisplay(false);
  };

  return (
    <>
      <Loader display={`${displayLoader}`} />
      <HeaderBtn
        text="Content Management - About"
        url="add"
        urlText="Add Testimonial"
        className="btw"
      />
      <div className="container" onClick={handleClickOutside}>
        {testimonials ? (
          testimonials.length === 0 ? (
            <p style={{ textAlign: 'center', width: '100%' }}>
              No Testimonial Found!🚨🚨🚨
            </p>
          ) : (
            <div className="admin-testimonial-container">
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-box" key={index}>
                  <div className="testimonial-details">
                    <div>
                      <div className="img">
                        <img src={testimonial.image} alt="" />
                      </div>
                      <div>
                        <p className="name">{testimonial.author}</p>
                        <span className="date">{testimonial.date}</span>
                      </div>
                    </div>
                    <p className="content">{testimonial.text}</p>
                  </div>
                  <div className="buttons">
                    <button
                      className="manage-icon"
                      style={{
                        width: '20px',
                      }}
                      onClick={() => {
                        toggleActiveIndex(index);
                      }}
                    >
                      <img src={dots} alt="" width="18px" />
                    </button>
                    <div className={`${index === activeIndex ? 'active' : ''}`}>
                      <Link
                        className="blue"
                        to={`edit/${testimonial.testimonial_id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="delete"
                        onClick={() => {
                          setDeleteId(testimonial.testimonial_id);
                          setDisplay(true);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="about-content-skeleton">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <div className={`confirm-delete ${display === true ? 'active' : ''}`}>
          <div>
            <p>Are you sure you want to delete this testimonial?</p>
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

export default AboutContent;

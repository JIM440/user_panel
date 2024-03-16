import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBtn from '../../../commons/HeaderBtn';
// images
import dots from '../../../assets/icons/horizontal-dots.png';
import performFetchDelete from '../../../utils/Fetch/PerformFetchDelete';
const AboutContent = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      author: 'John Doe',
      text: 'Great products and excellent customer service. I highly recommend iStore!',
      date: '2022-09-15',
      image: 'https://source.unsplash.com/featured/?person',
    },
    {
      id: 2,
      author: 'Jane Smith',
      text: 'I love shopping at iStore. The quality of the products is top-notch!',
      date: '2022-09-18',
      image: 'https://source.unsplash.com/featured/?portrait',
    },
    {
      id: 3,
      author: 'Alice Johnson',
      text: 'Amazing experience with iStore. Will definitely be a returning customer!',
      date: '2022-09-20',
      image: 'https://source.unsplash.com/featured/?nature',
    },
  ]);
  const [deleteId, setDeleteId] = useState(null);
  const [display, setDisplay] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleActiveIndex = (index) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index);
  };
  const performDelete = () => {
    alert('You deleted the testimonial with id:  ' + deleteId);
    performFetchDelete(`api/content/about/delete/${deleteId}`);
    setTestimonials(testimonials.filter((slides) => slides.id !== deleteId));
    closeDisplay();
  };
  const closeDisplay = () => {
    setDisplay(false);
  };

  return (
    <>
      <HeaderBtn
        text="Content Management - About"
        url="add"
        urlText="Add Testimonial"
        className="btw"
      />
      <div className="container">
        <div className="admin-testimonial-container">
          {testimonials ? (
            testimonials.length === 0 ? (
              <p style={{ textAlign: 'center', width: '100%' }}>
                No Testimonial Found!🚨🚨🚨
              </p>
            ) : (
              testimonials.map((testimonial, index) => (
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
                      <Link className="blue" to={`edit/${testimonial.id}`}>
                        Edit
                      </Link>
                      <button
                        className="delete"
                        onClick={() => {
                          setDeleteId(testimonial.id);
                          setDisplay(true);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )
          ) : (
            <p>Data is Loading...</p>
          )}
        </div>
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
    </>
  );
};

export default AboutContent;

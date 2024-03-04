import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBtn from '../../../commons/HeaderBtn';
// images
import dots from '../../../assets/icons/horizontal-dots.png';
const AboutContent = () => {
  const [deleteId, setDeleteId] = useState(null);
  const [display, setDisplay] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleActiveIndex = (index) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index);
  };
  const performDelete = () => {
    alert('You deleted the testimonial at index ' + deleteId);
    setDisplay(false);
  };
  const closeDisplay = () => {
    setDisplay(false);
  };
  const setEditId = (index) => {
    localStorage.setItem('testimonialId', index);
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      imageUrl: 'sarah.jpg',
      content:
        'I absolutely love my new phone from this website! The features are amazing, and the customer service was top-notch.',
      date: '2024-02-29',
    },
    {
      name: 'John Smith',
      imageUrl: 'john.jpg',
      content:
        "I'm impressed with the quality of the phone I purchased here. The delivery was quick, and the phone exceeded my expectations.",
      date: '2024-02-28',
    },
    {
      name: 'Emily Wong',
      imageUrl: 'emily.jpg',
      content:
        "This website offers a great selection of phones at competitive prices. I found the perfect phone for my needs, and I couldn't be happier.",
      date: '2024-02-27',
    },
  ];

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
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-box" key={index}>
              <div className="testimonial-details">
                <div>
                  <div className="img">
                    <img src="" alt="" />
                  </div>
                  <div>
                    <p className="name">{testimonial.name}</p>
                    <span className="date">{testimonial.date}</span>
                  </div>
                </div>
                <p className="content">{testimonial.content}</p>
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
                    to="edit"
                    onClick={() => {
                      setEditId(index);
                    }}
                  >
                    Edit
                  </Link>
                  <button
                    className="delete"
                    onClick={() => {
                      setDeleteId(index);
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

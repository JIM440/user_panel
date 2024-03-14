import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBtn from '../../../commons/HeaderBtn';
// images
import dots from '../../../assets/icons/horizontal-dots.png';

const HomeContent = () => {
  const [deleteId, setDeleteId] = useState(null);
  const [display, setDisplay] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleActiveIndex = (index) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index);
  };
  const performDelete = () => {
    alert('You deleted the header at index ' + (deleteId + 1));
    setDisplay(false);
  };
  const closeDisplay = () => {
    setDisplay(false);
  };
  const setEditId = (index) => {
    localStorage.setItem('testimonialId', index);
  };

  const headerSlides = [
    {
      name: 'Apple Watch Series 9',
      url: 'url to apple watch',
      description: 'The Next Level Adventure',
      position: '1',
      image:
        'https://www.apple.com/v/watch/bk/images/overview/series-9/tile_s9_avail__c104b8nuoec2_large.jpg',
    },
    {
      name: 'iPad Pro',
      url: 'url to iPad Pro',
      description: 'Change your life with just a click😂',
      position: '2',
      image:
        'https://www.apple.com/v/ipad/home/ci/images/overview/hero/ipad_pro_hero__bh3eq6sqfjw2_large.jpg',
    },
    {
      name: 'MacBook Pro',
      url: 'url to macbook',
      description: 'Macbook na book',
      position: '3',
      image:
        'https://www.apple.com/newsroom/images/2023/10/apple-unveils-new-macbook-pro-featuring-m3-chips/article/Apple-MacBook-Pro-2up-231030_Full-Bleed-Image.jpg.large.jpg',
    },
  ];
  return (
    <>
      <HeaderBtn
        text="Content Management - Home"
        url="add"
        urlText="Add Header Slide"
        className="btw"
      />
      {/* header slides */}
      <div className="container">
        <div className="admin-header-container">
          {headerSlides.map((slide, index) => (
            <div className="admin-header-box" key={index}>
              <div className="img">
                <img src={slide.image} alt="" />
              </div>
              <div className="content">
                <h3>{slide.name}</h3>
                <p>{slide.description}</p>
                <p>Position: {slide.position}</p>
                <Link to="">{slide.url}</Link>
                <div className="buttons">
                  <button
                    className="manage-icon"
                    onClick={() => {
                      toggleActiveIndex(index);
                    }}
                  >
                    <img src={dots} alt="dots icon" />
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
            </div>
          ))}
        </div>
        <div className={`confirm-delete ${display === true ? 'active' : ''}`}>
          <div>
            <p>Are you sure you want to delete this header?</p>
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

export default HomeContent;

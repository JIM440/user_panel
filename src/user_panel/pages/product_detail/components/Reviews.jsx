import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddReview from './AddReview';

const Reviews = () => {
  const [openReview, setOpenReview] = useState(false);

  useEffect(() => {
    fetch('');
  }, []);

  const toggleOpenReview = () => {
    setOpenReview(!openReview);
  };
  return (
    <>
      <section id="reviews">
        <div className="container">
          <h2>Ratings & Reviews</h2>
          <div className="review-container">
            <div>
              <div>
                <p>5 Stars</p>
                <p>143 Reviews</p>
              </div>
              <button
                className="btn write"
                onClick={() => {
                  toggleOpenReview();
                }}
              >
                Write a Review
              </button>
            </div>
            <div className="review-list">
              <div className="review">
                <div className="name">
                  <span>MS</span>
                  <p>Maja Salvador</p>
                </div>
                <div className="rating-date">
                  <div className="stars">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <span>07/12/2021</span>
                </div>
                <p className="review-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque totam tempore at sint commodi eius ut id cumque fugiat,
                  inventore tempora, architecto aliquam enim velit. Et itaque ad
                  voluptate architecto.
                </p>
              </div>
              <div className="review">
                <div className="name">
                  <span>MS</span>
                  <p>Maja Salvador</p>
                </div>
                <div className="rating-date">
                  <div className="stars">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <span>07/12/2021</span>
                </div>
                <p className="review-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque totam tempore at sint commodi eius ut id cumque fugiat,
                  inventore tempora, architecto aliquam enim velit. Et itaque ad
                  voluptate architecto.
                </p>
              </div>
            </div>
            <Link to="/" className="link">
              <span>See All Reviews</span>
              <i className="bx bx-chevron-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* add review */}
      <AddReview state={openReview} toggleFunc={toggleOpenReview} />
    </>
  );
};

export default Reviews;

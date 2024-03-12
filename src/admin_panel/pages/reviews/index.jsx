import React from 'react';
import Header from '../../commons/Header';
// images
import dots from '../../assets/icons/horizontal-dots.png';
import star from '../../assets/icons/Star.svg';
import OrderbyDate from '../../commons/OrderbyDate';
import Search from '../../commons/Search';

const Reviews = () => {
  const reviews = [
    {
      reviewer_name: 'John Doe',
      reviewer_image: 'https://source.unsplash.com/100x100/?person1',
      product_name: 'iPhone 12 Pro',
      rating: 5,
      date: '2021-10-16',
      review_text:
        'Absolutely love the iPhone 12 Pro! The camera quality is amazing and the performance is top-notch.',
    },
    {
      reviewer_name: 'Jane Smith',
      reviewer_image: 'https://source.unsplash.com/100x100/?person2',
      product_name: 'Apple Watch Series 6',
      rating: 4,
      date: '2021-10-17',
      review_text:
        'The Apple Watch Series 6 is a great smartwatch with useful health features. The battery life could be better though.',
    },
    {
      reviewer_name: 'Alice Johnson',
      reviewer_image: 'https://source.unsplash.com/100x100/?person3',
      product_name: 'MacBook Air',
      rating: 5,
      date: '2021-10-18',
      review_text:
        "The MacBook Air is so lightweight and the retina display is stunning. It's perfect for my work!",
    },
    {
      reviewer_name: 'Bob Brown',
      reviewer_image: 'https://source.unsplash.com/100x100/?person4',
      product_name: 'iPad Pro',
      rating: 4,
      date: '2021-10-19',
      review_text:
        "The iPad Pro is fast and the display is beautiful. It's great for both work and entertainment.",
    },
  ];

  const StarRating = (rating) => {
    const starImage = <img src={star} alt="Star" width="20px" />;
    const stars = Array.from({ length: rating }, (_, index) => starImage);

    return <>{stars}</>;
  };

  return (
    <>
      <Header text="Reviews" />
      <div className="container">
        <div className="search-filters">
          <Search />
          <div className="filters-container">
            <select name="" id="">
              <option value="last added">All Categories</option>
              <option value="">iPhone</option>
              <option value="">Watch</option>
              <option value="">iPad</option>
              <option value="">MacBook</option>
            </select>
            <select name="" id="">
              <option value="">Star Rating</option>
              <option value="last added">5 Stars</option>
              <option value="last added">4 Stars</option>
              <option value="last added">3 Stars</option>
              <option value="last added">2 Stars</option>
              <option value="last added">1 Stars</option>
            </select>
            <OrderbyDate />
          </div>
        </div>
        <div className="table-container review-table">
          <table>
            <thead>
              <tr>
                <th className="reviewer-name">Reviewer Name</th>
                <th className="product-name">Product Name</th>
                <th className="rating">Rating</th>
                <th className="date">Date</th>
                <th className="text">Text</th>
                <th className="actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews ? (
                reviews.map((review) => (
                  <tr>
                    <td>
                      <div className="user-details">
                        <img
                          src={review.reviewer_image}
                          alt=""
                          width="70px"
                          height="70px"
                        />
                        <p className="name">{review.reviewer_name}</p>
                      </div>
                    </td>
                    <td>{review.product_name}</td>
                    <td>{StarRating(review.rating)}</td>
                    <td>{review.date}</td>
                    <td>{review.review_text}</td>
                    <td>
                      <div className="buttons grey-bg">
                        <button className="manage-icon">
                          <img src={dots} alt="" width="20px" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <p>Date is Loading</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Reviews;

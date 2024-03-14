import { useState } from 'react';
import Header from '../../commons/Header';
// images
import dots from '../../assets/icons/horizontal-dots.png';
import star from '../../assets/icons/Star.svg';
import search from '../../assets/icons/Search.svg';
import handleSorting from '../../utils/handlers/handleSort';

const Reviews = () => {
  const reviews = [
    {
      reviewer_name: 'John Doe',
      reviewer_image: 'https://source.unsplash.com/100x100/?person1',
      product_name: 'iPhone 12 Pro',
      rating: 5,
      date_added: new Date('2021-10-16'),
      review_text:
        'Absolutely love the iPhone 12 Pro! The camera quality is amazing and the performance is top-notch.',
    },
    {
      reviewer_name: 'Jane Smith',
      reviewer_image: 'https://source.unsplash.com/100x100/?person2',
      product_name: 'Apple Watch Series 6',
      rating: 4,
      date_added: new Date('2021-10-17'),
      review_text:
        'The Apple Watch Series 6 is a great smartwatch with useful health features. The battery life could be better though.',
    },
    {
      reviewer_name: 'Alice Johnson',
      reviewer_image: 'https://source.unsplash.com/100x100/?person3',
      product_name: 'MacBook Air',
      rating: 5,
      date_added: new Date('2021-10-18'),
      review_text:
        "The MacBook Air is so lightweight and the retina display is stunning. It's perfect for my work!",
    },
    {
      reviewer_name: 'Bob Brown',
      reviewer_image: 'https://source.unsplash.com/100x100/?person4',
      product_name: 'iPad Pro',
      rating: 3,
      date_added: new Date('2021-10-19'),
      review_text:
        "The iPad Pro is fast and the display is beautiful. It's great for both work and entertainment.",
    },
  ];
  const [displayedReviews, setDisplayedReviews] = useState(reviews);
  const [categoryValue, setCategoryValue] = useState('');
  const [orderByDateValue, setOrderByDateValue] = useState('');
  const [ratingVal, setRatingVal] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleOnchange = (e) => {
    if (e.target.name === 'category') {
      setCategoryValue(e.target.value);
      const search = reviews.filter(
        (review) =>
          review.product_name
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          review.reviewer_name.toLowerCase().includes(searchValue.toLowerCase())
      );
      const cat = search.filter((review) =>
        review.product_name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      const rating = ratingVal
        ? cat.filter((review) => review.rating === parseInt(ratingVal))
        : cat;
      const date = handleSorting(rating, orderByDateValue);
      setDisplayedReviews(date);
    } else if (e.target.name === 'rating') {
      setRatingVal(e.target.value);
      const search = reviews.filter(
        (review) =>
          review.product_name
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          review.reviewer_name.toLowerCase().includes(searchValue.toLowerCase())
      );
      const cat = search.filter((review) =>
        review.product_name.toLowerCase().includes(categoryValue.toLowerCase())
      );
      const rating = e.target.value
        ? cat.filter((review) => review.rating === parseInt(e.target.value))
        : cat;
      const date = handleSorting(rating, orderByDateValue);
      setDisplayedReviews(date);
    } else if (e.target.name === 'order_by_date') {
      setOrderByDateValue(e.target.value);
      const search = reviews.filter(
        (review) =>
          review.product_name
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          review.reviewer_name.toLowerCase().includes(searchValue.toLowerCase())
      );
      const cat = search.filter((review) =>
        review.product_name.toLowerCase().includes(categoryValue.toLowerCase())
      );
      const rating = ratingVal
        ? cat.filter((review) => review.rating === parseInt(ratingVal))
        : cat;
      const date = handleSorting(rating, e.target.value);
      setDisplayedReviews(date);
    } else if (e.target.name === 'search') {
      setSearchValue(e.target.value);
      const search = reviews.filter(
        (review) =>
          review.product_name
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          review.reviewer_name
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
      );
      const cat = search.filter((review) =>
        review.product_name.toLowerCase().includes(categoryValue.toLowerCase())
      );
      const rating = ratingVal
        ? cat.filter((review) => review.rating === parseInt(ratingVal))
        : cat;

      const date = handleSorting(rating, orderByDateValue);
      setDisplayedReviews(date);
      console.log(search, cat, rating, date);
    }
  };

  const StarRating = (rating) => {
    const stars = Array.from({ length: rating }, (_, index) => (
      <img key={index} src={star} alt="Star" width="20px" />
    ));

    return <>{stars}</>;
  };

  return (
    <>
      <Header text="Reviews" />
      <div className="container">
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
            {/* filter by category */}
            <select name="category" id="" onChange={handleOnchange}>
              <option value="">All Categories</option>
              <option value="watch">Watch</option>
              <option value="iphone">iPhone</option>
              <option value="ipad">iPad</option>
              <option value="airpod">AirPods</option>
              <option value="macbook">MacBooks</option>
            </select>
            {/* filter by rating */}
            <select name="rating" id="" onChange={handleOnchange}>
              <option value="">Rating</option>
              <option value="5">5 stars</option>
              <option value="4">4 stars</option>
              <option value="3">3 stars</option>
              <option value="2">2 stars</option>
              <option value="1">1 star</option>
            </select>
            {/* order by date */}
            <select name="order_by_date" id="" onChange={handleOnchange}>
              <option value="">Order By</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
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
              {displayedReviews.length === 0 ? (
                <h2 style={{ textAlign: 'center', width: '90vw' }}>
                  No Review Found
                </h2>
              ) : displayedReviews ? (
                displayedReviews.map((review, index) => (
                  <tr key={index}>
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
                    <td>{review.date_added.toLocaleDateString()}</td>
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
                <p>Data is Loading...</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Reviews;

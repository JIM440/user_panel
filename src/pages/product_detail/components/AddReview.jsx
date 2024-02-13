import { useState } from 'react';
import { FaStar, FaTimes } from 'react-icons/fa';

const AddReview = ({ state, toggleFunc }) => {
  const [rating, setRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(null);
  const [textAreaVal, setTextAreaVal] = useState('');

  const handleStarClick = (value) => {
    setRating(value);
  };
  const handleStarMouseOver = (value) => {
    setHoverValue(value);
  };
  const handleStarMouseLeave = (value) => {
    setHoverValue(null);
  };
  const handleOnchange = (event) => {
    setTextAreaVal(event.target.value);
  };
  const handleSubmit = (event) => {
    if (rating < 1) {
      event.preventDefault();
      return;
    }
    alert(
      `You rated the product ${rating} stars and the message was *${textAreaVal}*`
    );
  };
  return (
    <div className={`add-review-container ${state ? 'open' : ''}`}>
      <form action="" onSubmit={handleSubmit} className="add-review-form">
        <span
          className="close-review"
          onClick={() => {
            setTextAreaVal('');
            setRating(0);
            toggleFunc();
          }}
        >
          <FaTimes />
        </span>
        <div className="user-details">
          <span className="letter">T</span>
          <p className="name">Maja Salvador</p>
        </div>
        <h3>Rate your experince</h3>
        <div className="stars">
          {
            //create an array with 5 untitled elements
            [...Array(5)].map((star, index) => {
              return (
                <FaStar
                  key={index}
                  onClick={() => {
                    handleStarClick(index + 1);
                  }}
                  onMouseLeave={() => {
                    handleStarMouseLeave(index + 1);
                  }}
                  onMouseOver={() => {
                    handleStarMouseOver(index + 1);
                  }}
                  color={(hoverValue || rating) > index ? 'gold' : '#e4e5e9'}
                />
              );
            })
          }
        </div>
        <textarea
          name=""
          id="review-desc"
          cols="30"
          rows="10"
          placeholder="Describe your experience with us"
          value={textAreaVal}
          required
          onChange={handleOnchange}
        ></textarea>
        <button
          type="submit"
          className="btn"
          style={{
            backgroundColor: `${rating < 1 ? '#e4e5e9' : '#2997ff'}`,
            cursor: `${rating < 1 ? 'unset' : 'pointer'}`,
          }}
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;

const AddReview = ({ state, toggleFunc }) => {
  return (
    <div className={`add-review-container ${state ? 'open' : ''}`}>
      <form action="" className="add-review-form">
        <span
          className="close-review"
          onClick={() => {
            toggleFunc();
          }}
        >
          <i class="bx bx-x"></i>
        </span>
        <div className="user-details">
          <span className="letter">T</span>
          <p className="name">Maja Salvador</p>
        </div>
        <h3>Rate your experince</h3>
        <div className="stars">
          <i className="bx bx-star"></i>
          <i className="bx bx-star"></i>
          <i className="bx bx-star"></i>
          <i className="bx bx-star"></i>
          <i className="bx bx-star"></i>
        </div>
        <textarea
          name=""
          id="review-desc"
          cols="30"
          rows="10"
          placeholder="Describe your experience with us"
          required
        ></textarea>
        <button type="submit" className="btn">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;

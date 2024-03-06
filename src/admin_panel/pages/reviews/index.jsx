import React from 'react';
import Header from '../../commons/Header';
// images
import search from '../../assets/icons/Search.svg';
import dots from '../../assets/icons/horizontal-dots.png';
import star from '../../assets/icons/Star.svg';

const Reviews = () => {
  return (
    <>
      <Header text="Reviews" />
      <div className="container">
        <div className="search-filters">
          <div className="search-container">
            <img src={search} alt="" />
            <input type="search" placeholder="Search" />
            <button>
              <img src={search} alt="" />
            </button>
          </div>
          <div className="filters-container">
            <select name="" id="">
              <option value="last added">All Categories</option>
              <option value="">iPhone</option>
              <option value="">Watch</option>
              <option value="">iPad</option>
              <option value="">MacBook</option>
            </select>
            <select name="" id="">
              <option value="last added">5 Stars</option>
              <option value="last added">4 Stars</option>
              <option value="last added">3 Stars</option>
              <option value="last added">2 Stars</option>
              <option value="last added">1 Stars</option>
            </select>
            <select name="" id="">
              <option value="last added">Last Added</option>
              <option value="">Newest First</option>
              <option value="">Oldest First</option>
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
              <tr>
                <td>
                  <div className="user-details">
                    <img src="" alt="" width="70px" height="70px" />
                    <p className="name">Jeremy Lynch</p>
                  </div>
                </td>
                <td>Apple Watch Series 9</td>
                <td>
                  <img src={star} alt="star" width="20px" />
                  <img src={star} alt="star" width="20px" />
                  <img src={star} alt="star" width="20px" />
                  <img src={star} alt="star" width="20px" />
                  <img src={star} alt="star" width="20px" />
                </td>
                <td>12-12-2024</td>
                <td>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam odit aliquam facere sequi tempora? Voluptatum
                  provident id et sint impedit?
                </td>
                <td>
                  <div className="buttons grey-bg">
                    <button className="manage-icon">
                      <img src={dots} alt="" width="20px" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="user-details">
                    <img src="" alt="" width="70px" height="70px" />
                    <p className="name">Jeremy Lynch</p>
                  </div>
                </td>
                <td>Apple Watch Series 9</td>
                <td>
                  <img src={star} alt="star" width="20px" />
                  <img src={star} alt="star" width="20px" />
                  <img src={star} alt="star" width="20px" />
                  <img src={star} alt="star" width="20px" />
                  <img src={star} alt="star" width="20px" />
                </td>
                <td>12-12-2024</td>
                <td>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam odit aliquam facere sequi tempora? Voluptatum
                  provident id et sint impedit?
                </td>
                <td>
                  <div className="buttons grey-bg">
                    <button className="manage-icon">
                      <img src={dots} alt="" width="20px" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="user-details">
                    <img src="" alt="" width="70px" height="70px" />
                    <p className="name">Jeremy Lynch</p>
                  </div>
                </td>
                <td>Apple Watch Series 9</td>
                <td>
                  <img src={star} alt="star" width="20px" />
                  <img src={star} alt="star" width="20px" />
                  <img src={star} alt="star" width="20px" />
                  <img src={star} alt="star" width="20px" />
                  <img src={star} alt="star" width="20px" />
                </td>
                <td>12-12-2024</td>
                <td>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam odit aliquam facere sequi tempora? Voluptatum
                  provident id et sint impedit?
                </td>
                <td>
                  <div className="buttons grey-bg">
                    <button className="manage-icon">
                      <img src={dots} alt="" width="20px" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="user-details">
                    <img src="" alt="" width="70px" height="70px" />
                    <p className="name">Jeremy Lynch</p>
                  </div>
                </td>
                <td>Apple Watch Series 9</td>
                <td>
                  <img src={star} alt="star" width="20px" />
                  <img src={star} alt="star" width="20px" />
                  <img src={star} alt="star" width="20px" />
                  <img src={star} alt="star" width="20px" />
                  <img src={star} alt="star" width="20px" />
                </td>
                <td>12-12-2024</td>
                <td>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam odit aliquam facere sequi tempora? Voluptatum
                  provident id et sint impedit?
                </td>
                <td>
                  <div className="buttons grey-bg">
                    <button className="manage-icon">
                      <img src={dots} alt="" width="20px" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Reviews;

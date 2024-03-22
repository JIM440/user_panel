import React, { useEffect, useRef } from 'react';
import './search.css';

const SearchComponent = ({ addClass, passedHeroSection }) => {
  const searchInput = useRef(null);
  useEffect(() => {
    if (addClass && searchInput.current) {
      searchInput.current.focus();
    } else {
      searchInput.current.blur();
    }
  }, [addClass]);

  return (
    <div
      className={`${
        addClass
          ? 'reveal-search main-search-container'
          : 'main-search-container'
      } ${passedHeroSection ? 'light' : ''}`}
    >
      <div className="search-tools">
        <form action="" className={addClass ? 'search-focus' : ''}>
          <input
            ref={searchInput}
            type="text"
            id="searchInput"
            placeholder="Search"
          />
          <svg
            className="search-button"
            width="36"
            height="44"
            viewBox="0 0 36 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_204_116)">
              <path d="M35.0344 37.0429L26.3296 28.3381C28.7018 25.4369 29.8681 21.7349 29.5873 17.9979C29.3065 14.2609 27.6002 10.7747 24.8211 8.26056C22.0421 5.74638 18.403 4.39652 14.6566 4.49019C10.9102 4.58387 7.34316 6.1139 4.69324 8.76382C2.04331 11.4137 0.513279 14.9808 0.419607 18.7272C0.325936 22.4736 1.6758 26.1127 4.18998 28.8917C6.70416 31.6707 10.1903 33.3771 13.9273 33.6579C17.6644 33.9387 21.3663 32.7724 24.2676 30.4002L32.9723 39.105C33.2474 39.3707 33.6158 39.5177 33.9981 39.5143C34.3805 39.511 34.7463 39.3576 35.0167 39.0872C35.2871 38.8169 35.4404 38.4511 35.4437 38.0687C35.4471 37.6864 35.3001 37.318 35.0344 37.0429ZM15.0451 30.7823C12.7376 30.7823 10.482 30.0981 8.5634 28.8161C6.64482 27.5342 5.14948 25.7121 4.26646 23.5803C3.38343 21.4485 3.1524 19.1027 3.60256 16.8396C4.05272 14.5765 5.16386 12.4977 6.79547 10.8661C8.42708 9.23445 10.5059 8.1233 12.769 7.67314C15.0321 7.22298 17.3779 7.45402 19.5097 8.33704C21.6415 9.22007 23.4636 10.7154 24.7455 12.634C26.0275 14.5526 26.7117 16.8082 26.7117 19.1156C26.7082 22.2088 25.478 25.1742 23.2908 27.3614C21.1036 29.5486 18.1382 30.7788 15.0451 30.7823Z" />
            </g>
            <defs>
              <clipPath id="clip0_204_116">
                <rect
                  width="35.0288"
                  height="44"
                  transform="translate(0.415039)"
                />
              </clipPath>
            </defs>
          </svg>
        </form>
      </div>
      <ul className="search-suggestions">
        <li className="suggestion-heading">Quick search</li>
        <li className="suggestion">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="512"
            height="512"
          >
            <path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" />
          </svg>
          iPhone 15 pro
        </li>
        <li className="suggestion">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="512"
            height="512"
          >
            <path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" />
          </svg>
          Laptops
        </li>
        <li className="suggestion">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="512"
            height="512"
          >
            <path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" />
          </svg>
          Watches
        </li>
        <li className="suggestion">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="512"
            height="512"
          >
            <path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" />
          </svg>
          Airpod Max
        </li>
      </ul>
    </div>
  );
};

export default SearchComponent;

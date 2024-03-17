import React from 'react';

const ProductCategorySkeleton = ({ className }) => {
  return (
    <div className={`skeleton-container ${className}`}>
      <div className="skeleton-card">
        <div className="skeleton-image"></div>
        <p className="skeleton-name"></p>
        <p className="skeleton-link"></p>
      </div>
      <div className="skeleton-card">
        <div className="skeleton-image"></div>
        <p className="skeleton-name"></p>
        <p className="skeleton-link"></p>
      </div>
      <div className="skeleton-card">
        <div className="skeleton-image"></div>
        <p className="skeleton-name"></p>
        <p className="skeleton-link"></p>
      </div>
      <div className="skeleton-card">
        <div className="skeleton-image"></div>
        <p className="skeleton-name"></p>
        <p className="skeleton-link"></p>
      </div>
      <div className="skeleton-card">
        <div className="skeleton-image"></div>
        <p className="skeleton-name"></p>
        <p className="skeleton-link"></p>
      </div>
    </div>
  );
};

export default ProductCategorySkeleton;

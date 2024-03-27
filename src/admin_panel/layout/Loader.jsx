import React from 'react';

const Loader = ({ display = 'show' }) => {
  return (
    <div className={`loader-container ${display}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;

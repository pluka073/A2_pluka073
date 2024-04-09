import React, { useState } from 'react';

const FavoritePopup = ({ isOpen, onClose }) => {
  return (
    <div className={`favorite-popup ${isOpen ? 'open' : ''}`}>
      <div className="favorite-popup-content">
        <h2>Add to Favorites</h2>
        <button onClick={onClose}>Close</button>
        {/* Add your favorite content here */}
      </div>
    </div>
  );
};

export default FavoritePopup;

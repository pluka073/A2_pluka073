//Resources: https://www.youtube.com/watch?v=D5oswSO9y-k

import React from 'react';
import '../../Modal.css';

const DriverModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            Close
          </p>
          <div className='listSelection'>
            <p>Drivers</p>
            <p>Constructors</p>
            <p>Circuits</p>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>Empty</span>
            </button>
            <button className='btnPrimary'>
              <span className='bold'>Favourite</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverModal;

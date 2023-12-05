// Modal.js
import React, { useEffect } from 'react';

const Modal = ({ onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [onClose]);

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Welcome to our website!</p>
        {/* Add other modal content here */}
      </div>
    </div>
  );
};

export default Modal;

import React from 'react';
import Styles from './ItemPopup.module.css'; // CSS module

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className={Styles.overlay} onClick={onClose}>
      <div
        className={Styles.popup}
        onClick={e => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button className={Styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={Styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Popup;

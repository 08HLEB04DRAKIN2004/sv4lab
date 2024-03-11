import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import '../styles/popup.css';

const PopupComponent = ({ isOpen, onClose, children }) => {
  return (
    <div className={isOpen ? 'popup-overlay active' : 'popup-overlay'} onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <IconButton className="close-btn" onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <CloseIcon />
        </IconButton>
        {children}
      </div>
    </div>
  );
}

export default PopupComponent;

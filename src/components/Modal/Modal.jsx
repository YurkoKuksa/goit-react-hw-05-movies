import React, { useEffect } from 'react';
import { Overlay } from './Modal.styled';

export const Modal = ({ close, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [close]);

  const handleClickOnBackdrop = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  return <Overlay onClick={handleClickOnBackdrop}>{children}</Overlay>;
};

export default Modal;

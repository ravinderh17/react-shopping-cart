import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "./Modal.css"

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();
  console.log("Modal is open", isOpen); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};
export default Modal;
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Validates that isOpen is a required boolean
  onClose: PropTypes.func.isRequired, // Validates that onClose is a required function
  children: PropTypes.node // Validates that children is a valid React node
};
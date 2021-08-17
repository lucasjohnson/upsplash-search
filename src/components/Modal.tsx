import React from "react";
import { FiX } from "react-icons/fi";
import Copy from "../json/copy.json";

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, toggleModal, children }) => {
  return (
    <div className="overlay" aria-hidden={!isOpen}>
      <div className="modal">
        {children}
        <button
          className="modal-close"
          onClick={toggleModal}
          aria-label={Copy.closeButton}
        >
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default Modal;

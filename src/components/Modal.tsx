import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[1000]"
      onClick={onClose}
    >
      <div
        className="relative max-w-[80%] max-h-[80%]"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="absolute top-2.5 right-4 text-white text-2xl cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <img
          src={imageSrc}
          alt="Modal"
          className="max-w-full max-h-[90%] rounded-lg"
        />
      </div>
    </div>
  );
};

export default Modal;

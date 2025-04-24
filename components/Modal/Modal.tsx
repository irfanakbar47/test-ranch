import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { IModalProps } from '@/types/global';

const Modal = ({ isOpen, onClose, title, children }: IModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300"
      style={{ opacity: isOpen ? 1 : 0 }}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full transition-transform duration-300"
        style={{ transform: isOpen ? 'scale(1)' : 'scale(0.9)' }}
      >
        {title && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
        )}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600"
        >
          <FaTimes size={24} />
        </button>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
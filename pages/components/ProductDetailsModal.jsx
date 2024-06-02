import React from 'react';

const ProductDetailsModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-4 w-1/3 rounded-md shadow-md">
        <img
          src={product.image} // Assuming the mock API has an "image" field
          alt={product.title}
          className="w-50 h-64 object-cover mb-4"
        />
        <h3 className="text-lg font-medium mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className='flex justify-between'>
        <span className="text-green-500 font-bold">${product.price}</span>
        <button className="mt-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700" onClick={onClose}>
          Close
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;

import React from 'react';

const Products = ({ products, onProductClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 shadow-md rounded-md cursor-pointer hover:bg-gray-100"
          onClick={() => onProductClick(product)}
        >
          <img
            src={product.image} // Assuming the mock API has an "image" field
            alt={product.title}
            className="w-50 h-48 object-cover mb-2"
          />
          <h3 className="text-lg font-medium mb-2">{product.title}</h3>
          <p className="text-gray-600 line-clamp-2">{product.description}</p>
          <span className="text-green-500 font-bold">${product.price}</span>
        </div>
      ))}
    </div>
  );
};

export default Products;

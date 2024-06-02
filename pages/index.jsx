import React, { useState, useEffect } from 'react';
import Products from './components/Products';
import SearchBar from './components/SearchBar';
import ProductDetailsModal from './components/ProductDetailsModal';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      {isLoading && <p className="text-center text-xl">Loading products...</p>}
      {error && <p className="text-center text-red-500 text-xl">Error: {error}</p>}
      {products.length > 0 && (
        <>
          <SearchBar value={searchTerm} onChange={handleSearch} />
          <Products products={filteredProducts} onProductClick={handleProductClick} />
        </>
      )}
      {selectedProduct && (
        <ProductDetailsModal product={selectedProduct} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default HomePage;

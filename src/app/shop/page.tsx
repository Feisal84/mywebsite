"use client";
import { useState } from 'react';
import { products as initialProducts } from '../products/items';

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center space-x-1 text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i}>★</span>
      ))}
      {halfStar && <span>☆</span>}
    </div>
  );
};

const ShopPage = () => {
  const [products, setProducts] = useState(initialProducts);

  const updateQuantity = (index: number, delta: number) => {
    setProducts(prev =>
      prev.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <section className='shop-page max-w-100% mx-auto py-16 mt-16 px-4 bg-light-100  min-h-screen'>
    <div className="min-h-screen max-w-100%  bg-light-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-light-800">Shopping page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain rounded-md mb-4 bg-white"
            />
            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            <p className="text-teal-600 font-bold mt-2">{product.price}</p>
            <div className="flex items-center mt-2">
              {renderStars(product.rating)}
              <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => updateQuantity(index, -1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-4">{product.quantity}</span>
              <button
                onClick={() => updateQuantity(index, 1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <button className="mt-4 w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ShopPage;


{/*import { products } from '../products/items';

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center space-x-1 text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i}>★</span>
      ))}
      {halfStar && <span>☆</span>}
    </div>
  );
};

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Shopping page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain rounded-md mb-4 bg-white"
            />
            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            <p className="text-teal-600 font-bold mt-2">{product.price}</p>
            <div className="flex items-center mt-2">
              {renderStars(product.rating)}
              <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
            </div>
            <button className="mt-4 w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

*/}
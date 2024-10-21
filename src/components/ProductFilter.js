import React, { useState } from 'react';

// Sample product data
const products = [
  { id: 1, name: 'Product A', category: 'Electronics' },
  { id: 2, name: 'Product B', category: 'Books' },
  { id: 3, name: 'Product C', category: 'Clothing' },
  { id: 4, name: 'Product D', category: 'Electronics' },
  { id: 5, name: 'Product E', category: 'Books' },
];

function ProductFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories including "All"
  const categories = ['All', ...new Set(products.map(product => product.category))];

  // Handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <h3>Product Filter</h3>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '150px' }}>
            <h4>{product.name}</h4>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;
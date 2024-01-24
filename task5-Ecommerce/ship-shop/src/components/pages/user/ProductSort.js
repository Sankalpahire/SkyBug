import React, { useState } from 'react';


const ProductSort = ({ sortProducts }) => {
  const [selectedSort, setSelectedSort] = useState('');

  const handleSortChange = (value) => {
    setSelectedSort(value);
    sortProducts(value);
  };

  return (
    <div className="product-sort-container">
      <h3>Sort Products</h3>
      <div className="sort-options">
        <label>
          <input
            type="radio"
            name="sortOption"
            value="date"
            checked={selectedSort === 'date'}
            onChange={() => handleSortChange('date')}
          />
          Date Added
        </label>
        <label>
          <input
            type="radio"
            name="sortOption"
            value="lowToHigh"
            checked={selectedSort === 'lowToHigh'}
            onChange={() => handleSortChange('lowToHigh')}
          />
          Price Low to High
        </label>
        <label>
          <input
            type="radio"
            name="sortOption"
            value="highToLow"
            checked={selectedSort === 'highToLow'}
            onChange={() => handleSortChange('highToLow')}
          />
          Price High to Low
        </label>
      </div>
    </div>
  );
};

export default ProductSort;
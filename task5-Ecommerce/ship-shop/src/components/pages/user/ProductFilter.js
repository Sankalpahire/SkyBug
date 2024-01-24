import React, { useState } from 'react';
const ProductFilter = ({ applyFilters }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);

  const handlePriceChange = (values) => {
    setPriceRange(values);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value, 10));
  };

  const handleApplyFilters = () => {
    // Pass the selected filters to the parent component for further processing
    applyFilters({ priceRange, category, rating });
  };

  return (
    <div className="product-filter-container">
      <h3>Filter Products</h3>
      <div className="filter-section">
        <label>Price Range:</label>
        
        <input
          type="range"
          min={0}
          max={1000}
          value={priceRange[1]}
          onChange={(e) => handlePriceChange([priceRange[0], parseInt(e.target.value, 10)])}
        />
        <span>{priceRange[0]} - ${priceRange[1]}</span>
      </div>
      <div className="filter-section">
        <label>Category:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="category"
              value="electronics"
              checked={category === 'electronics'}
              onChange={handleCategoryChange}
            />
            Electronics
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="clothing"
              checked={category === 'clothing'}
              onChange={handleCategoryChange}
            />
            Clothing
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="books"
              checked={category === 'books'}
              onChange={handleCategoryChange}
            />
            Books
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="home"
              checked={category === 'home'}
              onChange={handleCategoryChange}
            />
            Home & Furniture
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="sports"
              checked={category === 'sports'}
              onChange={handleCategoryChange}
            />
            Sports & Outdoors
          </label>
        </div>
      </div>
      <div className="filter-section">
        <label>Rating:</label>
        <div className="radio-group">
          {[1, 2, 3, 4, 5].map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="rating"
                value={value}
                checked={rating === value}
                onChange={handleRatingChange}
              />
              {`${value} Stars`}
            </label>
          ))}
        </div>
      </div>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default ProductFilter;
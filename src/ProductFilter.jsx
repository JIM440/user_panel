import React, { useState } from 'react';

const ProductFilter = ({ products, onFilter }) => {
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('');
  const [orderBy, setOrderBy] = useState('');

  const handleChange = (event) => {
    if (event.target.name === 'filter') {
      setFilter(event.target.value);
    } else if (event.target.name === 'category') {
      setCategory(event.target.value);
    } else if (event.target.name === 'orderBy') {
      setOrderBy(event.target.value);
    }

    onFilter(filter, category, orderBy);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter products..."
        name="filter"
        value={filter}
        onChange={handleChange}
      />
      <select name="category" value={category} onChange={handleChange}>
        <option value="">All Categories</option>
        <option value="iPhone">iPhone</option>
        <option value="iPad">iPad</option>
        <option value="MacBook">MacBook</option>
        <option value="Apple Watch">Apple Watch</option>
      </select>
      <select name="orderBy" value={orderBy} onChange={handleChange}>
        <option value="">Order By</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;

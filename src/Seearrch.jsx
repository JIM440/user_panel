import React, { useState } from 'react';
import ProductFilter from './ProductFilter';

const Seearrch = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'iPhone 13',
      category: 'iPhone',
      createdAt: new Date('2022-01-01'),
    },
    {
      id: 2,
      name: 'iPad Pro',
      category: 'iPad',
      createdAt: new Date('2023-05-15'),
    },
    {
      id: 3,
      name: 'MacBook Pro',
      category: 'MacBook',
      createdAt: new Date('2021-09-30'),
    },
    // ...
  ]);

  const handleFilter = (filter, category, orderBy) => {
    let filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    if (orderBy === 'newest') {
      filteredProducts = filteredProducts.sort((a, b) =>
        a.createdAt < b.createdAt ? 1 : -1
      );
    } else if (orderBy === 'oldest') {
      filteredProducts = filteredProducts.sort((a, b) =>
        a.createdAt > b.createdAt ? 1 : -1
      );
    }

    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>Product Filter</h1>
      <ProductFilter products={products} onFilter={handleFilter} />
    </div>
  );
};

export default Seearrch;

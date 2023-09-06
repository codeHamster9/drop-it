import { useState } from 'react';
import Input from '../../atoms/Input';

import ProductList from '../../molecules/ProductList';
import './product-catalog.css';

const filterProducts = (products, query) => {
  if (!query) return products;
  return products.filter((p) => {
    const id = p.id.toString();
    const title = p.title.toLowerCase();
    return id.includes(query) || title.includes(query);
  });
};

const ProductCatalog = ({ products, onClick }) => {
  const [search, setSearch] = useState('');

  return (
    <div className="catalog-container">
      <span className="main-title">Catalog</span>
      <Input value={search} onChange={(e) => setSearch(e.target.value)} />
      <ProductList
        products={filterProducts(products, search)}
        onClick={onClick}
      />
    </div>
  );
};

export default ProductCatalog;

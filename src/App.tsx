import { FC, useEffect, useState } from 'react';
import { fetchProducts } from './api/products';
import Badge from './components/atoms/Badge';
import ProductCatalog from './components/organism/ProductCatalog';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const getProducts = async () => {
    const productResponse = await fetchProducts();
    setProducts(productResponse);
  };

  const onProductClick = (id) => {
    setCount(count + 1);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="app-container">
      <div className="header">
        <span className="logo"></span>
        <Badge count={count} />
      </div>
      <ProductCatalog products={products} onClick={onProductClick} />
    </div>
  );
};

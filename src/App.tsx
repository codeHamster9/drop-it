import { FC } from 'react';
import ProductCard from './components/molecules/ProductCard';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const product = {
    id: '0322211091549',
    title: 'Men black T-shirt',
    price: 22.7,
  };
  return (
    <div>
      <ProductCard {...product} />
    </div>
  );
};

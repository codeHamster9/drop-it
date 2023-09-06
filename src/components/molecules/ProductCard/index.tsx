import { FunctionComponent } from 'react';
import Card from '../../atoms/Card';
import './product-card.css';

type Props = {
  id: string;
  title: string;
  price: number;
  currency?: string;
};

const CatalogProduct: FunctionComponent<Props> = ({
  id,
  title,
  price,
  currency = '$',
}) => {
  return (
    <Card>
      <div className="container">
        <div className="image"></div>
        <div className="details-container">
          <div className="code">{id}</div>
          <div className="title">{title}</div>
          <div className="price">
            {currency}
            {price}
          </div>
        </div>
        <div className="action-btn"></div>
      </div>
    </Card>
  );
};

export default CatalogProduct;

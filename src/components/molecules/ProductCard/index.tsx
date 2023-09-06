import { FunctionComponent } from 'react';
import Card from '../../atoms/Card';
import './product-card.css';

type Props = {
  id: string;
  title: string;
  price: number;
  currency?: string;
  image?: string;
  onClick: any;
};

const CatalogProduct: FunctionComponent<Props> = ({
  id,
  title,
  price,
  currency = '$',
  image,
  onClick,
}) => {
  return (
    <Card>
      <div className="container">
        <img src={image} alt="" className="image" />
        <div className="details-container">
          <div className="code">{id}</div>
          <div className="title">{title}</div>
          <div className="price">
            {currency}
            {price}
          </div>
        </div>
        <div className="action-btn" onClick={() => onClick(id)}></div>
      </div>
    </Card>
  );
};

export default CatalogProduct;

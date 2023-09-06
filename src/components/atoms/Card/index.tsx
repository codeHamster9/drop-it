import { FunctionComponent, ReactNode } from 'react';
import './card.css';

type Props = {
  children: ReactNode;
};

const Card: FunctionComponent<Props> = (props) => {
  return <div className="card">{props.children} </div>;
};

export default Card;

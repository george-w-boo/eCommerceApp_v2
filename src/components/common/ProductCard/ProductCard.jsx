import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import Button from '../Button/Button';
import { BUTTON_TYPE } from '../../../utils/enums';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE.inverted} onClick={() => addItemToCart(product)}>Add to cart</Button>
    </div>
  )
}

export default ProductCard;

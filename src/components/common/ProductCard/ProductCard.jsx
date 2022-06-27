import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../../store/cart/cart.action';
import { selectCartItems } from '../../../store/cart/cart.selector';
import Button from '../Button/Button';
import { BUTTON_TYPE } from '../../../utils/enums';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price } = product;

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE.inverted} onClick={() => dispatch(addItemToCart(cartItems, product))}>Add to cart</Button>
    </div>
  )
}

export default ProductCard;

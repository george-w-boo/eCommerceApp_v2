import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeCartItem, removeItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import './CheckoutItem.scss';

const CheckoutItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, price, quantity } = cartItem;

  const handleDecrement = product => {
    if (product.quantity <= 1) {
      return;
    };

    dispatch(removeItemFromCart(cartItems, product));
  };

  return (
    <div className='checkout-item-container'>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className="arrow" onClick={() => handleDecrement(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItemToCart(cartItems, cartItem))}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => dispatch(removeCartItem(cartItems, cartItem))}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem;

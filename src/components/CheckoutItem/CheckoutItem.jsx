import { useContext } from 'react'
import { CartContext} from '../../contexts/CartContext';
import './CheckoutItem.scss';

const CheckoutItem = ({cartItem}) => {
  const { addItemToCart, removeItemFromCart, removeCartItem } = useContext(CartContext);

  const { name, imageUrl, price, quantity } = cartItem;

  const handleDecrement = product => {
    console.log('product quantity', product.quantity);
    if (product.quantity <= 1) {
      return;
    };

    removeItemFromCart(product);
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
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => removeCartItem(cartItem)}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem;

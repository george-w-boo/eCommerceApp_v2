import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../common/CartItem/CartItem';
import Button from '../common/Button/Button';
import './CartDropdown.scss';

const CartDropdown = () => {
  const { cartItems, toggleCartIconDropdown } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    toggleCartIconDropdown();
    navigate('/checkout');
  }

  console.log('CartDropdown > cartItems', cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem cartItem={cartItem} key={cartItem.id} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown;

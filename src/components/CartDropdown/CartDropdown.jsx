import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../common/CartItem/CartItem';
import Button from '../common/Button/Button';
import { CartDropdownContainer, EmptyMessage, CartItems } from './CartDropdown.styles.jsx';

const CartDropdown = () => {
  const { cartItems, toggleCartIconDropdown } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    toggleCartIconDropdown();
    navigate('/checkout');
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? cartItems.map(cartItem => (
          <CartItem cartItem={cartItem} key={cartItem.id} />
        )) : <EmptyMessage>Your cart is empty</EmptyMessage>}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown;

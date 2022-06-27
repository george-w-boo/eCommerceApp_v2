import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartIconDropdown } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import CartItem from '../common/CartItem/CartItem';
import Button from '../common/Button/Button';
import { CartDropdownContainer, EmptyMessage, CartItems } from './CartDropdown.styles.jsx';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    dispatch(toggleCartIconDropdown());
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

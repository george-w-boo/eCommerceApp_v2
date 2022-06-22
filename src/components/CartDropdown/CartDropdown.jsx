import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../common/CartItem/CartItem';
import Button from '../common/Button/Button';
import './CartDropdown.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  console.log('CartDropdown > cartItems', cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem cartItem={cartItem} key={cartItem.id} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown;

import { useContext } from 'react';
import { CartContext} from '../../contexts/CartContext';
import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount
} from './CartIcon.styled.jsx';

const CartIcon = () => {
  const { toggleCartIconDropdown, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={toggleCartIconDropdown}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;

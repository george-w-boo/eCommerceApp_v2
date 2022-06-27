import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount } from '../../store/cart/cart.selector';
import { toggleCartIconDropdown } from '../../store/cart/cart.action';

import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount
} from './CartIcon.styled.jsx';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);

  return (
    <CartIconContainer onClick={() => dispatch(toggleCartIconDropdown())}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;

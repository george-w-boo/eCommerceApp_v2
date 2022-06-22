import { useContext } from 'react';
import { CartContext} from '../../contexts/CartContext';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';

const CartIcon = () => {
  const { toggleCartIconDropdown, cartItems } = useContext(CartContext);

  const countCartItems = () => {
    if (!cartItems.length) return 0;

    return cartItems.reduce((acc, cartItem) => {
      console.log('acc', acc);
      console.log('curItem', cartItem);
      return acc + cartItem.quantity
    }, 0)
  };

  return (
    <div className='cart-icon-container' onClick={toggleCartIconDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className="item-count">{countCartItems()}</span>
    </div>
  )
}

export default CartIcon;

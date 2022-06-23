import { useContext } from 'react';
import { CartContext} from '../../contexts/CartContext';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';

const CartIcon = () => {
  const { toggleCartIconDropdown, cartCount } = useContext(CartContext);

  return (
    <div className='cart-icon-container' onClick={toggleCartIconDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon;
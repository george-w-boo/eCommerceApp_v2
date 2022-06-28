import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from './Navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className="logo"/>
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' to='/' onClick={() => dispatch(signOutStart())}>
              SIGN-OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              SIGN-IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
import { useContext} from 'react';
import { signOutUser } from '../../utils/firebase/firebase';
import { UserContext } from '../../contexts/UserContext';
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { CartContext } from '../../contexts/CartContext';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from './Navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
            <NavLink as='span' to='/' onClick={signOutUser}>
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
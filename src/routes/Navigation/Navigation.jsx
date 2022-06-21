import { useContext} from 'react';
import { signOutUser } from '../../utils/firebase/firebase';
import { UserContext } from '../../contexts/UserContext';
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import './Navigation.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log('currentUser Navigation', currentUser);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <CrownLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <Link className="nav-link" to='/' onClick={signOutUser}>
              SIGN-OUT
            </Link>
          ) : (
            <Link className="nav-link" to='/auth'>
              SIGN-IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
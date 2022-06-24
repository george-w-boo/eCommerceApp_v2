import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from '../common/Button/Button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;
CartDropdownContainer.name = 'CartDropdownContainer';

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
EmptyMessage.name = 'EmptyMessage';

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
CartItems.name = 'CartItems';
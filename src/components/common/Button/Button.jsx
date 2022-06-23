import { BaseButton, GoogleSignInButton, InvertedButton } from './Button.styles.jsx';
import { BUTTON_TYPE } from '../../../utils/enums';

const getButton = (buttonType = BUTTON_TYPE.base) => 
  ({
    [BUTTON_TYPE.base]: BaseButton,
    [BUTTON_TYPE.google]: GoogleSignInButton,
    [BUTTON_TYPE.inverted]: InvertedButton
  }[buttonType])


const Button = ({children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton
      {...otherProps}
    >
      {children}
    </CustomButton>
  );
}

export default Button;

import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from './Button.styles';
import { BUTTON_TYPE } from '../../../utils/enums';
import { FC, ButtonHTMLAttributes } from 'react';

const getButton = (buttonType = BUTTON_TYPE.base): typeof BaseButton => 
  ({
    [BUTTON_TYPE.base]: BaseButton,
    [BUTTON_TYPE.google]: GoogleSignInButton,
    [BUTTON_TYPE.inverted]: InvertedButton
  }[buttonType])

export type ButtonProps = {
  buttonType?: BUTTON_TYPE;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton
      disabled={isLoading}
      {...otherProps}
    >
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
}

export default Button;

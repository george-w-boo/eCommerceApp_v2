import styled from 'styled-components';
import Button from '../common/Button/Button';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
PaymentFormContainer.displayName = 'PaymentFormContainer';

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;
FormContainer.displayName = 'FormContainer';

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
PaymentButton.displayName = 'PaymentButton';

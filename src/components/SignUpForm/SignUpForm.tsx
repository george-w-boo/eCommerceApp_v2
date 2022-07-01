import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { signUpStart } from '../../store/user/user.action';
import FormInput from '../common/FormInput/FormInput';
import Button from '../common/Button/Button';

import './SignUpForm.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value });
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords dont match');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));

      resetFormFields();
    } catch(error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('user already exists')
      }
    }
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password:</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Display Name' type="text" required onChange={handleChange} name='displayName' value={displayName} />
        <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email} />
        <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password} />
        <FormInput label='Confirm Password' type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
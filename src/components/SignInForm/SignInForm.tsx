import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';
import FormInput from "../common/FormInput/FormInput";
import Button from "../common/Button/Button";
import { BUTTON_TYPE } from '../../utils/enums';
import '../SignUpForm/SignUpForm';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { email, password } = formFields;

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

    try {
      dispatch(emailSignInStart(email, password));

      resetFormFields();
    } catch(error) {
      console.log('sign in failed', error);
    }
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  return (
    <div className='sign-up-container'>
      <h2>I already have an account</h2>
      <span>Sign up with your email and password:</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email} />
        <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password} />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button onClick={signInWithGoogle} buttonType={BUTTON_TYPE.google} type='button'>Sign-in with Google</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;

// import { useEffect } from 'react';
import { useState } from 'react';
import { 
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  // signInWithGoogleRedirect,
  // auth
} from '../../utils/firebase/firebase';
// import { getRedirectResult } from 'firebase/auth';
import FormInput from "../common/FormInput/FormInput";
import Button from "../common/Button/Button";
import { BUTTON_TYPE } from '../../utils/enums';
import '../SignUpForm/SignUpForm';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  // EXAMPLE WITH GOOGLE REDIRECT SIGN-IN
  // useEffect(() => {
  //   (async () => {
  //     const response = await getRedirectResult(auth);
  
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   })()
  // }, []);

  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch(error) {
      console.log(error.code);
      switch(error.code) {
        case 'auth/wrong-password':
          alert('wrong password');
          break;
        case 'auth/user-not-found':
          alert('the user does not exist');
          break;
        default:
          alert('something went wrong');
          console.log('error', error);
          return;
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // }
  return (
    <div className='sign-up-container'>
      <h2>I already have an account</h2>
      <span>Sign up with your email and password:</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email} />
        <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password} />
        <div className='buttons-container'>
          <Button type='submit' onClick={handleSubmit}>Sign In</Button>
          <Button onClick={signInWithGoogle} buttonType={BUTTON_TYPE.google} type='button'>Sign-in with Google</Button>
          {/* <Button onClick={logGoogleRedirectUser} buttonType='google' type='button'>Sign-in with Google Redirect</Button> */}
        </div>
      </form>
    </div>
  )
}

export default SignInForm;

// import { useEffect } from 'react';
import { useState } from 'react';
import { 
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  // signInWithGoogleRedirect,
  // auth
} from '../../utils/firebase/firebase';
// import { getRedirectResult } from 'firebase/auth';
import FormInput from "../common/FormInput/FormInput";
import Button from "../common/Button/Button";
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

    console.log('state', formFields);

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);

      console.log('signedInUser', user);

      resetFormFields();
    } catch(error) {
      console.log(error);
    }
  }


  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

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
          <Button onClick={signInWithGoogle} buttonType='google'>Sign-in with Google</Button>
          {/* <button onClick={logGoogleRedirectUser}>Sign-in with Google Redirect</button> */}
        </div>
      </form>
    </div>
  )
}

export default SignInForm;

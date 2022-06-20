// import { useEffect } from 'react';
import { 
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
  // auth
} from '../../utils/firebase/firebase';
// import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignIn = () => {
  // EXAMPLE WITH GOOGLE REDIRECT SIGN-IN
  // useEffect(() => {
  //   (async () => {
  //     const response = await getRedirectResult(auth);
  
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   })()
  // }, []);


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // }

  return (
    <>
      <div>Sign-In component</div>
      <button onClick={logGoogleUser}>Sign-in with Google Popup</button>
      {/* <button onClick={logGoogleRedirectUser}>Sign-in with Google Redirect</button> */}
      <SignUpForm />
    </>
  )
}

export default SignIn;
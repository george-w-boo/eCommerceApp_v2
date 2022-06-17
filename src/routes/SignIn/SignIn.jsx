import { signInWithGooglePopup } from '../../utils/firebase/firebase';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();

    console.log(response);
  }

  return (
    <>
      <div>Sign-In component</div>
      <button onClick={logGoogleUser}>Sign-in with Google Popup</button>
    </>
  )
}

export default SignIn;
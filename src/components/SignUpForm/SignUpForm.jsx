import { getAllByPlaceholderText } from '@testing-library/react';
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords dont match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch(error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('user already exists')
      }
    }
  }

  return (
    <div>
      <h1>Sign up with your email and password:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="displayName">Display Name</label>
        <input type="text" required onChange={handleChange} name='displayName' value={displayName} />
        <label htmlFor="email">Email</label>
        <input type="email" required onChange={handleChange} name='email' value={email} />
        <label htmlFor="password">Password</label>
        <input type="password" required onChange={handleChange} name='password' value={password} />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
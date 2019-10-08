import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
          label='Display Name'
          required
        ></FormInput>
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          label='Email'
          required
        ></FormInput>
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          label='Password'
          required
        ></FormInput>
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          label='Confirm Paswword'
          required
        ></FormInput>
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);

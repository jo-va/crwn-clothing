import React from 'react';
import { connect } from 'react-redux';

import { useFormInput } from '../../hooks/use-form-input';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
  const displayName = useFormInput('');
  const email = useFormInput('');
  const password = useFormInput('');
  const confirmPassword = useFormInput('');

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({
      displayName: displayName.value,
      email: email.value,
      password: password.value
    });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          label='Display Name'
          required
          {...displayName}
        ></FormInput>
        <FormInput
          type='email'
          name='email'
          label='Email'
          required
          {...email}
        ></FormInput>
        <FormInput
          type='password'
          name='password'
          label='Password'
          required
          {...password}
        ></FormInput>
        <FormInput
          type='password'
          name='confirmPassword'
          label='Confirm Paswword'
          required
          {...confirmPassword}
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

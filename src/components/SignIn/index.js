import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  TextLink
} from './SigninElements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>HomeTherapy</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Login</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Senha</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Entrar</FormButton>
              <TextLink to='/forgot'>Esqueceu a senha?</TextLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;

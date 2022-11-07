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
} from './SignUpElements';

const SignUp = () => {
  function enviarEmail(e){
    e.preventDefault();
    console.log('Testando')
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>HomeTherapy</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Faça o seu cadastro:</FormH1>
              <FormLabel>Nome</FormLabel>
              <FormInput type='name' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Senha</FormLabel>
              <FormInput type='password' required />
              <FormButton onClick={enviarEmail} type='submit'>Enviar</FormButton>
              <TextLink to='/signin'>Já possui uma conta? Login</TextLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;

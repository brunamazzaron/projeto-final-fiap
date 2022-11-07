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
  Text,
} from './ForgotAccountElements';

const ForgotAccount = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>HomeTherapy</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Esqueceu a sua senha:</FormH1>
              <Text>Nova senha</Text>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormButton type='submit'>Enviar</FormButton>
            </Form>
          </FormContent>
        </FormWrap> 
      </Container>
    </>
  );
};

export default ForgotAccount;

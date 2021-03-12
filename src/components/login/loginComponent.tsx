import React, { useCallback, useRef } from 'react';

import Input from '../../components/input/input';
import SubmitButton from '../../components/submitButton/button';

import { Container, Title, Text, TextLabel } from './styles';

const LoginComponent: React.FC = () => {
  const handleLogin = useCallback((data: object) => {
    console.log(data);
  }, [])
  return (
    <Container>
      <Title>Olá, seja bem-vindo!</Title>
      <Text>Para acessar a plataforma, faça seu login.</Text>
      <TextLabel>E-MAIL</TextLabel>
      <Input name="email" placeholder="Informe o e-mail" />
      <TextLabel>SENHA</TextLabel>
      <Input name="senha" placeholder="Informe a senha" />
      <SubmitButton onPress={() => {}}>ENTRAR</SubmitButton>
    </Container>
  )
}

export default LoginComponent;

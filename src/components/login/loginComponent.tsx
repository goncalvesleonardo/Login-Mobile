import React from 'react';

import { Container, Title, Text } from './styles';


const LoginComponent: React.FC = () => {
  return (
    <Container>
      <Title>Olá, seja bem-vindo!</Title>
      <Text>Para acessar a plataforma, faça seu login.</Text>
    </Container>
  )
}

export default LoginComponent;

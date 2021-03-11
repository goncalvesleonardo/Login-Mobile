import React from 'react';
import { Image } from 'react-native';

import LoginComponent from '../../components/login/loginComponent';

import { Container, ViewTop, ViewBottom, Text } from './styles';

import fundoImg from '../../assets/fundo.png';

const Login: React.FC = () => {
  return (
    <Container>
      <ViewTop>
        <Image source={fundoImg} />
      </ViewTop>
      <ViewBottom>
        <Text>Esqueceu seu login ou senha?</Text>
        <Text>Clique Aqui</Text>
      </ViewBottom>
      <LoginComponent />
    </Container>
  )
}

export default Login;

import React from 'react';
import { Image } from 'react-native';

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
    </Container>
  )
}

export default Login;

import React, { useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { useDispatch } from 'react-redux';

import LoginComponent from '../../components/login/loginComponent';
import * as UsersActions from '../../store/ducks/users/actions';

import { Container, ViewBottom, Text, ContainerImagem } from './styles';

import fundoImg from '../../assets/fundo.png';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  useEffect (() => {
    getUsers();
  }, [])

  const getUsers = async () => {
    await dispatch(UsersActions.loadRequest());
  }
  return (
    <Container>
      <ContainerImagem>
        <ImageBackground source={fundoImg} style={{flex: 1, resizeMode: "contain", justifyContent: "center", backgroundColor: 'red'}} />
      </ContainerImagem>
      <ViewBottom>
        <Text>Esqueceu seu login ou senha? {'\n'} Clique Aqui</Text>
      </ViewBottom>
      <LoginComponent />
    </Container>
  )
}

export default Login;

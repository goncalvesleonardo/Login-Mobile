import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

import SubmitButton from '../../components/submitButton/button';
import { flashError, flashSuccess } from '../../utils/index';
import { ApplicationState } from '../../store';

import { Container, Title, Text, TextLabel, ContainerInput, Input } from './styles';

const LoginComponent: React.FC = () => {
  const users = useSelector((state: ApplicationState) => state.users.data);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateLogin = () => {
    let validateLogin = false;

    users.map((user) => {
      if (user.email == email && user.password == password) {
        validateLogin = true;
      }
    })

    if (validateLogin) {
      flashSuccess('Bem-vindo');
    } else {
      flashError('Usuário ou senha inválida');
    }
  }

  const submit = () => {
    if (email == '') {
      flashError('O campo E-MAIL é obrigatório');
    } else if (password == '') {
      console.log(email, password);
      flashError('O campo SENHA é obrigatório');
    } else {
      validateLogin();
    }
  };

  return (
    <KeyboardAvoidingView
        enabled={true}
        behavior="height"
        keyboardVerticalOffset={0}
        style={{width: '90%', margin: 'auto'}}
    >
      <ScrollView
      contentContainerStyle={{ paddingBottom: 50 }}
        vertical={true}
        showsVerticalScrollIndicator={false}>
        <Container>
          <Title>Olá, seja bem-vindo!</Title>
          <Text>Para acessar a plataforma, faça seu login.</Text>
          <ContainerInput>
            <TextLabel>E-MAIL</TextLabel>
            <Input
              value={email}
              onChangeText={email => setEmail(email)}
            />
          </ContainerInput>
          <ContainerInput>
          <TextLabel>SENHA</TextLabel>
          <Input
            value={password}
            onChangeText={password => setPassword(password)}
          />
          </ContainerInput>
          <SubmitButton onPress={() => {submit()}}>ENTRAR</SubmitButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginComponent;

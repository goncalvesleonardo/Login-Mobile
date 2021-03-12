import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

export const ViewBottom = styled.View`
  position: absolute;
  width: 100%;
  height: 40%;
  left: 0;
  bottom: 0;
  background: #130525;
`;

export const Text = styled.Text`
  position: absolute;
  bottom: 20px;
  font-size: 14px;
  color: #FFF;
  line-height: 20px;
  width: 100%;
  text-align: center;
  font-family: 'Montserrat Regular';
`;

export const ContainerImagem = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
`;

import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: auto;
  min-height: 357px;
  align-items: center;
  justify-content: center;
  background: #FAF5FF;
  border-radius: 8px;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat Regular';
  width: 100%;
  margin-top: 18px;
  margin-bottom: 10px;
  max-width: 139px;
  font-size: 24px;
  text-align: center;
  color: #383E71;
`;

export const Text = styled.Text`
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #989FDB;
  font-family: 'Montserrat Regular';
`;

export const TextLabel= styled.Text`
  margin-bottom: 10px;
  width: 100%;
  left: 10px;
  font-size: 12px;
  line-height: 20px;
  text-align: left;
  color: #383E71;
  font-family: 'Montserrat Regular';
`;

export const ContainerInput = styled.View`
  width: 90%;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 48px;
  border-width: 1px;
  border-color: #989FDB;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 12px;
  font-family: 'Montserrat Regular';
`;

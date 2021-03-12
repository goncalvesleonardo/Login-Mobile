import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 72%;
  height: 15%;
  left: 15%;
  top: 6%;
  align-items: center;
  justify-content: center;

  background: #383E71;
  border-radius: 8px;
  box-shadow: 0px 10px 25px #CF99DB;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-family: 'Montserrat SemiBold';
`;

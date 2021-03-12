import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  position: absolute;
  width: 90%;
  max-width: 168px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background: #383E71;
  border-radius: 8px;
  box-shadow: 0px 10px 25px #CF99DB;
  bottom: -26px;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-family: 'Montserrat SemiBold';
`;

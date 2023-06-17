import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  height: 50px;
  width: 360px;
  background-color: ${({theme}) => theme.colors.blue};
  border-radius: 57px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.white};
  padding: 11px 24px;
`;
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  height: 60px;
  width: 200px;
  padding: 10px;
  gap: 10px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 57px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid ${({theme}) => theme.colors.blue};
`;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  flex: none;
  flex-grow: 0;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.blue};
  padding: 11px 24px;
`;
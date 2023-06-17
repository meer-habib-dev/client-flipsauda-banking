import { TextInput } from "react-native";
import styled from "styled-components/native";
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  align-items: flex-start;

  width: 358px;
  padding: 16px 18px;

  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text};
  border: 1px solid #CCCCCC;
  border-radius: 16px;

  margin-bottom: 10px;
`;
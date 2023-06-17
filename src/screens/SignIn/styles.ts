import styled from "styled-components/native";
import {Link} from '@react-navigation/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const ImgBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 600px;
  margin-left: auto;
  align-content: center;
  align-items: center;
`;

export const LogoImg = styled.Image`
  margin-top: 71px;
  width: 106px;
  height: 53px;
  position: absolute;
`;

export const Menu = styled.View`
position: fixed;
  flex: 1;
  width: 100%;
  margin-bottom: auto;
  left: 0;
  bottom: 0;
  border-radius: 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${({theme}) => theme.colors.white};
  align-items: center;
`;

export const TitleMenu = styled.Text`
  margin-right: 30%;
  margin-top: 16px;
  margin-bottom: 20px;
  font-size: 26px;
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const ForgotPassword = styled.Text`
  margin-right: 50%;
  margin-bottom: 20px;
  font-size: 12px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const CreateAccount = styled(Link)`
  margin-bottom: 20px;
  font-size: 16px;
  color: ${({theme}) => theme.colors.blue};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;
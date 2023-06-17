import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Title = styled.Text`
  position: absolute;
  font-size: 24px;
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.semiBold};

  padding-left: 20px;
  margin-top: 547px;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  margin-left: auto;
`;

export const Menu = styled.View`
  position: fixed;
  width: 100%;
  height: 216px;
  left: 0;
  bottom: 0;
  border-radius: 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${({theme}) => theme.colors.white};
  margin-bottom: auto;
  align-items: center;
`;

export const TextWelcome = styled.Text`
  margin-right: 50%;
  margin-top: 16px;
  margin-bottom: 20px;
  font-size: 24px;
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const IHaveAccount = styled.Text`
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  font-size: 16px;
  color: ${({theme}) => theme.colors.blue};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;
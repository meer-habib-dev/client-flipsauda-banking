import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};

  align-items: center;
  flex-direction: column;
  display: flex;
`;

export const LogoImg = styled.Image`
  margin-top: 71px;
  width: 106px;
  height: 53px;
  position: absolute;
`;

export const IconEmail = styled.Image`
  margin-top: 270px;
  width: 60px;
  height: 50px;
  position: absolute;
`;

export const Title = styled.Text`
  margin-top: 180px;
  margin-bottom: 30px;
  font-size: 26px;
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const Text = styled.Text`
  width: 279px;
  height: 36px;
  margin-top: 130px;
  text-align: center;
  margin-bottom: 20px;
  font-size: 12px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

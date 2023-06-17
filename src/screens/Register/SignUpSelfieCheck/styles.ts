import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  flex-direction: column;
  display: flex;
`;

export const AlignButtons = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: 30%;
`;

export const ContainerHeader = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-right: 40%;
  margin-left: 5%;
`;

export const ContainerForm = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  align-items: center;
  flex-direction: column;
  display: flex;
`;

export const LogoImg = styled.Image`
  width: 106px;
  height: 53px;
  margin-bottom: 25px;
`;

export const Title = styled.Text`
  margin-bottom: 13px;
  font-size: 26px;
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const Text = styled.Text`
  width: 279px;
  height: 36px;
  text-align: center;
  margin-bottom: 70px;
  font-size: 12px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const TextBlule = styled.Text`
  font-size: 16px;
  margin-bottom: 24px;
  color: ${({theme}) => theme.colors.blue};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;
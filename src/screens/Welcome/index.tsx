import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import welcome_01 from "../../../assets/welcome_01.png"
import { Button } from '../../global/components/Button';
import { Container, Title, ImageBackground, Menu, TextWelcome, IHaveAccount } from './styles';


export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('signin');
  }

  return (
    <Container>
      <ImageBackground source={welcome_01}>
      <LinearGradient style={{
            position: 'absolute',
            flex: 1,
            width: '100%',
            height: '100%',
          }}
            start={[0.1, 0.1]}
            colors={['rgba(130, 211, 255, 0)', "#002C44"]}>
          </LinearGradient>
      </ImageBackground>
      <Title>Segurança para realizar seu procedimento</Title>
      <Menu>
        <TextWelcome>Boas vindas!</TextWelcome>
        <Button title='Começar' onPress={handleStart}/>
        <IHaveAccount>Ja tenho uma conta</IHaveAccount>
      </Menu>
    </Container>
  );
}
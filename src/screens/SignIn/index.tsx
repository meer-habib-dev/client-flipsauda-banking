import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Container, CreateAccount, ForgotPassword, ImgBackground,LogoImg, Menu, TitleMenu } from './styles';
import signInImage from '../../../assets/signInImg.png';
import logoFlip from '../../../assets/logo_flip.png';
import { Input } from '../../components/SignIn/Input';
import { Button } from '../../global/components/Button';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

export function SignIn() {

  return (
    <Container>
      <ImgBackground source={signInImage}>
        <LinearGradient style={{
              flex: 1,
              width: '100%',
              height: '100%',
            }}
              start={[0.1, 0.1]}
              colors={['#1B82FB80', "#37B4E1"]}>
            </LinearGradient>
        <LogoImg source={logoFlip}/>
      </ImgBackground>
      <Menu>
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss} accessible={false}>
        <>
          <TitleMenu>Bem vindo de volta!</TitleMenu>
          <Input inputMode='numeric' placeholderTextColor="rgba(77, 77, 77, 0.7)" placeholder='CPF/CNPJ'/>
          <Input inputMode='text' placeholderTextColor="rgba(77, 77, 77, 0.7)" placeholder='Senha' onChange={() => {}} secureTextEntry />
          <ForgotPassword>Esqueci minha senha</ForgotPassword>
          <Button title='Entrar'/>
        <CreateAccount to={{ screen: "signup"}}>Criar uma conta</CreateAccount>
        </>
      </TouchableWithoutFeedback>
      </Menu>
    </Container>
  );
}
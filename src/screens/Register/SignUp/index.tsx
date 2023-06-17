import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import { Container, LogoImg, Title, Text, TextBlule, ContainerHeader, ContainerForm } from './styles';
import LogoFlip from '../../../../assets/logo_flip_cor.png';
import {Input} from '../../../components/SignUp/Input';
import { Button } from '../../../global/components/Button';


export function SignUp() {

  const navigation = useNavigation();

  function handleContinue() {
    navigation.navigate('signuppass');
  }

  return (
    <Container>
      <ProgressBar progress={0.14} style={{marginTop: 74, width: "80%", left: "10%", marginBottom: 25, borderRadius: 25}} color="#16B4EE"/>
      <ContainerHeader>
      <Icon name="arrowleft" size={16} color="#4d4d4d" style={{}}/>
        <LogoImg source={LogoFlip}/>
      </ContainerHeader>
      
      <ContainerForm>
      <Title>Boas-vindas!</Title>
      <Text>Precisaremos de suas informações básicas para criar sua conta.</Text>
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss} accessible={false}>
          <View>
            <Input inputMode='text' placeholderTextColor="rgba(77, 77, 77, 0.7)" placeholder='Nome completo'/>
            <Input inputMode='numeric' placeholderTextColor="rgba(77, 77, 77, 0.7)" placeholder='CPF'/>
            <Input inputMode='numeric' placeholderTextColor="rgba(77, 77, 77, 0.7)" placeholder='Data de nascimento' style={{marginBottom: 225}}/>
            <Button title='Criar conta' style={{marginBottom: 24}} onPress={handleContinue}/>
          </View>
        </TouchableWithoutFeedback>
      <TextBlule>Já tenho uma conta</TextBlule>
    </ContainerForm>
    </Container>
  );
}
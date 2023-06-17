import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';


import { Container, LogoImg, Title, Text, ContainerHeader, ContainerForm } from './styles';
import LogoFlip from '../../../../assets/logo_flip_cor.png';
import {Input} from '../../../components/SignUp/Input';
import { Button } from '../../../components/SignUp/Button';

export function SignUpPassword() {

  const navigation = useNavigation();

  function handleContinue() {
    navigation.navigate('signupselfie');
  }

  return (
    <Container>
      <ProgressBar progress={0.28} style={{marginTop: 74, width: "80%", left: "10%", marginBottom: 25, borderRadius: 25}} color="#16B4EE"/>
      <ContainerHeader>
      <Icon name="arrowleft" size={16} color="#4D4D4D80" style={{}}/>
        <LogoImg source={LogoFlip}/>
      </ContainerHeader>
      
      <ContainerForm>
      <Title>Senha</Title>
      <Text>Crie uma senha para acessar e fazer as transações dentro da sua conta.</Text>
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss} accessible={false}>
          <View>
            <Input inputMode='numeric' placeholderTextColor="rgba(77, 77, 77, 0.7)" placeholder='Senha' style={{marginBottom: 350}}/>
            <Button title='Continuar' onPress={handleContinue}/>
          </View>
        </TouchableWithoutFeedback>
    </ContainerForm>
    </Container>
  );
}
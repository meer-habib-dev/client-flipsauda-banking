import React from 'react';

import { ProgressBar } from 'react-native-paper';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconArrowLef from 'react-native-vector-icons/AntDesign';
import {Camera} from 'expo-camera';
import {useNavigation} from '@react-navigation/native';

import { Container, LogoImg, Title, Text, ContainerHeader, ContainerForm, AlignButtons } from './styles';
import LogoFlip from '../../../../assets/logo_flip_cor.png';
import { Button } from '../../../components/SignUp/Button';

export function SignUpSelfie() {

  const navigation = useNavigation();

  function handleContinue() {
    navigation.navigate('signupselfiecheck');
  }

  return (
    <Container>
      <ProgressBar progress={0.42} style={{marginTop: 74, width: "80%", left: "10%", marginBottom: 25, borderRadius: 25}} color="#16B4EE"/>
      <ContainerHeader>
      <IconArrowLef name="arrowleft" size={16} color="#4D4D4D80" />
        <LogoImg source={LogoFlip}/>
      </ContainerHeader>
      
      <ContainerForm>
      <Title>Hora da Selfie!</Title>
      <Text>Envie uma selfie com boa iluminação e que mostre bem o seu rosto. Evite qualquer tipo de cobertura facial.</Text>
        <View>
          <Icon name="user-circle" size={160} color="#4d4d4d" style={{marginTop: 80}}/>
        </View>
      </ContainerForm>
      <AlignButtons>
        <Button title='Tirar foto' onPress={handleContinue}/>
      </AlignButtons>
    </Container>
  );
}
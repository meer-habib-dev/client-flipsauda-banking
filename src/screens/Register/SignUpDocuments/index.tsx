import React from 'react';

import { ProgressBar } from 'react-native-paper';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconArrowLef from 'react-native-vector-icons/AntDesign';

import { Container, 
          LogoImg, 
          Title, 
          Text, 
          ContainerHeader, 
          ContainerForm, 
          AlignButtons,
          ContainerImages,
          Image,
          BorderImage
        } from './styles';
import LogoFlip from '../../../../assets/logo_flip_cor.png';
import card_document from '../../../../assets/signupdocuments/card-document.png';
import border_document from '../../../../assets/signupdocuments/border-document.png';
import { Button } from '../../../components/SignUp/Button';


export function SignUpDocuments() {
  return (
    <Container>
      <ProgressBar progress={0.70} style={{marginTop: 74, width: "80%", left: "10%", marginBottom: 25, borderRadius: 25}} color="#16B4EE"/>
      <ContainerHeader>
      <IconArrowLef name="arrowleft" size={16} color="#4D4D4D80" />
        <LogoImg source={LogoFlip}/>
      </ContainerHeader>
      
      <ContainerForm>
      <Title>Documentos</Title>
      <Text>Chegamos na última etapa! Precisaremos do envio do seu RG ou CNH. Qual deseja enviar?
</Text>
        <ContainerImages>
          <BorderImage source={border_document}/>
          <Image source={card_document}/>
        </ContainerImages>
      </ContainerForm>
      <AlignButtons>
        <Button title='CNJ' width="170px"/>
        <Button title='RG' width="170px"/>
      </AlignButtons>
    </Container>
  );
}
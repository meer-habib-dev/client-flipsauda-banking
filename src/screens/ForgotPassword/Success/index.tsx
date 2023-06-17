import React from 'react';
import { Container, LogoImg, Title, Text, IconEmail } from './styles';

import LogoFlip from '../../../../assets/logo_flip_cor.png';
import IconMail from '../../../../assets/Icon-email.png';
import { Button } from '../../../components/SignIn/Button';

export function Success() {
  return (
    <Container>
      <LogoImg source={LogoFlip}/>
      <Title>Redefinir senha</Title>
      <IconEmail source={IconMail}/>
      <Text>
        Enviamos um e-mail com as instruções para redefinir sua senha.
      </Text>

      <Button title='Reenviar E-mail'/>
    </Container>
  );
}
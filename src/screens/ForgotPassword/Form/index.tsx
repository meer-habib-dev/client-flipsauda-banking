import React from 'react';
import { Container,LogoImg, Title, Text } from './styles';

import LogoFlip from '../../../../assets/logo_flip_cor.png';
import { Input } from '../../../components/ForgotPassword/Input';
import { Button } from '../../../global/components/Button';

export function ForgotPasswordForm() {
  return (
    <Container>
      <LogoImg source={LogoFlip}/>
      <Title>Redefinir senha</Title>
      <Text>Digite seu endereço e-mail e enviaremos instruções para redefinir sua senha</Text>
      <Input inputMode='email' placeholderTextColor="rgba(77, 77, 77, 0.7)" placeholder='Email'/>
      <Button title='Continuar' style={{marginTop: 400}}/>
    </Container>
  );
}
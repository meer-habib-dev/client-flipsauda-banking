import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps{
  title: string;
  width?: string;
}

export function Button({title, width, ...rest}: Props) {
  return (
    <Container width={width} {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}
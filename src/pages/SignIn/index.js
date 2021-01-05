import React from 'react';
import {Image} from 'react-native';

import logo from '../../assets/chuva_logo.jpg';

import Background from '../../components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

const SignIn = ({navigation}) => {
  return (
    <Background>
      <Container>
        <Image source={logo} style={{width: 150, height: 150}} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            auttoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Password"
          />

          <SubmitButton onPress={() => {}}>Login</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Register</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
};

export default SignIn;

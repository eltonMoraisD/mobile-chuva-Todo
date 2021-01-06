import React, {useRef} from 'react';
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
  const passwordRef = useRef();
  function handleSubmit() {}
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
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Password"
            ref={passwordRef}
            returnKeyType="default"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Login</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Register</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
};

export default SignIn;

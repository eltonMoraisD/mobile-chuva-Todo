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

const SignUp = ({navigation}) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {}
  return (
    <Background>
      <Container>
        <Image source={logo} style={{width: 150, height: 150}} />
        <Form>
          <FormInput
            icon="person-outline"
            auttoCorrect={false}
            autoCapitalize="none"
            placeholder="Name"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            auttoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail"
            returnKeyType="next"
            ref={emailRef}
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Password"
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Register</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Already have account?</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
};

export default SignUp;

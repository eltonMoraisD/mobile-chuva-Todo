import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {signInRequest} from '../../store/modules/auth/actions';

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
  const {loading} = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

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
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Password"
            ref={passwordRef}
            returnKeyType="default"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Login
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Register</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
};

export default SignIn;

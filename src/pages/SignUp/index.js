import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Image} from 'react-native';

import logo from '../../assets/chuva_logo.jpg';

import Background from '../../components/Background';

import {signUpRequest} from '../../store/modules/auth/actions';

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

  const {loading} = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }
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
            value={name}
            onChangeText={setName}
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
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Password"
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Register
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Already have account?</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
};

export default SignUp;

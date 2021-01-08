import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Image} from 'react-native';

import api from '../../services/api';

import Background from '../../components/Background';
import CardTodo from '../../components/CardTodo';

import {Container, Form, FormInput, SubmitButton, List} from './styles';

import {store} from '../../store';
import {todoRequest} from '../../store/modules/todo/actions';

const Todos = () => {
  const dispatch = useDispatch();

  const [stateTodos, setTodos] = useState([]);
  const [dependencies, setDependencies] = useState(false);
  let textInput;
  let textValue = '';

  useEffect(() => {
    async function listTodos() {
      const token = store.getState().auth.token;
      const response = await api.get('/user/todos', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
      setTodos(response.data);
    }
    listTodos();
  }, [setTodos]);

  const handleSubmit = (data) => {
    if (textValue.trim() !== '' && textValue.length > 0) {
      setTodos((prev) => {
        return [...prev, data];
      });
      setDependencies(true);
      dispatch(todoRequest(textValue));
    }

    textInput && textInput.clear();
  };

  const handleDelete = (id) => {
    const token = store.getState().auth.token;

    async function deleteTodo() {
      try {
        await api.delete(`/user/delete-todos/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
      } catch (error) {}
    }

    deleteTodo();
  };

  const _onChangeText = (text) => (textValue = text);

  return (
    <Background>
      <Container>
        <Image source={require('../../assets/complete-logo.svg')} />
        <Form>
          <FormInput
            icon="event"
            auttoCorrect={false}
            placeholder="Create To-Do"
            onChangeText={_onChangeText}
            onSubmitEditing={handleSubmit}
            defaultValue={stateTodos.description}
          />
          <SubmitButton onPress={handleSubmit}>Add</SubmitButton>
        </Form>
        <List
          data={stateTodos}
          keyExtractor={(item) => String(item._id)}
          renderItem={({item}) => (
            <CardTodo handleDelete={handleDelete} data={item} />
          )}
        />
      </Container>
    </Background>
  );
};

export default Todos;

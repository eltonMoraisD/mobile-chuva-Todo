import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Image, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import Background from '../../components/Background';
import CardTodo from '../../components/CardTodo';
import {Container, Form, FormInput, SubmitButton, Logout, List} from './styles';
import {store} from '../../store';
import {todoRequest} from '../../store/modules/todo/actions';
import {signOut} from '../../store/modules/auth/actions';

const Todos = () => {
  const dispatch = useDispatch();

  const [stateTodos, setTodos] = useState([]);
  let textInput;
  let textValue = '';

  useEffect(() => {
    const token = store.getState().auth.token;
    async function listTodos() {
      const response = await api.get('/user/todos', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });

      setTodos(response.data);
    }
    listTodos();
  }, [stateTodos.length]);

  const handleSubmit = (data) => {
    if (textValue.trim() !== '' && textValue.length > 0) {
      setTodos((prev) => {
        return [...prev, textValue];
      });
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
        setTodos(...stateTodos);
      } catch (error) {}
    }
    deleteTodo();
  };

  const handleLogout = () => {
    dispatch(signOut());
  };

  const onChangeText = (text) => (textValue = text);

  return (
    <Background>
      <Logout>
        <TouchableOpacity activeOpacity={0.5} onPress={handleLogout}>
          <Image source={require('../../assets/power-off-icon.svg')} />
        </TouchableOpacity>
      </Logout>
      <Container>
        <Image source={require('../../assets/complete-logo.svg')} />
        <Form>
          <FormInput
            icon="event"
            auttoCorrect={false}
            placeholder="Create To-Do"
            onChangeText={onChangeText}
            onSubmitEditing={handleSubmit}
            value={stateTodos.description}
            ref={(el) => (textInput = el)}
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

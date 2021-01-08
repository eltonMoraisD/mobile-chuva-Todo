import React from 'react';
import {TouchableOpacity} from 'react-native';

import {
  Container,
  Left,
  Right,
  UpdateIcon,
  Description,
  DeleteTodo,
} from './styles';

const Card = ({data, handleDelete}) => {
  return (
    <Container>
      <Left>
        <Description>{data.description}</Description>
      </Left>

      <Right>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => console.tron.log('botao update')}>
          <UpdateIcon source={require('../../assets/updateIconTodo.svg')} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => handleDelete(data._id)}>
          <DeleteTodo source={require('../../assets/deleteIconTodo.svg')} />
        </TouchableOpacity>
      </Right>
    </Container>
  );
};

export default Card;

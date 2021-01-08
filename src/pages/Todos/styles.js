import Input from '../../components/Input';
import Button from '../../components/Button';

import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin-top: 100px;
  padding: 0 30px;
  flex-direction: column;
`;
export const Form = styled.View`
  align-self: stretch;
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const FormInput = styled(Input)`
  flex: 1;
  border-radius: 5px;
  margin-right: 15px;
  height: 55px;
`;

export const SubmitButton = styled(Button)`
  width: 63px;
  height: 50px;
`;

export const Logout = styled.View`
  display: flex;
  align-self: flex-end;
  position: relative;
  top: 50px;
  right: 40px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {paddingTop: 30},
})`
  width: 100%;
`;
